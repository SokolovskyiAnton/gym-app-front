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
      // await store.dispatch('updateResult', {
      //   data: {
      //     date: '12.12.2021',
      //     quantity: {
      //       1: '152',
      //       2: '16'
      //     }
      //   },
      //   id: '61bb2e396bf5f6ee064327b6'
      // })
      await store.dispatch('deleteResult', { id: '61bb31640ac285bcb2536889' })
      console.log(store.getters.exercises)
    })
  }
}
</script>

<style scoped>

</style>
