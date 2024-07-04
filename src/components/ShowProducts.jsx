import React from "react";
// import Products from "../data.json"
import {
  useSelector
} from "react-redux"


const ShowProducts = ({ProductDataList}) => {

  // const data=Products.products;
  // const data=useSelector(state=>state.auth.SearchedList);

  console.log(ProductDataList)
  

  return (
    <>
     {
      (ProductDataList?.length)?(
        <div className="cart d-flex flex-column justify-content-center align-items-center p-5">
       <div className="row gap-2 justify-content-center">
        
         {/*  */}
         {ProductDataList.map((item, index) => {
           return (
             <div className="card col-3 " style={{ width: "15rem" }} key={index}>
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
