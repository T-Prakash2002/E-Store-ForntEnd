import React, { useState, useEffect } from "react";
import { Filter, Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import ShowProducts from "./ShowProducts";
import Home from "./Home";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filterOptions, setFilterOptions] = useState("all");
  const [ProductGroup, setProductGroup] = useState("all");

  const dispatch = useDispatch();
  const { Productsdata } = useSelector((state) => state.auth);

  let ProductDataList = Productsdata;

  if (search?.length > 0) {
    ProductDataList = Productsdata.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }
  if (filterOptions !== "all") {
    ProductDataList = ProductDataList.filter((product) => {
      return product.category === filterOptions;
    });
  }
  if (ProductGroup !== "all") {
    ProductDataList = ProductDataList.filter((product) => {
      return product.productgroup === ProductGroup;
    });
  }

  return (
    <>

      <nav className="navbar navbar-expand-md search-bar" style={{backgroundColor:"#b8a2a2"}}>
        <div className="container-fluid">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search for products"
              className="form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
                <Filter color="#fcb64c" size="20px" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">


                <div className="btn-group dropstart">
                  <select
                    className="btn dropdown-toggle"
                    onChange={(e) => {
                      setProductGroup(e.target.value);
                      console.log(e.target.value);
                    }}
                    defaultValue={"all"}
                  >
                    <option disabled className="dropdown-item" defaultValue='all'>
                      Product Group
                    </option>
                    <option className="dropdown-item" value="all">All</option>
                    <option className="dropdown-item" value="Video Games">Video Games</option>
                    <option className="dropdown-item" value="CE">CE</option>
                    <option className="dropdown-item" value="Book">Book</option>
                    <option className="dropdown-item" value="eBooks">eBooks</option>
                    
                  </select>
                </div>


              </li>



              <li className="nav-item">
                <div className="btn-group dropstart">
                  {/* <span className="">Categories</span> */}
                  <select
                    className="btn dropdown-toggle"
                    onChange={(e) => {
                      setFilterOptions(e.target.value);
                    }}
                    defaultValue="all"
                  >
                    <option disabled >
                      Categories
                    </option>
                    <option className="dropdown-item" value="all">All</option>
                    <option className="dropdown-item" value="/games/pc">PC</option>
                    <option className="dropdown-item" value="/games/ps4">PS4</option>
                    <option className="dropdown-item" value="/games/PS3">PS3</option>
                    <option className="dropdown-item" value="/games/wiiu">Wiiu</option>
                    <option className="dropdown-item" value="/games/xbox360">XBox</option>
                    <option className="dropdown-item" value="/books/business">Business</option>
                    <option className="dropdown-item" value="/books/cooking">Cooking</option>
                    <option className="dropdown-item" value="/books/history">History</option>
                    <option className="dropdown-item" value="sports">Sports</option>
                    <option className="dropdown-item" value="/books/programming">Programming</option>
                    <option className="dropdown-item" value="/books/scifi">Scifi</option>
                    
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="showProducts">
        {search?.length || ProductGroup !== "all" || filterOptions !== "all" ? (
          <ShowProducts ProductDataList={ProductDataList} />
        ) : (
          <Home />
        )}
      </div>
    </>
  );
};

export default SearchBar;