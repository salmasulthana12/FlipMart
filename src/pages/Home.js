import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'

const Home = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await fetch('https://fakestoreapi.com/products')
            const data=await response.json()
            setProducts(data)
        }
        fetchProducts()
    },[])
  return (
    <div>
        <Hero/>
        <Categories/>
        <h4 style={{textAlign:'center',marginBottom:'10px'}}>MOST POPULAR PRODUCTS</h4>
        {products.length>0 ? <ProductCard products={products}/>:<div>Loading....</div>}
        
    </div>
  )
}

export default Home