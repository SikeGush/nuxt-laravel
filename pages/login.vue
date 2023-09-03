<script lang="ts" setup>
import {useAuthStore} from "~/stores/UseAuthStore";

const form = ref({
  email: "test@example.com",
  password: "password"
});

const auth = useAuthStore();

async function handleLogin() {
  const {error} = await auth.login(form.value);

  console.log(error);
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <label>
      Email
      <input v-model="form.email" type="email">
    </label>
    <label>
      Password
      <input v-model="form.password" type="password">
    </label>

    <button>Login</button>
  </form>
</template>

<style scoped></style>
~/stores/UseAuthStore