
const CaractersInfo ={
  Hero:[
    "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png",
    "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png"
  ],
  Warrior:[
    "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
    "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png"
  ],
  Mage:[
    "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png",
    "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png"
  ]
} ;

const Gender = ["Male","Female"] ;

console.log(CaractersInfo['Hero'][0])

new Vue({
  el: '#charSetting',
  data() {
    return{
      name: 'Main',
      jobName: 'Hero',
      gender: '0',
      traits: 'Brave',
      charImage: 'https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png'
    };
  },
  computed: {
    checkImage(){
      return (job,gender)=>{
        return CaractersInfo[job][gender];
      }
    },
    checkGender(){
      return (num)=>{
        return Gender[num];
      }
    }
  }
})