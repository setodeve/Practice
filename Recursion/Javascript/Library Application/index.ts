const config = {
  url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:",
  parent: document.getElementById('result')
}

function searchInput(){
  const input = document.getElementById("search-input").value;
  
  fetch(config.url + input)
  .then(jsondata => jsondata.json())
  .then(data => generateBookCard(data["ISBN:0451526538"]))
  .catch(err => errshow(err))
}

function errshow(err){
  config.parent.innerHTML = "Not Found"
}

function arrayJoin(array){
  let rtnString = ""

  for(let i=0;i<array.length-1;i++){
    rtnString += array[i].name + ", "
  }

  return rtnString + array[array.length-1].name;
}

function generateBookCard(data){

const cardTemplate = `
    <div class="pb-3 pt-4">
    <p class="m-0">results</p>
    </div>
    <div class="row no-gutters">
    <div class="col-md-4">
        <img src="${data.cover.small}" class="card-img p-3" alt="">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title m-0 font-weight-bold">${data.title}</h5>
            <p class="m-0">${data.authors[0].name}</p>
            <p class="m-0 pt-2">$12.11</p>
            <p class="card-text pt-2 book-description">${data.by_statement}</p>
        </div>
    </div>
    </div>
    <div class="col-10">
    <table class="table table-striped">
        <tbody>
        <tr>
            <th scope="row">Page</th>
            <td>${data.number_of_pages}</td>
        </tr>
        <tr>
            <th scope="row">Publisher</th>
            <td>${data.publishers[0].name}</td>
        </tr>
        <tr>
            <th scope="row">Published Date</th>
            <td>${data.publish_date}</td>
        </tr>
        <tr>
            <th scope="row">Categories</th>
            <td>${arrayJoin(data.subjects)}</td>
        </tr>
        </tbody>
    </table>
    </div>

`
config.parent.innerHTML = cardTemplate;
}

const searchButton = document.getElementById("basic-text1")
searchButton.addEventListener("click",searchInput);
