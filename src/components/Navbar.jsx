import React from "react";
import "./style/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EllipsisVertical,LogIn,UserRoundPlus } from "lucide-react";
import { logout } from "../Redux/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const IsLogIn = useSelector((state) => state.auth.isLoggedIn);
  const UserDetails = useSelector((state) => state.auth.user);

  return (
    <div>
      <nav className="navbar navbar-expand-md p-3">
        <div className="container-fluid">
          <a className="navbar-brand logo fw-bold" href="#">
            project
          </a>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ">
              <EllipsisVertical color="#fcb64c" size="20px" />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {IsLogIn ? (
              <div className=" d-flex gap-2 px-2">
                <button
                  className="btn loginBtn btn-outline-secondary w-100"
                  // onClick={() =>{
                  //
                  //   dispatch(logout());
                  //   navigate("/");
                  //
                  //   }}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Log Out
                </button>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                      <div className="modal-body">

                        <div >Are you sure you want to log out?</div>
                          
                          <div className="d-flex flex-row justify-content-end gap-2 px-2 py-2">

                            <button type="button" className="btn btn-secondary w-25" data-bs-dismiss="modal" aria-label="Close">Close</button>

                            <button className="btn btn-danger w-25"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                             onClick={()=>{
                              dispatch(logout());
                              navigate("/");
                            }}>Log Out</button>
                            
                          </div>

                      </div>  
          
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" d-flex gap-2 px-2">
                <button
                  className="btn loginBtn btn-outline-secondary w-100"
                  onClick={() => {
                    navigate("/register_page");
                  }}
                >
                  Sign Up
                  <UserRoundPlus className="login-icon" width={20} height={20} />
                </button>
                <button
                  className="btn loginBtn btn-outline-secondary w-100"
                  onClick={() => {
                    navigate("/login_page");
                  }}
                >
                  
                  Log In
                    <LogIn className="login-icon" width={20} height={20} />
                  
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
