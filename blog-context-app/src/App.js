import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import { useContext, useEffect } from 'react';
import { appContext } from './context/appContext';
import { useSearchParams } from 'react-router-dom';


function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();
  const {fetchBlogPosts} = useContext(appContext);

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split('/').at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split('/').at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/blog/:bolgId' element= {<BlogPage />} />
      <Route path='/tags/:tag' element= {<TagPage />} />
      <Route path='/categories/:category' element= {<CategoryPage />} />
    </Routes>
    
  );
}

export default App;
