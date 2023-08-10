import SlimSelect from 'slim-select'
import { fetchBreeds } from './cat-api.js'
import {fetchCatByBreed} from './cat-api.js'
const breadSelect = document.querySelector(".breed-select");
const box = document.querySelector(".cat-info");
const loaderText = document.querySelector(".loader")



fetchBreeds().then((data) => {
    data.map((bread) => {
        const option = document.createElement("option");
        option.value = bread.id;
        option.textContent = bread.name;
        breadSelect.append(option);
        breadSelect.classList.remove("ishidden");
        loaderText.classList.add("ishidden")
    })
    new SlimSelect({
        select: document.querySelector('.breed-select')
      })
    
})


breadSelect.addEventListener("change", onSelect) 

function onSelect(e){
    box.innerHTML = '';
    loaderText.classList.remove("ishidden")
    const bread = e.currentTarget.value;
    fetchCatByBreed(bread).then((data) => {
        const cat = data.breeds[0]
        console.log(cat.description)
        makeMarkup(data.url, cat.name, cat.name, cat.description, cat.temperament)
    })

};


function makeMarkup(img, alt, name, description, temperament){
  const markup = 
  `<img src="${img}" alt="${alt}" width="400">
  <div class="text-info">
  <h1>${name}</h1>
  <p>${description}</p>
  <p><b>Temperament: </b>${temperament}</p>
  </div>`
  
  loaderText.classList.add("ishidden")
  box.innerHTML = markup;
}