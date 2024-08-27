
import './App.css';
import Card from './components/Card/Card';
import Cities from './components/Cities/Cities';
import Collection from './components/Collection/Collection';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Collection/>
      <Cities/>
    </div>
  );
}

export default App;
