import './App.css';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import News from './components/pages/News';
import Sidebar from './components/shared/Sidebar';
import PageNotFound from './components/pages/PageNotFound';
import About from './components/pages/About';
import Categories from './components/pages/Categories'

function App() {
  let { category } = useParams();

  const apiKey = process.env.REACT_APP_NEWS_API;
  const newsType = 'top-headlines';
  const newsDomain = 'aajtak.in'; //abplive.com, indiatoday.in, indiatvnews.com, 
  const country = 'in';
  // const category = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  const pageSize = 15;

  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ minHeight: '90vh' }}>
        <div className='row'>
          <div className='col-lg-9 col-md-8 col-sm-12'>
            <Routes>
              <Route path='about' element={<About />} />
              <Route path='/' element={<Navigate replace to='category/general' />} />
              {/* <Route exact path='category' element={<Categories />} /> */}
              <Route exact path='category' element={<Categories />} >
                <Route exect path=':category' element={<News key={category} style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} pageSize={pageSize} />} />
                {/* <Route exact path='general' element={<News key='general' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='general' country={country} pageSize={pageSize} />} />
                <Route exact path='business' element={<News key='business' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='business' country={country} pageSize={pageSize} />} />
                <Route exact path='entertainment' element={<News key='entertainment' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='entertainment' country={country} pageSize={pageSize} />} />
                <Route exact path='health' element={<News key='health' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='health' country={country} pageSize={pageSize} />} />
                <Route exact path='science' element={<News key='science' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='science' country={country} pageSize={pageSize} />} />
                <Route exact path='sports' element={<News key='sports' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='sports' country={country} pageSize={pageSize} />} />
                <Route exact path='technology' element={<News key='technology' style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='technology' country={country} pageSize={pageSize} />} /> */}
              </Route>
              {/* <Route path='source'>
                <Route path=':name' element={<Sidebar apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} />} />
              </Route>
              <Route path='archive'>
                <Route path=':date' element={<Sidebar apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} />} />
              </Route> */}

              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <Sidebar apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category='general' country={country} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
