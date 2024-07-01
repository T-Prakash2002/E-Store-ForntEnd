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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login_page",
    element: <Login />,
  },
  {
    path: "register_page",
    element: <Registration />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <ToastContainer />
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>
);
