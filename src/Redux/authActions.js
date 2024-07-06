import axios from "axios";
import {
    LOGIN,
    LOGOUT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
} from "./authType";
import { API_URL } from "../constants";
import { toast } from 'react-toastify';

const user_email=JSON.parse(localStorage.getItem('LogInUser'))?.email;


export const login = (email, password) => async dispatch => {

    try {
        const { data } = await axios.get(`${API_URL}/login?email=${email}&password=${password}`);

        if (data.message === 'Login Successful') {
            localStorage.setItem('IsLogIn', true);
            localStorage.setItem('LogInUser', JSON.stringify(data?.user));
            localStorage.setItem('UserToken', data.Token);

            toast.success(data.message, { className: 'success-toast' });

            dispatch({
                type: LOGIN,
                payload: data.user,
            });
            return data;
        }
        else {
            return data;
        }


    }
    catch (error) {
        alert("failed");
    }
}

export const logout = () => dispatch => {

    localStorage.removeItem('IsLogIn');
    localStorage.removeItem('LogInUser');
    localStorage.removeItem('UserToken');

    dispatch({
        type: LOGOUT,
    });

    toast.warn("Logoutted !", {
        className: 'Failed-toast',
    });
}

export const register = (name, email, password) => async dispatch => {
    try {

        const { data } = await axios.post(`
        ${API_URL}/register`, {
            name,
            email,
            password
        });

        localStorage.setItem('IsLogIn', true);
        localStorage.setItem('LogInUser', JSON.stringify(data?.user));
        localStorage.setItem('UserToken', data.Token);

        if (data.message === 'Registered Successfully') {
            toast.success(data.message, { className: 'success-toast' });
            dispatch({
                type: LOGIN,
                payload: data.user,
            });
            return data;
        }
        else {
            toast.error(data.message, { className: 'Failed-toast' });
            return data;
        }


    }
    catch (error) {
        alert("Register Failed");
    }
}

export const addToCart = (product_id,quantity) => async dispatch => {
    console.log(product_id,quantity)
    try {
        const { data } = await axios.post(`${API_URL}/cart/add`, {
            user_email,
            product_id,
            quantity,
        });

        // console.log(data);
        if (data.message === 'Product is added to cart') {
            toast.success(data.message, { className: 'success-toast', autoClose: 2000 });
        }
        else if (data.message === 'Product Quantity is updated') {
            toast.success(data.message, { className: 'success-toast', autoClose: 2000 });
        }else{
            toast.error(data.message, { className: 'Failed-toast', autoClose: 2000 });
        }
        
    }
    catch (error) {
        console.log(error);
    }
}




