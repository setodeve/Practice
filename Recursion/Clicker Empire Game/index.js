class User{
  constructor(name,age,money,days,assets){
    this.name = name ;
    this.age = age ;
    this.money = money ;
    this.days = days ;
    this.assets = assets ;
    this.burger = 0 ;
  }
}

const config = {
  right : document.getElementById("right"),
  left  : document.getElementById("left")
}

const assetsdata =
[
  {
    "assetsname": "FlipMachine",
    "type" : "skill",
    "max" : 500,
    "rate":25,
    "value":15000,
    "url":"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80"
  },
  {
    "assetsname": "ETFStock",
    "type" : "investment",
    "max" : "∞",
    "rate":0.1,
    "value":300000,
    "url": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "assetsname": "ETFBonds",
    "type" : "investment",
    "max" : "∞",
    "rate":0.07,
    "value":300000,
    "url": "https://images.unsplash.com/photo-1621981386829-9b458a2cddde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "assetsname": "LemonadeStand",
    "type" : "estate",
    "max" : 1000,
    "rate":30,
    "value":30000,
    "url": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    "assetsname": "IceCreamTruck",
    "type" : "estate",
    "max" : 500,
    "rate":120,
    "value":100000,
    "url": "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    "assetsname": "House",
    "type" : "estate",
    "max" : 100,
    "rate":32000,
    "value":20000000,
    "url": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "assetsname": "TownHouse",
    "type" : "estate",
    "max" : 100,
    "rate":64000,
    "value":40000000,
    "url": "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
  },
  {
    "assetsname": "Mansion",
    "type" : "estate",
    "max" : 20,
    "rate":500000,
    "value":250000000,
    "url": "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
  },
  {
    "assetsname": "IndusrialSpace",
    "type" : "estate",
    "max" : 10,
    "rate":2200000,
    "value":1000000000,
    "url": "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "assetsname": "HotelSkyscraper",
    "type" : "estate",
    "max" : 5,
    "rate":25000000,
    "value":10000000000,
    "url": "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
  },
  {
    "assetsname": "Bullet-SpeedSkyRailway",
    "type" : "estate",
    "max" : 1,
    "rate":30000000000,
    "value":10000000000000,
    "url": "https://images.unsplash.com/photo-1562078809-7ef447ae26c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
]
let user1 =
`
  {
    "name" : "Steven",
    "age" : 20,
    "money" : 50000,
    "days" : 0,
    "assets" : {
      "FlipMachine":{
        "type" : "skill",
        "number":1
      }
    }
  }
`

//User情報を初期化
function initializeUser(userload,loaddata){
  
  let userJsonString = user1 ;

  //userJsonString = prompt("Jsonを貼り付けてください") ;
  //console.log(userJsonString);
  
  //JSONがにゅりょくされているかチェック
  if(userJsonString == `` ) initializeUser();
  
  let jsonDecodeduser = JSON.parse(userJsonString);

  let user = new User(jsonDecodeduser.name, jsonDecodeduser.age, jsonDecodeduser.money, jsonDecodeduser.days, jsonDecodeduser.assets) ;

  //HTML初期化
  initializeHTML(user) ;

  //saveボタン
  let savebtn = document.getElementById("save") ;
  savebtn.addEventListener("click",function(){
    let tmp = JSON.stringify(user) ;
    localStorage.setItem("Steven", tmp) ;
    console.log("save") ;
    console.log(localStorage) ;
  });

  //reloadボタン
  let loadbtn = document.getElementById("reload") ;
  loadbtn.addEventListener("click",function(){
    let loaddata = localStorage.getItem("Steven") ;
    console.log("load") ;

    let tmp = JSON.parse(loaddata);
    console.log(tmp);
    user.money = tmp.money ;
    user.age = tmp.age ;
    user.days = tmp.days ;
    user.assets = tmp.assets ;
    user.burger = tmp.burger ;
    user.name = "data" ;
    console.log(user);
  });

//1000msカウント
  let birthday = 0 ;

  setInterval(function(){
      let ageele = document.querySelector("#age") ;
      let daysele = document.querySelector("#days") ;  
      let usermoney = document.querySelector("#money") ;
      user.days += 1
      daysele.innerHTML = `${user.days} days` ;
      
      if(birthday == 365 ){
        birthday = 0 ;
        user.age += 1 ;
        ageele.innerHTML = `${user.age} yrs old` ;
      }
      if(user.age>=100){
        alert(`GameOver`)
        location.reload();
      }
      calcHelper(user) ;
      
      usermoney.innerHTML = `$${user.money}` ;
      
  },1000)

}

//バーガークリックイベント
function burgerclick(user){
  
  let burgerele = document.querySelector(".burger") ;

  //バーガーがクリックされたらuserが持っているFlipMachine分$25を取得
  burgerele.addEventListener("click",function(){

    let burgernumele = document.querySelector("#text #burger") ;
    let usermoney = document.querySelector("#money") ;

    user.burger += 1
    burgernumele.innerHTML = `${user.burger} Burgers` ;

    user.money += (25 * parseInt(user.assets["FlipMachine"]["number"])) ;
    
    usermoney.innerHTML = `$${user.money}` ;
    

  }) ;
}

//HTML初期化
function initializeHTML(user){
  
  config.left.innerHTML = ``;
  config.right.innerHTML = ``;

  //user
  userHTML(user) ;

  //Lists
  listsHTML(user) ;

  //left
  leftHTML(user) ;

  //reload,save
  const reloadsave = reloadsaveHTML() ;
  config.right.innerHTML += reloadsave ;

  for(let i=0 ; i<assetsdata.length ; i++){
    
    let assetinfo = "#" + assetsdata[i]["assetsname"] ;
    let assetsector = document.querySelector(assetinfo);

    //asset詳細ページイベント
    assetsector.addEventListener("click",function(){
      assetHTML(user,assetsdata[i]) ;
    })
  }
  
}

function leftHTML(user){

  const left =
  `
  <div id="burgersinfo" >
    <div id="text" class="bg-secondary col-12 mt-2 mb-1 text-center ">
      <div id="burger">${user.burger} Burgers</div>
      <div id="burgersec">$25 per second</div>
    </div>
  </div>
  <div class="d-flex justify-content-center my-3">
    <button class="btn burger">
      <img id="burgerimg" class="" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80" alt="">
    </button>
  </div>
  `

  config.left.innerHTML += left;
  
  document.querySelector(".burger").setAttribute("onclick",burgerclick(user));
}

function userHTML(user){
  //fourBlocks
  let fourcontainer = document.createElement("div") ;
  fourcontainer.classList.add("container", "bg-dark", "col-12", "p-0", "d-flex", "justify-content-center")
  let box = document.createElement("div") ;
  box.classList.add("row", "col-12", "my-1", "text-center", "px-1") ;
  //name
  let name = document.createElement("div") ;
  name.classList.add("p-0", "col-6", "border", "border-5", "border-dark", "bg-secondary");
  //age
  let age = name.cloneNode(true) ;
  //days
  let days = name.cloneNode(true) ;
  //money
  let money = name.cloneNode(true) ;

  //idを振る
  name.setAttribute("id","name") ;
  age.setAttribute("id","age") ;
  days.setAttribute("id","days") ;
  money.setAttribute("id","money") ;

  name.innerHTML = user.name ;
  age.innerHTML = `${user.age} yrs old` ;
  days.innerHTML = `${user.days} days` ;
  money.innerHTML = `$${user.money}` ;

  box.append(name, age, days, money) ;
  fourcontainer.append(box) ;

  config.right.append(fourcontainer) ;
}

function listsHTML(user){

  let lists = document.createElement("div") ;
  lists.classList.add("container", "col-12", "p-0", "d-flex", "justify-content-center", "p-0", "mt-1") ;
  let overflow = document.createElement("div") ;

  overflow.classList.add("overflow-auto", "p-1", "bg-dark") ;
  overflow.setAttribute("style","width:600px; height:300px;") ;

  for(let i=0 ; i<assetsdata.length ; i++){
    let assetsnum = 0
    
    if(user.assets[assetsdata[i]["assetsname"]] != undefined){
      assetsnum = user.assets[assetsdata[i]["assetsname"]]["number"];
    }
    
    const listele = 
    `
    <button id=${assetsdata[i]["assetsname"]} max="${assetsdata[i]["max"]}" class="${assetsdata[i]["type"]} list d-flex bg-secondary flex-wrap col-12 align-items-center text-white">
      <img class="col-3 listsimg" src=${assetsdata[i]["url"]} alt="">
      <div class="col-4 p-0 d-flex flex-wrap">
        <div class="col-5 p-0">
          <div>${assetsdata[i]["assetsname"]}:</div>
        </div>
        <div class="col-8 p-0">
          <div>$${assetsdata[i]["value"]}</div>
          <div class="text-success">+$${assetsdata[i]["rate"]}/sec</div>
        </div>
      </div>
      <div class="col-5 pl-1">
        <div>×${assetsnum}</div>
      </div>
    </button>
    `
    overflow.innerHTML += listele ;
    
  }
  
  lists.append(overflow) ;
  config.right.append(lists) ;

}

//reloadsave
function reloadsaveHTML(){
  const reloadsave =
  `
  <div id="right-foot" class="container">
    <div class="d-flex justify-content-end">
      <button id="reload" class="fas fa-3x fa-redo bg-secondary text-white border border-white m-2 p-2"></button>
      <button id="save" class="fas fa-3x fa-save bg-secondary text-white border border-white m-2 p-2"></button>
    </div>
  </div>
  `
  return reloadsave ;
}

function divNone(element){
  document.getElementById(element).classList.add("d-none") ;
}

function divShow(element){
  document.getElementById(element).classList.remove("d-none") ;
}

//asset詳細
function assetHTML(user,assetinfo){
  
  const assets = 
  `
    <div class="col-12 bg-dark p-1">
      <div class="col-12 p-0 d-flex bg-secondary flex-wrap">
        <div class="col-9">
          <div>House</div>
          <div>Max Purchases : ${assetinfo["max"]}</div>
          <div>Price : $${assetinfo["value"]}</div>
          <div>Get ${assetinfo["rate"]} extra yen per second</div>
        </div>
          <img class="col-3 mt-2 listsimg" src=${assetinfo["url"]} alt="">
      </div>
      <div class="col-12 pt-1 bg-secondary">
          <div>How many would you like to purchase?</div>
          <input type="number" class="col-12 pb-1 text-right form-control" max=${assetinfo["max"]} placeholder="1" id="purchase-form">
      </div>
      <div class="d-flex justify-content-end pr-3 bg-secondary">
        <div id="purchasetotal">Total : $0</div>
      </div>
      <div class="d-flex justify-content-around bg-secondary py-2">
        <div class="col-5 pl-0">
            <button class="btn btn-outline-primary bg-white col-12 back-btn">Go Back</button>
        </div>
        <div class="col-5 pr-0">
            <button class="btn btn-primary col-12 next-btn">Purchase</button>
        </div>
      </div>
    </div>
  `
  config.right.innerHTML = ``;
  userHTML(user) ;
  config.right.innerHTML += assets ;
  const button = reloadsaveHTML() ;
  config.right.innerHTML += button ;

  //PurchaseTotal
  let totalformele = document.querySelector("#purchase-form") ;
  let total = 0 ;
  let cnt = 0 ;

  totalformele.addEventListener("change",function(){
    cnt = this.value ;
    total = cnt * assetinfo["value"] ;
    let totalele = document.querySelector("#purchasetotal") ;

    totalele.innerHTML = `Total : $${total}` ;
  })

  //Goback
  let backele = document.querySelector(".back-btn") ;
  backele.addEventListener("click",function(){
    initializeHTML(user) ;
  })
  //Purchase
  let nextele = document.querySelector(".next-btn") ;
  nextele.addEventListener("click",function(){
    purchase(user,assetinfo,parseInt(cnt)) ;
    initializeHTML(user) ;
  })
}

//purchase
function purchase(user,assetinfo,cnt){

  switch(assetinfo["type"]){
    case "investment":
      asssetinvest(user,assetinfo,cnt) ;
      break ;
    case "estate":
      asssetestate(user,assetinfo,cnt) ;
      break ;
    default:
      asssetskill(user,assetinfo,cnt) ;
      break ;
  }
}

function asssetinvest(user,assetinfo,cnt){
  let assetname = assetinfo["assetsname"] ;

  if(user.money >= assetinfo["value"]*cnt){
    if(user.assets[assetname]===undefined){
      user.assets[assetname] = {
        "type" : "investment",
        "number" : parseInt(cnt), 
        "purchased" : parseInt(assetinfo["value"]),
        "rate" : assetinfo["rate"]
      } ;
    }else{
      user.assets[assetname] = {
        "type" : "investment", 
        "number" : parseInt(cnt) + parseInt(user.assets[assetname]["number"]), 
        "purchased" : parseInt(assetinfo["value"]),
        "rate" : assetinfo["rate"]
      } ;
    }

    user.money -= (assetinfo["value"] * cnt) ;
    if(user.assets[assetname] == "ETFStock"){
      assetinfo["value"] = assetinfo["value"] + Math.floor(assetinfo["value"]*10/100) ;
    }
  }else{
    unPurchaseValue(user,assetinfo,cnt) ;
  }

}

function asssetestate(user,assetinfo,cnt){
  let assetname = assetinfo["assetsname"] ;
  
  if( (user.money >= assetinfo["value"]*cnt) ){
    if(user.assets[assetname]["number"]+cnt <= assetinfo["max"]){
      if(user.assets[assetname]===undefined){
        user.assets[assetname] = { 
          "type" : "estate",
          "number" : cnt,
          "rate" : parseInt(assetinfo["rate"])
        } ;
      }else{
        user.assets[assetname]["number"] = cnt + parseInt(user.assets[assetname]["number"]) ;
      }
        user.money -= (assetinfo["value"] * cnt) ;  
    }else{
      unPurchaseNum(user,assetinfo,cnt);      
    }
  }else{
    unPurchaseValue(user,assetinfo,cnt) ;
  }
}

function asssetskill(user,assetinfo,cnt){
  
  let assetname = assetinfo["assetsname"] ;

  if(user.money >= assetinfo["value"] * cnt){
    if(user.assets[assetname]["number"]+ cnt <= assetinfo["max"]){
      user.assets[assetname]["number"] += cnt ;
      user.money -= (assetinfo["value"] * cnt) ;
    }else{
      unPurchaseNum(user,assetinfo,cnt);
    }
  }else{
    unPurchaseValue(user,assetinfo,cnt) ;
  }

}

function unPurchaseNum(user,assetinfo,cnt){
  let assetname = assetinfo["assetsname"] ;
  alert("購入できませんでした。 所持数 : "+user.assets[assetname]["number"]+"、購入予定数 : " + cnt + "、購入可能Max : " + assetinfo["max"]) ; 
}

function unPurchaseValue(user,assetinfo,cnt){
  alert("購入できませんでした。 所持金 : "+user.money + "、購入金額 : " + assetinfo["value"]*cnt) ;
}

//計算
function calcHelper(user){
  Object.keys(user.assets).forEach(function (key) {
    if(user.assets[key]["type"]!=="skill"){
      let number = user.assets[key]["number"] ;
      let rate = user.assets[key]["rate"] ;
      let total = 0 ;
      
      if(user.assets[key]["type"] === "investment"){
        let purchased = user.assets[key]["purchased"] ;
        total += purchased + (Math.floor(purchased * rate)*number) ;
      }else{
        total += number*rate ;
      }
      user.money += total ;
    }
  });
}
//user初期化
initializeUser(false,0) ;
