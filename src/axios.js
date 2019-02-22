import axios from "axios";

const instance = axios.create({
    baseURL : "https://webknox-recipes.p.rapidapi.com"
});

instance.defaults.headers.common["X-RapidAPI-Key"] = "";
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;