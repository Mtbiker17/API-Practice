const refresh = document.getElementById('refresh');
const img = document.querySelector('img');
const searchButton = document.getElementById('searchButton');
const searchValue = document.getElementById('searchValue');
let search = 'theoffice'

function getImage(search){
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UiEsRZHR8qEbqHACqaih8O47dqWGiOcV&s=${search}`, { mode: "cors" })
    .then(function (response) {
       return(response.json());
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
}

refresh.addEventListener('click', () => {
  getImage(search);
});

searchButton.addEventListener('click', () => {
  console.log(searchValue.value)
  getImage(searchValue.value);
})

getImage(search);


