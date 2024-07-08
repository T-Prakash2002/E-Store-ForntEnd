import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart, removeFromCart, getAmount } from "../Redux/authActions";
import "./style/cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart, user, TotalAmount } = useSelector((state) => state.auth);
  const [RemoveId,setRemoveId]=useState(1)

  let cartData=cart.data;

  useEffect(() => {

    dispatch(getAmount(cartData))

  },[RemoveId]);

   

  if(RemoveId?.length>2){
    cartData=cartData.filter(item => item.productId != RemoveId)

    setRemoveId(1)

    dispatch(getCart(user?.email))
  }
  return (
    <div className="cart-container">
      <h1 className="cart-title-h1 text-center">Cart</h1>

      <ul className="cart-list row">
        {cartData?.map((item, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-xl-3 card-column"
            key={index}
          >
            <div className="card gap-3" key={index}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src={item.image.medium.url}
                  width={item.image.medium.width}
                  height={item.image.medium.height}
                  alt={item.title}
                  onClick={() => {
                    navigate(
                      `/product-detail/${item?.productgroup}/${item?.productId}`
                    );
                  }}
                />

                <p className="card-title">{item?.title}</p>

                {item?.price ? (
                  <p className="card-price">
                    <strong>Price :</strong>
                    <span>{item?.price}</span>
                  </p>
                ) : (
                  ""
                )}

                <p className="card-quantity">
                  <strong>Quantity :</strong>
                  <span>{item?.quantity}</span>
                </p>

                <p>
                  <strong>Total Amount:</strong>
                  <span>{item?.quantity*item?.price}</span>
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setRemoveId(item?.productId)

                    dispatch(removeFromCart(user.email, item?.productId, item.quantity));
                    dispatch(getAmount(cartData))
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>

      <div className="Order-Summary">
        <header>Order Summary</header>

        <div className="Summary row">
          <ul className="list col-6">
            <li>Sub Total</li>
            <li>Shipping</li>
            <li>Total</li>
          </ul>
          <div className="listof-amount col-6">
            <ul className="list col-6">
              <li>{TotalAmount}</li>
              <li>+100</li>
              <li>{TotalAmount + 100}</li>
            </ul>
          </div>
          <footer>
            <button className="btn btn-primary" 
            onClick={()=>{
              
            toast.success("Ordered Successfull", { className: 'success-toast', autoClose: 2000 });
            
            }}
            >Order</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Cart;
