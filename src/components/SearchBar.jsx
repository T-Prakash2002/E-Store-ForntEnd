import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import "./style/SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import ShowProducts from "./ShowProducts";
import Home from "./Home";
import { SearchItem } from "../Redux/authActions";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [filterOptions, setFilterOptions] = useState("all");
    const [ProductGroup, setProductGroup] = useState("all");

  const dispatch = useDispatch();
  const { Productsdata} = useSelector((state) => state.auth);


    let ProductDataList = Productsdata;


    
    if(search?.length>0){
        ProductDataList = Productsdata.filter((product)=>{
            return product.title.toLowerCase().includes(search.toLowerCase());
        })
    }
    if(filterOptions !== 'all'){
        ProductDataList = ProductDataList.filter((product)=>{

            return product.category === filterOptions;

        })
    }
    if(ProductGroup !== 'all'){
        ProductDataList = ProductDataList.filter((product)=>{

            return product.productgroup === ProductGroup;

        })
    }



  return (
    <>
      <div className="search-bar">
        <div>
          <input
            type="text"
            placeholder="Search for products"
            className="search-input d-flex justify-content-center"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // onChange={(e)=>dispatch(SearchItem(e.target.value))}
          />
        </div>
        <div className="search-select d-flex justify-content-center">
            <select onChange={(e)=>{
                setProductGroup(e.target.value)
                console.log(e.target.value)
            }}>
                <option value="all">All</option>
                <option value="Video Games">Video Games</option>
                <option value="CE">CE</option>
                <option value="Book">Book</option>
                <option value="eBooks">eBooks</option>
            </select>

        </div>
        <div className="search-select d-flex justify-content-center">
            <select onChange={(e)=>{
                setFilterOptions(e.target.value)
            }}>
                <option value="all">All</option>
                <option value="/games/pc">PC</option>
                <option value="/games/ps4">PS4</option>
                <option value="/games/PS3">PS3</option>
                <option value="/games/wiiu">Wiiu</option>
                <option value="/games/xbox360">XBox</option>
                <option value="/books/business">Business</option>
                <option value="/books/cooking">Cooking</option>
                <option value="/books/history">History</option>
                <option value="sports">Sports</option>
                <option value="/books/programming">Programming</option>
                <option value="/books/scifi">Scifi</option>  
            </select>
        </div>
      </div>
      <div className="showProducts">
        {
          (search?.length || ProductGroup !== 'all' || filterOptions !== 'all')?(
            <ShowProducts ProductDataList={ProductDataList} />
          ):(
            <Home />
          )
        }
      </div>
    </>
  );
};

export default SearchBar;

/*

        {
            "_id": {
                "$oid": "537f3aaac769230000be7e5f"
            },
            "images": {
                "small": {
                    "url": "http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL75_.jpg",
                    "width": "75",
                    "height": "70"
                },
                "medium": {
                    "url": "http://ecx.images-amazon.com/images/I/51i1Xy1BxHL._SL160_.jpg",
                    "width": "160",
                    "height": "149"
                },
                "large": {
                    "url": "http://ecx.images-amazon.com/images/I/51i1Xy1BxHL.jpg",
                    "width": "500",
                    "height": "467"
                }
            },
            "description": [
                "Assassin'S Creed Ultimate Collection 1 & 2 Jc (Win Xpvistawin 7)"
            ],
            "metadata": [
                {
                    "key": "binding",
                    "value": "Video Game"
                },
                {
                    "key": "brand",
                    "value": "Encore Software"
                },
                {
                    "key": "catalognumberlist",
                    "value": {
                        "CatalogNumberListElement": [
                            "4747836",
                            "8087601"
                        ]
                    }
                },
                {
                    "key": "ean",
                    "value": "0705381267324"
                },
                {
                    "key": "esrbagerating",
                    "value": "Mature"
                },
                {
                    "key": "feature",
                    "value": [
                        "Sequel to the original Assassin's Creed continues the storyline as you fight to uncover a conspiracy bigger than you could imagine",
                        "Utilize an arsenal of weapons",
                        "You are an Assassin, a warrior shrouded in secrecy and feared for your ruthlessness."
                    ]
                },
                {
                    "key": "format",
                    "value": "CD-ROM"
                },
                {
                    "key": "genre",
                    "value": "Fighting Action Games"
                },
                {
                    "key": "hardwareplatform",
                    "value": "Pc"
                },
                {
                    "key": "label",
                    "value": "Encore Software"
                },
                {
                    "key": "manufacturer",
                    "value": "Encore Software"
                },
                {
                    "key": "model",
                    "value": "26732"
                },
                {
                    "key": "mpn",
                    "value": "26732"
                },
                {
                    "key": "numberofitems",
                    "value": 1
                },
                {
                    "key": "operatingsystem",
                    "value": "Windows 2000"
                },
                {
                    "key": "packagequantity",
                    "value": "1"
                },
                {
                    "key": "partnumber",
                    "value": "26732"
                },
                {
                    "key": "platform",
                    "value": [
                        "Windows 7",
                        "Windows Vista",
                        "Windows 2000",
                        "Windows XP"
                    ]
                },
                {
                    "key": "productgroup",
                    "value": "Video Games"
                },
                {
                    "key": "producttypename",
                    "value": "SOFTWARE_GAMES"
                },
                {
                    "key": "publisher",
                    "value": "Encore Software"
                },
                {
                    "key": "releasedate",
                    "value": {
                        "$date": "2011-09-01T00:00:00.000+0200"
                    }
                },
                {
                    "key": "studio",
                    "value": "Encore Software"
                },
                {
                    "key": "title",
                    "value": "Assassin's Creed I & II"
                },
                {
                    "key": "upc",
                    "value": "705381267324"
                },
                {
                    "key": "upclist",
                    "value": {
                        "UPCListElement": [
                            "705381267324"
                        ]
                    }
                }
            ],
            "binding": "Video Game",
            "brand": "Encore Software",
            "catalognumberlist": {
                "CatalogNumberListElement": [
                    "4747836",
                    "8087601"
                ]
            },
            "ean": "0705381267324",
            "esrbagerating": "Mature",
            "feature": [
                "Sequel to the original Assassin's Creed continues the storyline as you fight to uncover a conspiracy bigger than you could imagine",
                "Utilize an arsenal of weapons",
                "You are an Assassin, a warrior shrouded in secrecy and feared for your ruthlessness."
            ],
            "format": "CD-ROM",
            "genre": "Fighting Action Games",
            "hardwareplatform": "Pc",
            "label": "Encore Software",
            "price": 999,
            "currency": "USD",
            "manufacturer": "Encore Software",
            "model": "26732",
            "mpn": "26732",
            "numberofitems": 1,
            "operatingsystem": "Windows 2000",
            "packagequantity": "1",
            "partnumber": "26732",
            "platform": [
                "Windows 7",
                "Windows Vista",
                "Windows 2000",
                "Windows XP"
            ],
            "productgroup": "Video Games",
            "producttypename": "SOFTWARE_GAMES",
            "publisher": "Encore Software",
            "releasedate": {
                "$date": "2011-09-01T00:00:00.000+0200"
            },
            "studio": "Encore Software",
            "title": "Assassin's Creed I & II",
            "upc": "705381267324",
            "upclist": {
                "UPCListElement": [
                    "705381267324"
                ]
            },
            "category": "/games/pc",
            "salesrank": 1187
        },

 */