import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./style/CategoriesProducts.css";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "antd";
import { ArrowLeft } from "lucide-react";

const CategoriesProducts = () => {
  const [listindex, setListindex] = useState({
    start: 0,
    end: 20,
  });
  const navigate=useNavigate();

  const { Productsdata } = useSelector((state) => state.auth);

  const { productgroup } = useParams();

  const ListCategories = Productsdata.filter(
    (item) => item.productgroup === productgroup
  );

  const handleChange = (page) => {
    setListindex({
      start: (page - 1) * 20,
      end: page * 20,
    });
  };

  return (
    <div className="ProductGroup-Page row d-flex justify-content-center">

      <div className="row">
        <sup className=''>
                <ArrowLeft size={20} onClick={()=>{navigate(-1)}} className='BackArrow'/>
          </sup>
      </div>

      <div className="row">
        <h2 className="title-ProductGroups text-center">{productgroup}</h2>
      </div>
      

      <div className="row d-flex justify-content-center flex-wrap gap-3">
        
      
      
      {ListCategories.slice(listindex.start, listindex.end).map(
        (item, index) => {
          return (

              <div
                className="card gap-3 "
                title={item.productgroup}
                key={index}
                onClick={() => {
                  navigate(`/product-detail/${item?.productgroup}/${item?._id?.$oid}`
                  )}}
              >
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src={item.images.medium.url}
                  width={item.images.medium.width}
                  height={item.images.medium.height}
                  alt={item.title}
                />
                
                  <p className="card-title">{item.title}</p>
                </div>
              </div>
           
          );
        }
      )}
    </div>
      <div className="Pagination">
        <div
          className="pagination-container"
          style={{
            display: ListCategories.length > 20 ? "block" : "none",
          }}
        >
          <Pagination
            defaultCurrent={1}
            total={ListCategories.length}
            onChange={handleChange}
            pageSize={30}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesProducts;
