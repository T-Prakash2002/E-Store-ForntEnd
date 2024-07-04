
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ShowProducts from './components/ShowProducts'
import { Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './Redux/authActions'

function App() {

  const dispatch=useDispatch();


  // useEffect(() => {
  //   console.log("fetching products");
  //   dispatch(fetchProducts());
  // }, []);


  return (
    <>
      <Navbar/>
            
    </>
  )
}

export default App
