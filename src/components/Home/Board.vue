<template>
  <div
    v-if="!selectedProgram"
    class="board-program"
  >
    <h5 class="board-text text-center text-weight-bold">
      Добавь программу, чтобы записать тренировку.
    </h5>
    <q-btn class="board-btn full-width">
      Добавить
    </q-btn>
  </div>
  <div v-else>
    <board-program :selected-program="selectedProgram" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store'
import { computed } from 'vue'
import { ICalendarProgram } from 'src/store/calendar/types'
import BoardProgram from 'components/Home/BoardProgram/BoardProgram.vue'

const props = defineProps<{
  date: string
}>()
const store = useStore()
const programs = computed(() => store.getters.calendarPrograms as ICalendarProgram[])
const selectedProgram = computed(() => {
  return programs.value.find(program => program.date === props.date)
})

</script>

<style lang="stylus" scoped>
.board-text
  color: var(--gym-text-color-4)
.board-btn
  background var(--gym-text-color)
  color var(--gym-text-color-7)
  border-radius 10px
  height 60px
</style>
