class User{
  constructor(name,old,money,days,assets){
    this.name = name ;
    this.old = old ;
    this.money = money ;
    this.days = days ;
    this.assets = assets ;
  }
}
/*
Assetsクラス必要ないかも？
　⇨配列で情報持っといて表示させるだけのため
使うかもしれないんで残しとく
class Assets{
  constructor(assetsname,type,max,rate,value,url){
    this.assetsname = assetsname ;
    this.type = type ;
    this.rate = rate ;
    this.max = max ;
    this.value = value ;
    this.url  = url ;
  }
}
*/

const assetsdata =
[
  {
    "assetsname": "Flip Machine",
    "type" : "skill",
    "max" : 500,
    "rate":25,
    "value":15000,
    "url":"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80"
  },
  {
    "assetsname": "ETF Stock",
    "type" : "investment",
    "max" : -1,
    "rate":0.1,
    "value":300000,
    "url": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "assetsname": "ETF Bonds",
    "type" : "investment",
    "max" : -1,
    "rate":0.07,
    "value":300000,
    "url": "https://images.unsplash.com/photo-1621981386829-9b458a2cddde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "assetsname": "Lemonade Stand",
    "type" : "estate",
    "max" : 1000,
    "rate":30,
    "value":30000,
    "url": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    "assetsname": "Ice Cream Truck",
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
    "assetsname": "Town House",
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
    "assetsname": "Indusrial Space",
    "type" : "estate",
    "max" : 10,
    "rate":2200000,
    "value":1000000000,
    "url": "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    "assetsname": "Hotel Skyscraper",
    "type" : "estate",
    "max" : 5,
    "rate":25000000,
    "value":10000000000,
    "url": "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
  },
  {
    "assetsname": "Bullet-Speed Sky Railway",
    "type" : "estate",
    "max" : 1,
    "rate":30000000000,
    "value":10000000000000,
    "url": "https://images.unsplash.com/photo-1562078809-7ef447ae26c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
]
let user1 =
`[
  {
    "name" : "Steven",
    "old" : 20,
    "money" : 50000,
    "days" : 0,
    "assets" : {"Flip Machine":1}
  }
]`


//User情報を初期化
function initializeUser(){
  let userJsonString = `` ;
  userJsonString = prompt("Jsonを貼り付けてください") ;
  console.log(userJsonString);
  
  //JSONがにゅりょくされているかチェック
  if(userJsonString == `` ) initializeUser();

  let jsonDecodeduser = JSON.parse(userJsonString);
  let user = new User(jsonDecodeduser[0].name, jsonDecodeduser[0].old, jsonDecodeduser[0].money, jsonDecodeduser[0].days, jsonDecodeduser[0].assets) ;
  
  //use情報
  console.log(user);

  //1
  console.log(jsonDecodeduser[0]["assets"]["Flip Machine"]);

  //Steven
  console.log(jsonDecodeduser[0].name);

  localStorage.setItem(jsonDecodeduser[0].name, user) ;

  console.log(localStorage) ;
  //saveボタン
  let savebtn = document.getElementById("save") ;
  savebtn.addEventListener("click",function(){
    user.days += 1 ;
    localStorage.setItem(jsonDecodeduser[0].name, user) ;
    console.log("save") ;
    console.log(user) ;
    console.log(localStorage) ;
  });

  //reloadボタン
  let loadbtn = document.getElementById("reload") ;
  loadbtn.addEventListener("click",function(){
    let loaddata = localStorage.getItem(jsonDecodeduser[0].name) ;
    console.log("load") ;
    console.log(user) ;
    console.log(loaddata) ;
  });

}

//HTML初期化
function initializeHTML(){

}

//user初期化
initializeUser() ;


//console.log(assetsdata);
//let jsonDecoded = JSON.parse(assetsdata);
//let jsonDecodeduser = JSON.parse(user1);

//localStrage例
//localStorage.setItem(jsonDecodeduser[0].name, user1) ;

//console.log(localStorage.getItem('Steven'));

