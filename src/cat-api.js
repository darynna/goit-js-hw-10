import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.headers.common["x-api-key"] = "live_vzalpjSyb8505IAJZ9A8YF5NLfeTVmrAPdY0guX8ISJNUQltlGUwcXrz6HnQ6AeU";
const errorText = document.querySelector(".error")


export function fetchBreeds(){
    return axios.get('https://api.thecatapi.com/v1/breeds')
    .then((response) => {
        return response.data;
    })
    .catch(error => {
        errorText.classList.remove("ishidden")
        Notify.failure('Oops! Something went wrong! Try reloading the page!');

    });}



export function fetchCatByBreed(breedId){
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(({data}) => {
        // console.log(data[0])
        // console.log(data[0].breeds[0]);
        return data[0]
    }).catch((error) => {
        errorText.classList.remove("ishidden")
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
}