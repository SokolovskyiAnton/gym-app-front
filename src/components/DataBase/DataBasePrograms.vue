<template>
  <div class="programs-list">
    <div
      v-for="program in programs"
      :key="program._id"
      class="program-item q-mt-sm q-mb-sm"
      :style="{background: program.style.background, color: program.style.color}"
    >
      <div class="program-item__title">
        {{ program.title }}
      </div>
      <div class="program-item-block">
        <div class="program-item-block__quantity">
          {{ program.exercises.length }}
        </div>
        <q-icon
          class="q-ml-sm"
          name="chevron_right"
          size="1.2rem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store'
import { computed } from 'vue'
import { IProgram } from 'src/store/programs/types'

const store = useStore()
const programs = computed(() => store.getters.programs as IProgram[])
</script>

<style scoped lang="stylus">
.program-item
  display flex
  justify-content space-between
  align-items center
  flex-wrap nowrap
  padding 15px
  cursor pointer
  border-radius 10px
  &__title
    font-size 17px
    font-weight bold
  &-block
    display flex
    align-items center
    &__quantity
      display flex
      justify-content center
      align-items center
      border-radius 50%
      width 35px
      height 35px
      font-weight bold
      font-size 18px
      background-color rgba(225, 225, 225, 0.6)
      color: white
</style>
