import React,{useState} from "react";
import "./style/ParticularProduct.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ArrowLeft, ShoppingCart, Heart,Plus, Minus } from "lucide-react";
import "./style/ParticularProduct.css";
import { addToCart, addToWishlist, getCart } from "../Redux/authActions";

const ParticularProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [Quantity,setQuantity]=useState(1);
  const { Productsdata,isLoggedIn,user } = useSelector((state) => state.auth);
  const { id } = useParams();

  const Product = Productsdata.find((item) => item._id.$oid === id);

  return (
    <div className="particular-product">
      <div className="row pt-3">
        <sup className="">
          <ArrowLeft
            size={30}
            onClick={() => {
              navigate(-1);
            }}
            className="BackArrow"
          />
        </sup>
      </div>
      <div className="row particular-product-row d-flex flex">
        <div className="product-image col-12 col-sm-6">
          
          <img src={Product?.images?.large?.url} alt="" />
        </div>
        <div className="product-details col-12 col-sm-6">
          <div>
            <h1>{Product?.title}</h1>

            <p>
              <strong>binding:</strong>
              <span>{Product?.binding}</span>
            </p>
            <p>
              <strong>brand:</strong>
              <span>{Product?.brand}</span>
            </p>

            <p>
              <strong>Product Group:</strong>
              <span>{Product?.productgroup}</span>
            </p>

            <p>
              <strong>Category:</strong>
              <span>{Product?.category.split("/").join("-")}</span>
            </p>
            <p>
              <strong>Price:</strong>
              <span>${Product?.price}</span>
            </p>

            <details>
              <summary>
                <strong>Description:</strong>
              </summary>
              <p>
                <span
                  dangerouslySetInnerHTML={{ __html: Product?.description }}
                ></span>
              </p>
            </details>
          </div>

          <div className="Quantity-Section">
            
            
            <button onClick={()=>{
                if(Quantity>1){
                    setQuantity(Quantity-1)
                }
            }}>
                <Minus />
            </button>
            <button>{Quantity}</button>

            <button onClick={()=>{
                if(Quantity<10){
                    setQuantity(Quantity+1)
                }
            }}>
                <Plus />
            </button>
          </div>

          <div className="row Order-product d-flex gap-3">
            <button className="btn add-to-cart-btn col-12 col-sm-6"
                onClick={()=>{
                  if(isLoggedIn){
                    dispatch(addToCart(user.email,Product._id.$oid,Quantity))
                    dispatch(getCart(user.email));
                  }
                  else{
                    alert("Please Login First")
                    navigate("/login_page")
                  }
                }}
            >
              <ShoppingCart className="login-icon" width={20} height={20} />
              Add to Cart
            </button>

            <button className="btn wishlist-btn col-12 col-sm-6"
                onClick={()=>{
                  if(isLoggedIn){
                    dispatch(addToWishlist(user.email,Product._id.$oid))
                  }else{
                    alert("Please Login First")
                    navigate("/login_page")
                  }
                }}
            >
              <Heart className="login-icon" width={20} height={20} />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularProduct;
