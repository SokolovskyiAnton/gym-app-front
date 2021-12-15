<template>
  <h1>Hi jeeeens!</h1>
</template>

<script lang="ts">
import { useStore } from 'src/store'
import { onMounted } from 'vue'

export default {
  name: 'Home',
  setup () {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('auth/login', { email: 'q@mail.ru', password: 'qqq55555' })
      await store.dispatch('exercises/getExercises')
    })
  }
}
</script>

<style scoped>

</style>
