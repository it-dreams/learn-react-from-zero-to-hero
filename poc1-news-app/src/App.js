import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import Sidebar from './components/Sidebar';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const newsType = 'everything';
  const newsDomain = 'aajtak.in'; //abplive.com, indiatoday.in, indiatvnews.com, 
  const country = 'in';
  const category = 'business';
  const pageSize = '30';

  return (
    <div>
      <Navbar />
      <div className="container-fluid" style={{ minHeight: '85vh' }}>
        <div className='row'>
          <div className='col-lg-9 col-md-8 col-sm-12'>
            {/* <News style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} /> */}
            <News style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} pageSize={pageSize} />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Sidebar apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
