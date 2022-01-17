<template>
  <div class="calendar-navigation flex justify-end">
    <q-btn
      :to="{ name: 'data-base' }"
      outlined
      unelevated
    >
      <div class="navigation">
        <span class="navigation-item" />
        <span class="navigation-item" />
        <span class="navigation-item" />
      </div>
    </q-btn>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="stylus" scoped>
.navigation-item
  display block
  width 20px
  height 2px
  background var(--gym-text-color)
  margin-top 4px
.navigation-item:nth-child(1)
  margin-left 8px
.navigation-item:nth-child(2)
  margin-left 4px
</style>
