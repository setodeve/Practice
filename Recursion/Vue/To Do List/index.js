
new Vue({
  el: '#todo',
  data() {
    return{
      inputTodo:'',
      todos :[],
    };
  },
  methods:{
    createTodo(){
      if(this.inputTodo=="") return ;
      this.todos.push(this.inputTodo);
      this.inputTodo = '' ;
    },
    deleteTodo(index){
      this.todos.splice(index,1) ;
    },
  },
  computed:{
    isDisabled() {
      return (this.inputTodo == '')
    },
  }
})