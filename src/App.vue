<template>
  <div class="container">
    <router-view />
  </div>
</template>
<script lang="ts">
import { computed, watch, onMounted } from 'vue'
import { useStore } from 'src/store'

export default {
  name: 'app',
  setup () {
    const store = useStore()
    const auth = computed(() => store.getters.auth)
    watch(auth, async () => {
      if (auth.value) {
        try {
          await store.dispatch('getProfile')
          await store.dispatch('getCategories')
          await store.dispatch('getEvents')
        } catch (e) {
          console.error(e)
        }
      }
    })
    onMounted(async () => {
      if (auth.value) {
        try {
          await store.dispatch('getProfile')
          await store.dispatch('getCategories')
          await store.dispatch('getEvents')
        } catch (e) {
          console.error(e)
        }
      }
    })
  }
}
</script>

<style lang="stylus">

</style>
