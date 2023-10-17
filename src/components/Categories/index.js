import React, {useState,useEffect}from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategory();
  }, []);

  return (
    <div className='category'>
   {categories.length===0 && <div>Loading....</div>}
    {
      categories.map((category)=>(
        <Link to={`/categories/${category}`} className='category-card'>
            <button className='category-btn'>{category.toUpperCase()}</button>
          </Link>
      )
       )
    } 
   
    </div>
  )
}

export default Categories