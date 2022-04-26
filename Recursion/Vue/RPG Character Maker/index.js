
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

const skills = ["Everyman","Bat out of hell","Brave","Lucky devil","Tomboy"]

// console.log(CaractersInfo['Hero'][0])

new Vue({
  el: '#charSetting',
  data() {
    return{
      name: 'Main',
      jobName: 'Hero',
      gender: '0',
      traits: '0',
      charImage: 'https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png',
      Strength: 10,
      Agility: 10,
      Resilience: 10,
      Wisdom: 10,
      Luck: 10,
    };
  },
  methods: {
    initSkill(){
      this.Strength = 10 ;
      this.Agility = 10 ;
      this.Resilience = 10 ;
      this.Wisdom = 10 ;
      this.Luck = 10 ;
    },
    initTraits(){
      this.traits = '0'
    },
    changeJob(){
      skill = this._data.traits ;
      job = this._data.jobName ;
      if((job!='Hero') && (skill=='2')){
        console.log('ttete');
        this.initTraits() ;
        return ;
      }
    },
    changeSkill(){
      this.initSkill() ;
      skill = this._data.traits ;
      job = this._data.jobName ;
      // console.log(skill) ;
      if(skill==='1'){
      //bat out of hell
        this.Agility *= 1.40 ;
      }else if(skill==='2'){
      //brave
        this.Strength *= 1.10 ;
        this.Agility *= 1.10 ;
        this.Luck *= 1.20 ;
      }else if(skill==='3'){
      //lucky devil
        this.Luck *= 1.50 ;
      }else if(skill==='4'){
      //tomboy
        this.Strength *= 1.10 ;
        this.Agility *= 1.10 ;
      }
    },
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
    },
    checkskill(){
      return (num)=>{
        return skills[num];
      }
    },
  }
})