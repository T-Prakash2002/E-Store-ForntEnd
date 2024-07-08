
import {
    Loading,
    LOGIN,
    LOGOUT,
    GET_CART,
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    AMOUNT,
    GET_WISHLIST,

}from "./authType";
import Products from "../data.json";


const initialState = {
    isLoading: false,
    user: JSON.parse(localStorage.getItem('LogInUser')) ?? [],
    isLoggedIn: localStorage.getItem('IsLogIn') ?? false,
    token: localStorage.getItem('UserToken') ?? null,
    Productsdata:Products.products,
    cart:JSON.parse(localStorage.getItem('Cart')) ?? [],
    TotalAmount:0,
    wishlist:JSON.parse(localStorage.getItem('Wishlist')) ?? [],
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: [],
                cart:[],
                TotalAmount:0,
                wishlist:[],
                token:null,
            };
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case AMOUNT:
            return {
                ...state,
                TotalAmount: action.payload,
            };
        case GET_WISHLIST:
            return {
                ...state,
                wishlist: action.payload,
            };
        
        default:
            return state;
    }
};

