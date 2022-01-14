<template>
  <q-page>
    <calendar />
  </q-page>
</template>

<script lang="ts">
// <q-toggle @update:model-value="$q.dark.toggle()" :model-value="$q.dark.isActive"/>
import Calendar from 'components/Home/Calendar.vue'

export default {
  name: 'Home',
  components: {
    Calendar
  }
}
</script>
