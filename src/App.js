import './styles/style.css';
import NotePage from './containers/NotePage/NotePage';
import LoginPage from './containers/LoginPage/LoginPage';
import useToken from './customHook/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginPage setToken={setToken}/>;
  }

  return (
    <>
      <NotePage/>
    </>
  );
}

export default App;
