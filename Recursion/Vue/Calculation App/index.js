
new Vue({
  el: '#calc',
  data() {
    return{
      displayNum: '',
      cnt: 0,
      resultNum: 0,
    };
  },
  methods:{
    display(num){
      const regexh = /[\+\-\/\*]/g;
      let formu = this.displayNum ;
      if( (formu[formu.length-1]!=undefined)&&
          (formu[formu.length-1].match(regexh)!=null)&&
          num.match(regexh) != null){
        return ;
      }
      this.displayNum += num ;
    },
    splitNum(){
      const regexh = /([\+\-\/\*])/g;
      let formu = this.displayNum ;
      let splited = formu.split(regexh) ;
      this.calcnum(splited) ;
    },
    calcnum(num){
      let calc = 0 ;
      let i = 0 ;

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