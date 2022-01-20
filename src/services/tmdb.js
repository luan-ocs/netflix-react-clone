import axios from "axios"

const URL_BASE = "https://api.themoviedb.org/3/"

const API_KEY = process.env.REACT_APP_API_KEY


export const baseFetch = async (request) => {
    let hasMore = false
    if (request.includes("?")){
        hasMore = true
    }
    const data = await axios.get(`${URL_BASE}${request}${hasMore ? "&" : "?"}language=pt-BR&api_key=${API_KEY}` )
    return data.data;
}