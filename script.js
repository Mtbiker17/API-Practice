const refresh = document.getElementById('refresh');
const img = document.querySelector('img');
const searchButton = document.getElementById('searchButton');
const searchValue = document.getElementById('searchValue');
let search = 'theoffice'

/*

//Giphy API using promise syntax
function getImage(search){
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UiEsRZHR8qEbqHACqaih8O47dqWGiOcV&s=${search}`, { mode: "cors" })
    .then(function (response) {
       return(response.json());
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch(function(err) {
      alert("No images found with this search parameter");
    });
}

refresh.addEventListener('click', () => {
  getImage(search);
});

searchButton.addEventListener('click', () => {
  console.log(searchValue.value);
  getImage(searchValue.value);
  search = searchValue.value;
})

getImage(search);

*/
async function getImage(search){
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UiEsRZHR8qEbqHACqaih8O47dqWGiOcV&s=${search}`, { mode: "cors" });
  const giphData = await response.json();
  img.src = giphData.data.images.original.url;
}

refresh.addEventListener('click', () => {
  getImage(search);
});

searchButton.addEventListener('click', () => {
  console.log(searchValue.value);
  getImage(searchValue.value);
  search = searchValue.value;
})

getImage(search);



