
import './App.scss';
import NavBar from './components/NavBar';
import Banner from "./components/Banner";
import Icon from './components/Icon';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Icon/>
      <Banner anuncio="greeting"/>
    </div>
  );
}

export default App;
