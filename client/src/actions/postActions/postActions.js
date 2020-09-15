import axios from 'axios';
import {
    ADD_POST,
    GET_POSTS,
    LOADING_POSTS
} from "../../constants"

export const addPost = postData => dispatch => {
    axios.post('/api/posts/add', postData)
        .then(res => dispatch({
            type: 'ADD_POST',
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getPosts = () => dispatch => {
    dispatch(loadPosts)
    axios.get('/api/posts/findAny')
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const loadPosts = () => {
    return {
        type: LOADING_POSTS
    }
}