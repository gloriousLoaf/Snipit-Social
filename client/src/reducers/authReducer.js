import { SET_CURRENT_USER, FOLLOW, UNFOLLOW } from "../constants";

const initialState = {
  //isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: false
};
// this authentication part is probably

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      };
    case FOLLOW:
      return {
        ...state.user,
        following: [...state.user.following, action.payload]
      };

    // to unfollow, filter out the userid from following list.
    case UNFOLLOW:
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            item => item !== action.payload
          )
        }
      };
    default:
      return state;
  }
}
