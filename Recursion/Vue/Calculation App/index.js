
new Vue({
  el: '#calc',
  data() {
    return{
      displayNum: '',
      resultNum: 0,
    };
  },
  methods:{
    display(num){
      this.displayNum += num ;
    },
    splitNum(){
      const regex = /[0-9]/g;
      const regexh = /\s/g;
      // const regexh = /\s[\+\-\/]\s/g;
      let formu = this.displayNum ;
      // console.log(formu.split(regexh));
      let splited = formu.split(regexh) ;
      this.calcnum(splited) ;
      // for(let i=0 ; i<formu.length ; i++){
      //   if(formu[i].match(regex)!=null){
      //     console.log(formu[i]);
      //   }else{
      //     console.log("break");
      //   }
      // }
    },
    calcnum(num){
      let calc = 0 ;
      let i = 0 ;
      const regexh = /[\+\-\/\*]/g;

      while(num[i]!=undefined){
        if(i <= 0){
          calc = this.checkOpe(Number(num[0]), num[1], Number(num[2]))  ;
          i = 3 ;
        }else{
          calc = this.checkOpe(calc, num[i], Number(num[i+1]))  ;
          i += 2 ;
        }
      }
      this.resultNum = calc ;
    },
    checkOpe(one,two,three){
      let tmp = 0 ;
      switch(two){
        case '+' :
          tmp = one + three ;
          break;
        case '-' :
          tmp = one - three ;
          break;
        case '/' :
          tmp = one / three ;
          break;
        case '*' :
          tmp = one * three ;
          break;
      }
      return tmp ;
    }
  },
})