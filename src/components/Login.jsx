import React,{useState} from 'react'
import { UserLoginschema } from '../validation/validation'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import './style/UserRegistration.css'
import axios from 'axios'
import {API_URL} from '../constants'
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import Registration from './Registration'
import { useSelector,useDispatch } from 'react-redux'
import { login } from '../Redux/authActions'
import { toast } from 'react-toastify';


function Login() {

  const { isLoggedIn} = useSelector(state => state.auth);
  const navigate=useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="login">
      
      <Formik
      
        initialValues={{
             email: '',
             password: ''
        }}
        validationSchema={UserLoginschema}
        onSubmit={async (values, { resetForm }) => {

            const response = await dispatch(login(values.email,values.password));

            if(response.message === 'Login Successful'){
              navigate(-1);
              resetForm();
            }else{
              toast.error(response.message, { className: 'Failed-toast' });
            }
        
        }}
      >
        <div className="loginForm">
          <sup className='back-button'>
                <ArrowLeft size={20} onClick={()=>{navigate(-1)}} className='BackArrow'/>
          </sup>
          <div className="login-form-title">
            <h1 className="text-center form-title">Login</h1>
            <hr />
          </div>
            
            
        <Form className='form'>
            
            <div className="form-group">

                <Field type="email" name="email" placeholder="Email" className="form-control  "/>
                <ErrorMessage className='errorMsg' name="email" component="div"/>

            </div>
            <div className="form-group">
                <Field type="password" name="password" placeholder="Password" className="form-control"/>
                <ErrorMessage className='errorMsg' name="password" component="div"/>
            </div>
            <div className="button-group d-flex justify-content-center align-items-md-center gap-2">
                <button type="submit" className="btn btn-outline-secondary">Log In</button>
            </div>
        </Form>
         </div>
      </Formik>
    </div>
  )
}

export default Login
