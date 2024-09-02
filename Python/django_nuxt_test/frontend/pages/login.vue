<script setup>
import { useField } from 'vee-validate';
import { string } from 'yup';

const { value: username, errorMessage: nameError } = useField(
  'username',
  string().required("この項目は必須です").max(3,"3文字以内で入力してください")
);
const { value: password, errorMessage: passwordError } = useField(
  'password',
  string().required("この項目は必須です").min(8,"８文字以上で入力してください")
);

const login = async () => {
  console.log(username);
  console.log(password);
};
</script>

<template>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="name"><b>Username</b></label>
      <input
        v-model="username"
        type="text"
        class="input"
        placeholder="Enter Username"
        id="name"
        required
      />
      <p>{{ nameError }}</p>
      <label for="password"><b>Password</b></label>
      <input
        v-model="password"
        type="password"
        class="input"
        placeholder="Enter Password"
        id="password"
        required
      />
      <p>{{ passwordError }}</p>
      <button @click.prevent="login" class="button">Login</button>
    </div>    
  </div>
</template>
