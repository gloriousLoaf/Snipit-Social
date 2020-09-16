import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer"
import authReducer from "./authReducer"


export default combineReducers({
    errors: errorReducer,
    post: postReducer,
    auth: authReducer,
})