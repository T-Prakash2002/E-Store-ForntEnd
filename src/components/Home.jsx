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

  let secondSectionData = [];

  for (let i = 0; i < firstSectionData.length; i++) {
    for (let j = 0; j < Productsdata.length; j++) {
      if (Productsdata[j].category === firstSectionData[i]) {
        secondSectionData.push(Productsdata[j]);
        break;
      }
    }
  }

  return (
    <div className="home">
      
      <section className="first-section gap-5">
        <h3>Categories</h3>
        <div className="row inner-first-section px-3">
          {secondSectionData.map((item, index) => {
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
    </div>
  );
};

export default Home;
