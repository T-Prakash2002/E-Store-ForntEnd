import axios from "axios";
import {
    LOGIN,
    LOGOUT,
    FETCH_PRODUCTS,
    SEARCH,
} from "./authType";
import { API_URL } from "../constants";
import { toast } from 'react-toastify';
import Products from "../data.json";

const Productsdata=Products.products;
const FilterList=[];


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

        if(data.message === 'Registered Successfully'){
            toast.success(data.message, { className: 'success-toast' });
            dispatch({
                type: LOGIN,
                payload: data.user,
            });
        return data;
        }
        else{
            toast.error(data.message, { className: 'Failed-toast' });
            return data;
        }

        
    }
    catch (error) {
        alert("Register Failed");
    }
}


export const fetchProducts = () => async dispatch => {
    try {
       



        
    } catch (error) {
        console.log(error);
    }
}

export const SearchItem = (search) => async dispatch => {
    // Productsdata.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()));
    // Productsdata.map((item,index)=>{console.log(index+" "+item.category)})

    const FilterList=[...new Set(Productsdata.map(item=>item.category))];
// 
//     const SearchedList=Productsdata.filter(item=>{
//         return item.binding.toLowerCase().includes(search.toLowerCase());
//     });
    console.log(FilterList);
    // dispatch({
    //     type: SEARCH,
    //     payload: SearchedList,
    // });
}