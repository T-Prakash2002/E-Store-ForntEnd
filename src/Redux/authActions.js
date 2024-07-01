import axios from "axios";
import {
    LOGIN,
    LOGOUT,
} from "./authType";
import { API_URL } from "../constants";
import { toast } from 'react-toastify';


export const login = (email, password) => async dispatch => {

    try {
        const { data } = await axios.get(`${API_URL}/login?email=${email}&password=${password}`);
        // console.log(response);

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

    toast("Logoutted !", {
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

