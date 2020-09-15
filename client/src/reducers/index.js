import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer"

export default combineReducers({
    errors: errorReducer,
    post: postReducer,
})