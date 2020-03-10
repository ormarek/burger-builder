import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-22f06.firebaseio.com/"
});

export default instance;
