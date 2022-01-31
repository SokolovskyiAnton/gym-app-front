<template>
  <div class="board-program">
    <div
      class="board-program-title q-pl-md q-pr-md"
      :style="{background: selectedProgram.program.style.background, color: selectedProgram.program.style.color}"
    >
      <div>
        {{ selectedProgram.program.title }}
      </div>
      <div class="board-program-title__quantity">
        {{ selectedProgram.program.exercises.length }}
      </div>
    </div>
    <board-program-exercise :selected-program="selectedProgram" />
  </div>
</template>

<script setup lang="ts">
import { ICalendarProgram } from 'src/store/calendar/types'
import BoardProgramExercise from 'components/Home/BoardProgram/BoardProgramExercise.vue'

defineProps<{
  selectedProgram: ICalendarProgram
}>()
</script>

<style lang="stylus" scoped>
.board-program
  margin-top 20px
  &-title
    display flex
    justify-content space-between
    align-items center
    height 60px
    border-radius 10px
    font-size 16px
    font-weight bold
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
