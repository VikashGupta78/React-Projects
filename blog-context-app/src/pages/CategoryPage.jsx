import React from 'react'
import Blog from '../components/Blog'
import Pagination from '../components/Pagination'
import { useNavigate, useLocation } from 'react-router-dom';

function CategoryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold uppercase text-center mb-5">CodeHelp Blogs</h1>
      <div>
        <button onClick={()=> navigate(-1)}>Back</button>
        <h2>Bolgs On <span>{category} </span></h2>
      </div>
      <Blog />
      <Pagination />
    </div>
  )
}

export default CategoryPage