import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import ShowProducts from "./components/ShowProducts";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import SearchBar from "./components/SearchBar.jsx";
import CategoriesProducts from "./components/CategoriesProducts.jsx";
import ParticularProduct from "./components/ParticularProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SearchBar />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "/login_page",
        element: <Login />,
      },
      {
        path: "register_page",
        element: <Registration />,
      },
      {
        path: "product-Groups/:productgroup",
        element: <CategoriesProducts />,
      },
      {
        path: "product-detail/:productgroup/:id",
        element: <ParticularProduct />,
      }


    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer
      draggable
      position="top-left"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      closeButton={false}
    />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
