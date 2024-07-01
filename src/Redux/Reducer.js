
import {
    Loading,
    LOGIN,
    LOGOUT,
}from "./authType";


const initialState = {
    isLoading: false,
    user: JSON.parse(localStorage.getItem('LogInUser')) ?? [],
    isLoggedIn: localStorage.getItem('IsLogIn') ?? false,
    token: localStorage.getItem('UserToken') ?? null,
    error: null,
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

