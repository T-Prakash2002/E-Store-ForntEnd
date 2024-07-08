import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWishlist,removeFromWishlist } from "../Redux/authActions";
import {Heart} from "lucide-react"
import { useNavigate } from "react-router-dom";



const Wishlist = () => {

  const {user,wishlist}=useSelector(state=>state.auth);
  const navigate = useNavigate();
  const [RemoveId,setRemoveId]=useState(1)

  let WishlistData=wishlist;

  const dispatch = useDispatch();

  if(RemoveId?.length>2){
    WishlistData=WishlistData.filter(item => item.productId != RemoveId)

    setRemoveId(1)
  }


  return (
    <div>
      <div className="cart-container">
        <h1 className="cart-title-h1 text-center">Wish List</h1>

        <ul className="cart-list row">
          {WishlistData?.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-xl-3 card-column"
              key={index}
            >
              <div className="card gap-3" key={index}>
                <sup className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  <span className="visually "><Heart size={17}/></span>
                </sup>
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

                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setRemoveId(item?.productId)
                      dispatch(
                        removeFromWishlist(
                          user.email,
                          item?.productId,
                        )
                      );
                      dispatch(getWishlist(user.email))
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wishlist;
