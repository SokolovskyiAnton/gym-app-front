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
      // await store.dispatch('createExercise', { title: 'HHH111' })
      // await store.dispatch('deleteExercise', { id: '61bb0c84a6ab125e2edb8dcd' })
      console.log(store.getters.exercises)
    })
  }
}
</script>

<style scoped>

</style>
