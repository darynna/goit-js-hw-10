import axios from "axios";


axios.defaults.headers.common["x-api-key"] = "live_vzalpjSyb8505IAJZ9A8YF5NLfeTVmrAPdY0guX8ISJNUQltlGUwcXrz6HnQ6AeU";


export function fetchBreeds(url){
    return axios.get(`${url}/breeds`)
    .then((response) => {
        return response.data;
    })}



export function fetchCatByBreed(url, breedId){
    return axios.get(`${url}/images/search?breed_ids=${breedId}`)
    .then(({data}) => {
        return data[0]
    })
}