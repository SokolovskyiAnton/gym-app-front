<template>
  <q-page>
    <q-toggle @update:model-value="$q.dark.toggle()" :model-value="$q.dark.isActive"/>
    <h5 class="default-text">Hello</h5>
  </q-page>
</template>

<script lang="ts">
import { useStore } from 'src/store'
import { onMounted } from 'vue'
export default {
  name: 'Home',
  setup () {
    const store = useStore()
    onMounted(async () => {
      try {
        await store.dispatch('getProfile')
        await store.dispatch('getExercises')
      } catch (e) {
        console.error(e)
      }
    })
  }
}
</script>

<style scoped>

</style>
