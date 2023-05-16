import { useState } from 'react';
import { registerUser } from '../../services/UserAPI';

const SignUpPage = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await registerUser({
      username,
      email,
      password
    });
    console.log(result)
  }

  return (
    <div className="login-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
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

export default SignUpPage;