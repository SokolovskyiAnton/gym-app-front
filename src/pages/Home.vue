<template>
  <h1>Hi jeeeens!</h1>
</template>

<script>
export default {
  name: 'Home',
  async mounted () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const login = await this.$api.request(this.$api.urls.auth.login, { email: 'q@mail.ru', password: 'qqq55555' })
    console.log(login, 'HOME')
    localStorage.setItem('token', login.accessToken)
    console.log(localStorage.getItem('token'))
    console.log(await this.$api.request(this.$api.urls.exercises.getAll))
  }
}
</script>

<style scoped>

</style>
