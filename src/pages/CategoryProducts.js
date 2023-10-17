import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const CategoryProducts = () => {
    const {name} = useParams()
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data=await response.json()
            setProducts(data)
        }
        fetchProducts()
    },[name])
  return (
    <div style={{paddingTop:'7rem'}}>
        {products.length>0 ? <ProductCard products={products}/>:<div>Loading....</div>}
    </div>
  )
}

export default CategoryProducts