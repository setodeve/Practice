<template>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="name"><b>Username</b></label>
      <input
        v-model="user.username"
        type="text"
        class="input"
        placeholder="Enter Username"
        id="name"
        required
      />

      <label for="password"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input"
        placeholder="Enter Password"
        id="password"
        required
      />

      <button @click.prevent="login" class="button">Login</button>
    </div>
  </div>
</template>
<script setup>
const user = ref({
  username: '',
  password: '',
});

const login = async () => {
  if (!user.value.username || !user.value.password) {
    alert('Please enter username and password');
    return;
  }
  // const { data } = await useFetch('/api/login', {
  //   method: 'POST',
  //   body: user.value,
  // });
  console.log(user.value);
};
</script>