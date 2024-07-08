import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { Productsdata } = useSelector((state) => state.auth);

  const firstSectionData = [
    ...new Set(Productsdata.map((item) => item.category)),
  ];

  let firstSectionDataArray = [];

  for (let i = 0; i < firstSectionData.length; i++) {
    for (let j = 0; j < Productsdata.length; j++) {
      if (Productsdata[j].category === firstSectionData[i]) {
        firstSectionDataArray.push(Productsdata[j]);
        break;
      }
    }
  }

    const secondSectionData = [
    ...new Set(Productsdata.map((item) => item.productgroup)),
  ];

  let secondSectionDataArray = [];

  for (let i = 0; i < secondSectionData.length; i++) {
    for (let j = 0; j < Productsdata.length; j++) {
      if (Productsdata[j].productgroup === secondSectionData[i]) {
        secondSectionDataArray.push(Productsdata[j]);
        break;
      }
    }
  }

  return (
    <div className="home">
      
      <section className="first-section gap-5">
        <h3>Categories</h3>
        <div className="row inner-first-section px-3">
          {firstSectionDataArray.map((item, index) => {
            return (
              <div className="col-4 col-sm-2 col-md-2 col-lg-1" key={index} >
                <div className="card "title={item.category.split("/")[2]}
                  onClick={() => {
                    
                    navigate(`/product-Groups/${item.productgroup}`

                    )}}>
                  <img
                    src={item.images.small.url}
                    width={item.images.small.width}
                    height={item.images.small.height}
                    alt={item.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="second-section ">

        <div className="row inner-second-section">
          <h2 className="title-ProductGroups text-center">Product Groups</h2> 
          {secondSectionDataArray.map((item, index) => {
            return (
              <div className="col-12 col-sm-6 " key={index} >
                <div className="card m-3"title={item?.productgroup}
                  onClick={() => {
                    navigate(`/product-detail/${item?.productgroup}/${item?._id?.$oid}`
                    )}}>
                  <img
                    src={item.images?.medium?.url}
                    width={item.images?.medium?.width}
                    height={item.images?.medium?.height}
                    alt={item.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
