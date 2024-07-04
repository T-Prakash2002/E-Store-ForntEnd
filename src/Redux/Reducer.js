
import {
    Loading,
    LOGIN,
    LOGOUT,
    SEARCH,
}from "./authType";
import Products from "../data.json";
const Productsdata=Products.products;


const initialState = {
    isLoading: false,
    user: JSON.parse(localStorage.getItem('LogInUser')) ?? [],
    isLoggedIn: localStorage.getItem('IsLogIn') ?? false,
    token: localStorage.getItem('UserToken') ?? null,
    Productsdata:Productsdata,
    error: null,
    SearchedList:[],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: [],
            };
        case SEARCH:
            return {
                ...state,
                SearchedList: action.payload,
            };


        default:
            return state;
    }
};

