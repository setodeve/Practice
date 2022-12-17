function test(data){
  console.log(data);
}

function getInput(){
  console.log(document.getElementById("search-input").value);
}

const searchbutton = document.getElementById("basic-text1")
searchbutton.addEventListener("click",getInput);
test(1);