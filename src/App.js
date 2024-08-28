
import './App.css';
import Card from './components/Card/Card';
import Cities from './components/Cities/Cities';
import Collection from './components/Collection/Collection';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import GetApp from './components/GetApp/GetApp';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Collection/>
      <Cities/>
      <GetApp/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;
