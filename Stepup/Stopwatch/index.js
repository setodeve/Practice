function countHelper(){

  let start = document.getElementById("start");
  let end = document.getElementById("stop");
  let display = document.getElementById("display")
  let cnt = 0 ;

  let num ;
  start.addEventListener("click",function(){
    if(num == null){
      num = window.setInterval(function(){
        display.innerHTML = cnt++;
      }, 1000);
      getTime("開始") ;
    }

  });

  end.addEventListener("click",function(){
    if(num !== null){
      cnt = 0
      display.innerHTML = cnt ;
      getTime("終了") ;
      clearInterval(num) ;
      num = null ;
    }
  });

}

function getTime(str){
  const date1 = new Date() ;
  const date2 =  date1.getHours() + "時" + date1.getMinutes() + "分" + date1.getSeconds() + "秒" + " " + str ;
  let lists = document.getElementById("lists");
  let list = document.createElement("div") ;
  list.classList.add("col-12", "border-bottom", "text-center", "border-light");    

  list.innerHTML = date2 ;
  lists.append(list);  
}

countHelper() ;