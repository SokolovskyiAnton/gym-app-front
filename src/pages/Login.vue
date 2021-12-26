<template>
  <q-page>
    <login-form />
  </q-page>
</template>

<script lang="ts">
// TODO Create the ability to register and login with Google
// TODO Create autocomplete login and register form
// TODO Setup fontsize in notify
import LoginForm from 'components/Login/LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
