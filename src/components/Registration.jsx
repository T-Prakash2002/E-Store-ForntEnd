import React from 'react'
import { UserRegistrationschema } from '../validation/validation'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import './style/UserRegistration.css'
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { register } from '../Redux/authActions'


function Registration() {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  return (
    <div className="login">
      
      <Formik
     
        initialValues={{
             name: '',
             email: '', 
             password: ''
        }}
        validationSchema={UserRegistrationschema}
        onSubmit={async(values, { resetForm }) => {


            const response = await dispatch(register(values.name,values.email,values.password));

            if(response.message === 'Registered Successfully'){
              navigate(-1);
              resetForm()
            }
            
        

           
        }}
      >
        <div className="loginForm registerForm">
          
          <sup className='back-button'>
                <ArrowLeft size={20} onClick={()=>{navigate(-1)}} className='BackArrow'/>
          </sup>
        <Form >

            <div>
              <h1 className="text-center form-title">Registration</h1>
            <hr />
            </div>
            
            
            <div className="form-group">
                <Field type="text" name="name" placeholder="Name" className="form-control"/>
                <ErrorMessage className='errorMsg' name="name" component="div"/>
            </div>
            <div className="form-group">
                <Field type="email" name="email" placeholder="Email" className="form-control"/>
                <ErrorMessage className='errorMsg' name="email" component="div"/>
            </div>
            <div className="form-group">
                <Field type="password" name="password" placeholder="Password" className="form-control"/>
                <ErrorMessage className='errorMsg' name="password" component="div"/>
            </div>
            <div className="button-group d-flex justify-content-center align-items-md-center gap-2">
                
                <button type="submit" className="btn btn-outline-secondary">Sign Up</button>
            </div>
        </Form>
         </div>
      </Formik>
    </div>
  )
}

export default Registration
