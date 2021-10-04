import axios from "axios";

const api = axios.create({
    baseURL: "https://hackatagra-api.herokuapp.com",

});
export default api;
