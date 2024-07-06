
import {
    Loading,
    LOGIN,
    LOGOUT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,

}from "./authType";
import Products from "../data.json";


const initialState = {
    isLoading: false,
    user: JSON.parse(localStorage.getItem('LogInUser')) ?? [],
    isLoggedIn: localStorage.getItem('IsLogIn') ?? false,
    token: localStorage.getItem('UserToken') ?? null,
    error: null,
    Productsdata:Products.products,

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





        default:
            return state;
    }
};

