import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const cart = useMemo(
    () => JSON.parse(localStorage.getItem("cart")) || [],
    []
  );

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total.toFixed(2));
  }, [cart]);

  const handleDec = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleInc = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  if (cart.length === 0) {
    <div>Cart is Empty</div>;
  }
  return (
    <div className="cart">
      <div className="cart-alignment">
        {cart.length > 0 ? (
          <>
            <div className="first-part">
              <div className="cart-shop">
                <h4>Shopping Cart</h4>
                <h4>{cart?.length} Items</h4>
              </div>
              <hr />
              <table>
                <tr>
                  <th>PRODUCT DETAILS</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th>TOTAL</th>
                </tr>
                {cart?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cart-data">
                        <img className="cart-img" src={item.image} alt="" />
                        <div className="cart-details">
                          <h5>{item.title}</h5>
                          <p className="para" style={{ color: "red" }}>
                            {item.category}
                          </p>
                          <p
                            className="del"
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        className="quan-btn"
                        onClick={() => handleDec(item.id)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="quan-btn"
                        onClick={() => handleInc(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>{item.price}</td>
                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </table>
              <div className="btn">
                <button className="cont-btn">
                  <i className="fa-solid fa-arrow-left"></i> Continue Shopping
                </button>
              </div>
            </div>
            <div className="second-part">
              <h4>Order Summary</h4>
              <hr />
              <div className="section">
                <h4>{cart?.length} Items</h4>
                <p>{total}</p>
              </div>
              <hr />
              <div style={{ textAlign: "left" }}>
                <h5>SHIPPING</h5>
                <p className="para">Standard shipping - $10</p>
              </div>
              <hr />
              <div className="section">
                <h5>TOTAL COST</h5>
                <h5>${total + 10}</h5>
              </div>

              <button className="cont-btn"> CHECKOUT</button>
            </div>
          </>
        ) : (
          <div>Cart is Empty</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
