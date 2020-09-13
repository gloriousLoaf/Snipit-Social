//// REDUCER for AuthContext in App.js ////
import gitAPI from "../../utils/GithubAPIS";

// pulled from client/.env
const {
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET,
  REACT_APP_REDIRECT_URI,
  REACT_APP_PROXY_URL
} = process.env;

// creating app state
export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  id: "",
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
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      // just for testing, might have to make this for register case instead of log in
      // ORRR "findbyId, if (!user): submit this info"
      // on login, we will save this info into the database
      console.log(action.payload.user);

      const variables = {
        id: action.payload.user.id,
        htmlURL: action.payload.user.html_url,
        name: action.payload.user.name,
        avatarUrl: action.payload.user.avatar_url,
        bio: action.payload.user.bio,
        blog: action.payload.user.blog,
        company: action.payload.user.company,
        hireable: action.payload.user.hireable
      };

      gitAPI.saveGitInfo(variables);

      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      };
    }
    case "LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case "VIEWUSER": {
      gitAPI.getGitInfo()
        .then(console.log(action.payload))
        // .then(res => {
        // })
        .catch(err => console.log(err));
      return {
        ...state
        // profileState: res.data
      };
    }
    default:
      return state;
  }
};
