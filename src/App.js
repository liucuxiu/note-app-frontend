import './styles/style.css';
import NotePage from './containers/NotePage/NotePage';
import LoginPage from './containers/LoginPage/LoginPage';
import useToken from './customHook/useToken';
import SignUpPage from './containers/SignUpPage/SignUpPage';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <>
        <div className="signup-login-page">
          <SignUpPage className="box"/>
          <LoginPage className="box" setToken={setToken}/>;
        </div>

      </>
    );
  }

  return (
    <>
      <NotePage/>
    </>
  );
}

export default App;
