import axios from "axios";
import GitAPI from "../../utils/GithubAPIS"

export const profileState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    id: "",
    htmlURL: "",
    name: "",
    avatarUrl: "",
    bio: "",
    blog: "",
    company: "",
    hireable: ""
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case "VIEWUSER": {

        GitAPI.getGitInfo()
            .then(console.log(action.payload))
            // .then(res => {
            // })
            .catch(err => console.log(err))
      return {
        ...state,
        // profileState: res.data

      };
    }
    default:
      return state;
  }
};
