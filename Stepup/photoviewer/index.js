const images =[
  "https://images.unsplash.com/photo-1640622658799-54e6039d189b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1646348689517-10cf71e98aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1646365532028-2c47743d3ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
];

class photo{
  constructor(ele,images){
    this.ele = ele ;
    this.images = images ;
    this.num = 0 ;
    
    const before = document.querySelector("#before") ;
    const after = document.querySelector("#next") ;
    
    before.addEventListener("click",function(){
      this.beforebt() ;
    }.bind(this));
  
    after.addEventListener("click",function(){
      this.nextbt() ;
    }.bind(this));

  }

  init(){
    this.updatetmp(0) ;
  }

  beforebt(){
    if(this.num==0){
      this.num = images.length-1 ;
    }else{
      this.num-- ;
    }
    this.updatetmp(this.num) ;
  }

  nextbt(){
    if(this.num==images.length-1){
      this.num = 0 ;
    }else{
      this.num++ ;
    }
    this.updatetmp(this.num) ;
  }

  updatetmp(num){
    console.log(num);
    this.ele.innerHTML = '' ;
    const template = 
    `
      <div>${num+1}枚目</div>
      <img src=${images[num]} height="150px" width="250px">
    `
    this.ele.innerHTML = template ;
    
    this.start();
  }

  start(){
    if(this.timerKey){
      clearTimeout(this.timerKey);
    }

    this.timerKey = setTimeout(() => {
      this.nextbt();
    }, 3000);
  }

}

new photo(document.querySelector("#view"),images).init() ;
