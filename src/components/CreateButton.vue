<template>
  <div class="q-mt-md q-mb-md">
    <q-btn
      class="data-base-tabs__btn full-width text-weight-bold flex justify-between"
      unelevated
    >
      <span>Создать {{ tab === 'exercises' ? 'упражнение' : 'программу' }}</span>
      <q-icon
        class="q-ml-md"
        name="add"
        size="1.3rem"
      />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tab: string
}>()
</script>

<style scoped lang="stylus">
.data-base-tabs__btn
  padding 20px
  border-radius 15px
  background var(--gym-btn-background-3)
  color var(--gym-text-color-9)
</style>
