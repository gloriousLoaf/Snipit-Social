import axios from 'axios';
import { GET_PROFILE, LOAD_PROFILE, GET_POSTS, LOADING_POSTS, FOLLOW, UNFOLLOW } from '../../constants';

export const getUserProfile = (userId) => dispatch => {
    dispatch(loadProfile())
    axios.get(`/api/users/${userId}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const refreshUserProfile = (userId) => dispatch => {

    axios.get(`/api/users/${userId}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getPostsByUserId = (userId) => dispatch => {
    dispatch(loadPosts())
    axios.get(`/api/posts/${userId}`)
        .then( res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const followUser = (userId) => dispatch => {
    axios.post('/api/users/follow', { userId })
        .then(res => dispatch({
            type: FOLLOW,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const unfollowUser = (userId) => dispatch => {
    axios.post('/api/users/unfollow', { userId })
        .then(res => dispatch({
            type: UNFOLLOW,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE
    }
}

export const loadPosts = () => {
    return {
        type: LOADING_POSTS
    }
}