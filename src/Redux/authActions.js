import axios from "axios";
import {
    LOGIN,
    LOGOUT,
    GET_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_WISHLIST,
    GET_WISHLIST,
    REMOVE_FROM_WISHLIST,
    AMOUNT,
} from "./authType";
import { API_URL } from "../constants";
import { toast } from 'react-toastify';



const token = localStorage.getItem('UserToken')??'';

console.log(token);

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
                payload: {
                    user: data.user,
                    token: data.Token,
                },
            });

            getCart(data.user.email);
            getWishlist(data.user.email);

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
    localStorage.removeItem('Cart');
    localStorage.removeItem('Wishlist');

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

        // localStorage.setItem('IsLogIn', true);
        // localStorage.setItem('LogInUser', JSON.stringify(data?.user));
        // localStorage.setItem('UserToken', data.Token);


        if (data.message === 'Registered Successfully') {
            toast.success(data.message, { className: 'success-toast' });
            // dispatch({
            //     type: LOGIN,
            //     payload: data.user,
            // });
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

export const addToCart = (email, product_id, quantity) => async dispatch => {

    try {
        const { data } = await axios.post(`${API_URL}/cart/add`, {
            email,
            product_id,
            quantity,
        }, {
            headers: {
                Authorization:token,
            }
        }
        )

        // dispatch({
        //     type:'ADD_TO_CART',
        //     payload:
        // })

        getCart(email);

        if (data.message === 'Product is added to cart') {
            toast.success(data.message, { className: 'success-toast', autoClose: 2000 });
        }
        else if (data.message === 'Product Quantity is updated') {
            toast.success(data.message, { className: 'success-toast', autoClose: 2000 });
        } else {
            toast.error(data.message, { className: 'Failed-toast', autoClose: 2000 });
        }

    }
    catch (error) {
        console.log(error);
    }
}

export const getCart = (email) => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/cart/get?user_email=${email}`, {
            headers: {
                Authorization: token,
            }
        });

        if (response.data.message == 'Cart is retrieved successfully') {


            localStorage.setItem('Cart', JSON.stringify(response.data));
            dispatch({
                type: GET_CART,
                payload: response.data,
            })

            let totalAmount = 0;

            totalAmount = response.data.data.reduce((acc, item) => acc + item.quantity * item.price, 0)

            dispatch({
                type: AMOUNT,
                payload: totalAmount,
            })

            return;
        }
        else {
            toast.info(response.data.message, { autoClose: 2000 });
        }

    }
    catch (error) {
        console.log(error);
    }
}

export const getAmount = (cartData) => async dispatch => {

    let totalAmount = 0;
    if (cartData?.length > 0) {
        totalAmount = cartData.reduce((acc, item) => acc + item.quantity * item.price, 0)

        dispatch({
            type: AMOUNT,
            payload: totalAmount,
        })
    }


}

export const removeFromCart = (email, product_id, quantity) => async dispatch => {
    try {
        const { data } = await axios.delete(`${API_URL}/cart/remove?product_id=${product_id}&email=${email}`, {
            headers: {
                Authorization: token,
            }
        });

        if (data.message === 'Product is removed from cart') {

            toast.success(data.message, { className: 'success-toast', autoClose: 2000 });

        }
        else {
            toast.error(data.message, { className: 'Failed-toast', autoClose: 2000 });
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const addToWishlist = (email, product_id) => async dispatch => {
    try {
        const { data } = await axios.post(`${API_URL}/wishlist/add`, {
            email,
            product_id,
        }, {
            headers: {
                Authorization: token,
            }
        }); 

        if (data.message === 'Product is added to wishlist') {
            toast.success(data.message, { className: 'success-toast', autoClose: 2000 });
        }
        else if (data.message === 'Product is already in wishlist') {
            toast.error(data.message, { className: 'Failed-toast', autoClose: 2000 });
        }
        else {
            toast.error(data.message, { className: 'Failed-toast', autoClose: 2000 });
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const getWishlist = (email) => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/wishlist/get?user_email=${email}`, {
            headers: {
                Authorization: token,
            }
        });

        if (response.data.message == 'Wishlist is retrieved successfully') {

            localStorage.setItem('Wishlist', JSON.stringify(response.data.data));
            dispatch({
                type: GET_WISHLIST,
                payload: response.data.data,
            })

            return;
        }
        else {
            toast.info(response.data.message, { autoClose: 2000 });
        }

    }
    catch (error) {
        console.log(error);
    }
}

export const removeFromWishlist = (email, product_id) => async dispatch => {
    try {
        const { data } = await axios.delete(`${API_URL}/wishlist/remove?product_id=${product_id}&email=${email}`, {
            headers: {
                Authorization: token,
            }
        });

        if (data.message === 'Product is removed from wishlist') {
            toast.success(data.message, { className: 'success-toast', autoClose: 2000 });
        }
        else {
            toast.error(data.message, { className: 'Failed-toast', autoClose: 2000 });
        }

    }
    catch (error) {
        console.log(error);
    }
}


