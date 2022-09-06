import './App.css';
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import News from './components/pages/News';
import Sidebar from './components/shared/Sidebar';
import PageNotFound from './components/pages/PageNotFound';
import About from './components/pages/About';
import Categories from './components/pages/Categories'
import Sources from './components/pages/Sources';
import Archives from './components/pages/Archives';

function App() {
  const { category, name, date } = useParams();

  const apiKey = process.env.REACT_APP_NEWS_API;
  const newsType = 'top-headlines';
  // const newsType = 'everything';
  const newsDomain = 'aajtak.in'; //abplive.com, indiatoday.in, indiatvnews.com, 
  const country = 'in';
  // const category = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  const pageSize = 15;

  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ minHeight: '90vh', marginTop: '50px' }}>
        <div className='row'>
          <div className='col-lg-9 col-md-8 col-sm-12'>
            <Routes>
              {/* Routes for default page <News> */}
              <Route path='/' element={<Navigate replace to='category/general' />} />

              {/* Routes for About page */}
              <Route path='about' element={<About />} />

              {/* Routes for category */}
              <Route exact path='category' element={<Categories />} >
                <Route exect path=':category' element={<News key={category} style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} pageSize={pageSize} />} />
              </Route>

              {/* Routes for sources */}
              <Route exect path='source' element={<Sources />}>
                <Route exect path=':name' element={<News key={name} style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} pageSize={pageSize} />} />
              </Route>

              {/* Routes for archives */}
              <Route exect path='archive' element={<Archives />}>
                <Route exect path=':date' element={<News key={date} style={{ minHeight: '90vh' }} apiKey={apiKey} newsType={newsType} newsDomain={newsDomain} category={category} country={country} pageSize={pageSize} />} />
              </Route>

              {/* Routes for 404 page */}
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
