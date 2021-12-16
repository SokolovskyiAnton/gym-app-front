<template>
  <q-layout view="lHh Lpr lFf" class="flex flex-center">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmptyLayout'
})
</script>
