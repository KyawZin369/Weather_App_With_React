import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const api_key = '82d66c15db607169c5164322dec17d58'