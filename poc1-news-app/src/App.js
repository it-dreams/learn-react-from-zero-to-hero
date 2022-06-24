import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import Sidebar from './components/Sidebar';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Categories from './components/Categories'

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const newsType = 'everything';
  const newsDomain = 'aajtak.in'; //abplive.com, indiatoday.in, indiatvnews.com, 
  const country = 'in';
  const category = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  const pageSize = 15;

  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ minHeight: '90vh' }}>
        <div className='row'>
          <div className='col-lg-9 col-md-8 col-sm-12'>
            <Routes>
              <Route exect path='about' element={<About />} />
              <Route exect path='category' element={<Categories />}>
                <Route exect path='/' element={<News key={category} style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} pageSize={pageSize} />}></Route>
              </Route>
              {/* <Route exect path='/' element={<News key='general' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='general' country={country} pageSize={pageSize} />}></Route>
              <Route exect path='/business' element={<News key='business' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='business' country={country} pageSize={pageSize} />}></Route>
              <Route exect path='/entertainment' element={<News key='entertainment' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='entertainment' country={country} pageSize={pageSize} />}></Route>
              <Route exect path='/health' element={<News key='health' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='health' country={country} pageSize={pageSize} />}></Route>
              <Route exect path='/science' element={<News key='science' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='science' country={country} pageSize={pageSize} />}></Route>
              <Route exect path='/sports' element={<News key='sports' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='sports' country={country} pageSize={pageSize} />}></Route>
              <Route exect path='/technology' element={<News key='technology' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='technology' country={country} pageSize={pageSize} />}></Route> */}
              <Route exect path='*' element={<PageNotFound />}></Route>
            </Routes>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Sidebar apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category[0]} country={country} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
