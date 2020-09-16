import axios from "axios";

export default function(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${(token)}`;
    console.log(axios.defaults.headers.common["Authorization"]);

    console.log((token))

    // error is happening on part when we parse the code. 
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}
