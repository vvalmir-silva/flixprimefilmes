
import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=23629403255a052b9cd6175e857e90c3&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});
export default api;