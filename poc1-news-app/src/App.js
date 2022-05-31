import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <News />
      <NewsItem />
    </div>
  );
}

export default App;
