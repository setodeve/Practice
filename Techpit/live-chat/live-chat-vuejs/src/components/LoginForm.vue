<template>
  <div>
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <input type="email" required placeholder="メールアドレス" v-model="email">
      <input type="password" required placeholder="パスワード" v-model="password">
      <div class="error">{{ error }}</div>
      <button>ログインする</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import setItem from '../auth/setItem'
export default {
  emits: ['redirectToChatRoom'],
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods:{
    async login (){
      console.log("test")
      this.error = null
      try{
        const res = await axios.post('http://localhost:3000/auth/sign_in', {
          email: this.email,
          password: this.password
          }
        )
        if (!res) {
          throw new Error('ログインできませんでした')
        }
       if (!this.error) {
          setItem(res.headers, res.data.data.name)
          this.$emit('redirectToChatRoom')
        }
        console.log({ res })
        return res
      }catch(error){
        this.error = 'ログインできませんでした'
      }
    }
  }
}
</script>

<style>
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px auto;
    border-radius: 4px;
    border: 1px solid #eee;
    outline: none;
    box-sizing: border-box;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }

  .change-form {
    font-size: 14px;
    margin: 10px;
  }
</style>