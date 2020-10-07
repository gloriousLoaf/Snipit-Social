import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from "../../constants/"

import setAuthHeader from "../../utils/setAuthHeader"

export const loginUser = (userData) => dispatch => {
    axios.post("/api/users/login", userData)
        .then(res => {
            const { token } = res.data
            localStorage.setItem("jwToken", token)
            setAuthHeader(token);
            dispatch(getCurrentUser());

            // browser is not getting token properly 
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const registerUser = (userData, history) => dispatch => {
    axios.post("/api/users/register", userData)
        .then(res => {
            // history.push('/')
            alert("Thanks, you're ready to login!");
            window.location.reload()
        })
        // .catch(err => console.log(err.response.data))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const getCurrentUser = () => dispatch => {
    axios.get("/api/users")
        .then(res => dispatch(setCurrentUser(res.data)))
}

export const setCurrentUser = (data) => {
    return {
        type: SET_CURRENT_USER,
        payload: data
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthHeader();
    dispatch(setCurrentUser())
}