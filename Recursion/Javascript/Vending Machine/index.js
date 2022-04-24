
class Animal {
    constructor(name, price, imgUrl){
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;   
    }
}

let animals = [
    new Animal ('Tiger', 100, 'https://cdn.pixabay.com/photo/2015/12/18/13/46/tiger-1098607__340.jpg'),
    new Animal ('Elephant', 200, 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__480.jpg'),
    new Animal ('Parrot', 30, 'https://cdn.pixabay.com/photo/2018/09/22/17/05/parrot-3695678__340.jpg'),
    new Animal ('Lemurs', 15, 'https://cdn.pixabay.com/photo/2015/10/28/15/05/lemurs-1010643__340.jpg'),
    new Animal ('Ibis', 75, 'https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__340.jpg'),
    new Animal ('Panda', 90, 'https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395__340.jpg'),
    new Animal ('Zebra', 120, 'https://cdn.pixabay.com/photo/2020/10/13/10/20/zebra-5651454__480.jpg'),
    new Animal ('Rabbit', 25, 'https://cdn.pixabay.com/photo/2018/06/28/00/11/mara-mammal-3502921__340.jpg'),
    new Animal ('Giraffe', 150, 'https://cdn.pixabay.com/photo/2019/07/27/06/21/giraffe-4366005__340.jpg'),
    new Animal ('Raccoon', 45, 'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081__340.jpg'),
    new Animal ('Frog', 5, 'https://cdn.pixabay.com/photo/2016/04/17/16/37/frog-1335022__340.jpg'),
    new Animal ('Iguana', 40, 'https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719__340.jpg'),
    new Animal ('Adler', 55, 'https://cdn.pixabay.com/photo/2017/10/20/21/45/adler-2872995__340.jpg'),
    new Animal ('Wolf', 60, 'https://cdn.pixabay.com/photo/2019/09/17/14/24/wolf-4483675__340.jpg'),
    new Animal ('Crocodile', 250, 'https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013__340.jpg'),
    new Animal ('Ape', 20, 'https://cdn.pixabay.com/photo/2019/07/24/14/17/monkey-4360298__340.jpg'),
    new Animal ('Ostrich', 140, 'https://cdn.pixabay.com/photo/2019/09/25/15/58/ostrich-4504017__340.jpg'),
    new Animal ('Rhinoceros', 170, 'https://cdn.pixabay.com/photo/2019/09/04/09/48/rhinoceros-4451152__340.jpg'),
    new Animal ('Icebear', 210, 'https://cdn.pixabay.com/photo/2017/08/14/20/33/polar-bear-2641842__340.jpg'),
    new Animal ('Cheetah', 190, 'https://cdn.pixabay.com/photo/2018/06/14/22/22/cheetah-3475778__340.jpg'),
    new Animal ('Koala', 30, 'https://cdn.pixabay.com/photo/2013/01/14/12/21/koala-74908__340.jpg'),
    new Animal ('Penguin', 25, 'https://cdn.pixabay.com/photo/2016/09/29/16/40/king-penguin-1703294__340.jpg')
];

//ボタン生成
const numbers = document.getElementById("numbers") ;
const numbersColumn = document.getElementById("numbersclm") ;
const number = document.createElement("button")
number.classList.add("col-2", "bg-white", "p-3", "border", "m-1", "text-center", "btn", "btn-light", "border-dark","number")


//画像表示
const imageShowTestmain = document.getElementById("main") ;
const imageShowTestextra = document.getElementById("extra") ;
const SlideShowTest = document.getElementById("sliderShow") ;

const imagemain = document.createElement("img") ;
const imageextra = document.createElement("img") ;
imagemain.classList.add("col-10", "pic") ;
imageextra.classList.add("col-10", "pic") ;

const divtext = document.createElement("div") ;

imageShowTestmain.classList.add("expand-animation") ;
imageShowTestextra.classList.add("deplete-animation") ;


for(let i=0; i<animals.length ;i++){
  
  let tmp = number.cloneNode() ;
  tmp.innerHTML = i+1;
  numbers.append(tmp);  

  //ボタンが押された時のイベントリスナー
  tmp.addEventListener("click",function(){
    divtext.innerText = 
    `
      Name : ${animals[i].name}
      Price : ${animals[i].price} 
    `    
    animalHelper(i);
  });

}

function animalHelper(i){
  let before = SlideShowTest.getAttribute("index") ;
  let current = i ;

  SlideShowTest.setAttribute("index", current ) ;

  imagemain.src = animals[current].imgUrl ;
  imageextra.src = animals[before].imgUrl ;

  imageShowTestmain.append(imagemain) ;
  imageShowTestextra.append(imageextra) ;   

  if(before < current){
    SlideShowTest.append(imageShowTestextra,imageShowTestmain) ;
  }else if(before >= current){ 
    SlideShowTest.append(imageShowTestmain,imageShowTestextra) ;
  }

  numbersColumn.append(divtext,numbers) ;
}