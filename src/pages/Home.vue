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
      await store.dispatch('login', { email: 'q@mail.ru', password: 'qqq55555' })
      await store.dispatch('getExercises')
      await store.dispatch('getExercise', { id: '61aa23080a338fe1a300d00d' })
    })
  }
}
</script>

<style scoped>

</style>
