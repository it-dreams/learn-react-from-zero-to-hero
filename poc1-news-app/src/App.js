import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import NewsItem from './components/NewsItem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <News />
      <NewsItem />
      <Footer />
    </div>
  );
}

export default App;
