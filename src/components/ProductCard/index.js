import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ProductCard = ({ products }) => {

  return (
    <div className="products">
      <div className="products-card">
        {products.map((product)=>{
            return(
                <Link to={`/products/${product.id}`} className="products-items" key={product.id}>
                <div className="card">
                  <img className="card-image" alt={product.title} src={product.image} />
                  <div className="card-body">
                      <p className="para">{product.category}</p>
                    <h4 className="product-title">{product.title}</h4>
              <p className="para">${product.price}</p>
                  </div>
                </div>
              </Link>
            )
           
        })}
        
      </div>
    </div>
  );
};

export default ProductCard;
