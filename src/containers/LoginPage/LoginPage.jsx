import { useState } from 'react';
import { loginUser } from '../../services/UserAPI';

const LoginPage = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await loginUser({
      username,
      password
    });
    if (result.accessToken === undefined) {
      alert(result.message);
      return;
    }
    setToken({
      token: result.accessToken
    });
  }

  return (
    <div className="login-form">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" className="button">Submit</button>
        </div>

      </form>

    </div>
  );
};

export default LoginPage;