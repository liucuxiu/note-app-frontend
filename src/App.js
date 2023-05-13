import './styles/style.css'
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import HeaderLeft from './components/Header/HeaderLeft';
import HeaderRight from './components/Header/HeaderRight';

function App() {
  return (
    <>
      <HeaderLeft/>
      <SideBar/>
      <HeaderRight/>
      <Content/>
    </>
  );
}

export default App;
