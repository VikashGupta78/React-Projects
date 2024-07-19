import './App.css';
import Blog from './components/Blog';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold uppercase text-center mb-5">CodeHelp Blogs</h1>
      <Blog />
      <Pagination />
    </div>
  );
}

export default App;
