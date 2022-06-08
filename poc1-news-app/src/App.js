import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const newsType = 'everything';
  const newsDomain = 'aajtak.in'; //abplive.com, indiatoday.in, indiatvnews.com, 
  const country = 'in';
  const category = 'business';
  const pageSize = '30';

  return (
    <div className="App">
      <Navbar />
      <div style={{ minHeight: '85vh' }}>
        {/* <News style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} /> */}
        <News style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} pageSize={pageSize} />
      </div>
      <Footer />
    </div >
  );
}

export default App;
