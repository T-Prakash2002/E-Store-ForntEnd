import React from "react";
import {useNavigate} from "react-router-dom"
import {Heart} from "lucide-react"
import { useSelector } from "react-redux";


const ShowProducts = ({ProductDataList}) => {
  const navigate=useNavigate()
  const {wishlist}=useSelector(state=>state.auth)

  return (
    <>
     {
      (ProductDataList?.length)?(
        <div className="cart d-flex flex-column justify-content-center align-items-center p-5">
       <div className="row gap-2 justify-content-center">
        
         {/*  */}
         {ProductDataList.map((item, index) => {
           return (
             <div className="card col-3 " style={{ width: "15rem" }} key={index}
             onClick={()=>{
                navigate(`/particular-product/${item._id.$oid}`)
              }}
             >


              {
                (wishlist==null)?
                ""
                :(
                (wishlist?.some(Wishitem => Wishitem?.productId == item?._id?.$oid))?
                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  <span className="visually "><Heart size={17}/></span>
                </div>
                :""
                )

              }

             




               <div className="d-flex justify-content-center pt-4">
                  <img src={item.images.small.url}  width={item.images.small.width} height={item.images.small.height} alt="..."/>
               </div>
               <div className="card-body">
                 {
                  item.title
                 }
               </div>
             </div>
           );
         })}
       </div>
     </div>
      ):(
        <div className="d-flex justify-content-center align-items-center vh-100">
          No Item Founded!
        </div>
      )
     }
    </>
  );
};

export default ShowProducts;
