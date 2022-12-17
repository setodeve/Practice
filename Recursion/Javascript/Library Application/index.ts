const config = {
  url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:",
}

function searchInput(){
  const input = document.getElementById("search-input").value;
  fetch(config.url + input)
  .then(jsondata => jsondata.json())
  .then(data => console.log(data))
}

const searchButton = document.getElementById("basic-text1")
searchButton.addEventListener("click",searchInput);
