<template>
  <div class="board-program">
    <div
      class="board-program-title"
      :style="{background: selectedProgram.program.style.background, color: selectedProgram.program.style.color}"
    >
      {{ selectedProgram.program.title }}
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
.board-program-title
  display flex
  justify-content center
  align-items center
  height 60px
  border-radius 10px
  font-size 16px
  font-weight bold
</style>
