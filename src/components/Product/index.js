import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../Rating";

const Product = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const data = await response.json();
            
            if (data) {
              setProduct(data);
            } else {
              throw new Error('Empty response data');
            }
          } catch (error) {
            console.error('Error fetching product:', error);
            // Handle the error, e.g., show an error message to the user
          }
    };
    fetchProduct();
  }, [id]);
  console.log(product);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const isProductExist = cart.find(item => item.id === product.id);
  
    let updatedCart;
  
    if (isProductExist) {
      updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  alert('Product Added to cart')
    if (redirect) {
      navigate('/cart');
    }
  };
  

  return (
    <div className="details">
      {Object.keys(product).length > 0 ? (
        <div className="details-align" >
          <>
            <img src={product.image} alt={product.title} className="product-img" />
          </>
          <div className="product-details">
            <p className="para">{product.category.toUpperCase()}</p>
            <h4 className="prod-title">{product.title}</h4>
            <Rating value={product.rating.rate} text={`${product.rating.count} reviews`}/>
            <p className="para">{product.description}</p>
            <hr/>
            <div className="btn-alignment">
            <p className="prod-price">${product.price}</p>
                <div>
                <button className="button" onClick={()=>handleCart(product,true)}>Buy it now</button>
                <button className="buttons" onClick={()=>handleCart(product)}>Add to cart</button>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{paddingTop:"5rem"}}>Loading....</div>
      )}
    </div>
  );
};

export default Product;
