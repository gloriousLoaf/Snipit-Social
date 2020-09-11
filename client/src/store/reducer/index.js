//// REDUCER for AuthContext in App.js ////

// pulled from client/.env
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI, REACT_APP_PROXY_URL } = process.env;

// creating app state
export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    client_id: REACT_APP_CLIENT_ID,
    redirect_uri: REACT_APP_REDIRECT_URI,
    client_secret: REACT_APP_CLIENT_SECRET,
    proxy_url: REACT_APP_PROXY_URL
};

// reducer actions dispatched to mutate state

// ADD TO DB??
export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            console.log(action.payload.isLoggedIn)
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user
            };
        }
        case "LOGOUT": {
            localStorage.clear()
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        }
        default:
            return state;
    }
};