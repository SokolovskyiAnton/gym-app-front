<template>
  <q-list v-if="selectedProgram.program">
    <q-expansion-item
      v-for="exercise in selectedProgram.program.exercises"
      :key="exercise._id"
      expand-icon-toggle
      :label="exercise.title"
      class="board-program-exercise"
    >
      <q-btn
        class="full-width btn-board"
        unelevated
        @click="addResults(exercise._id)"
      >
        Добавить подход
      </q-btn>
    </q-expansion-item>
  </q-list>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ICalendarProgram } from 'src/store/calendar/types'
import { IExercise } from 'src/store/categories/types'
import BoardProgramResults from 'components/Home/BoardProgram/BoardProgramResults.vue'

const props = defineProps<{
  selectedProgram: ICalendarProgram
}>()
const $q = useQuasar()

function addResults (_id: string): void {
  const exercise = props.selectedProgram?.program.exercises.find(exercise => exercise._id === _id) as IExercise
  const programIds = {
    exerciseId: exercise._id,
    programId: props.selectedProgram?._id,
    isTimer: exercise.isTimer,
    date: props.selectedProgram?.date
  }
  if (exercise) {
    $q.dialog({
      component: BoardProgramResults,
      componentProps: {
        exercise: exercise,
        programIds: programIds
      },
      fullHeight: true,
      fullWidth: true
    })
  }
}
</script>

<style lang="stylus" scoped>
.board-program-exercise
  margin-top 20px
  font-size 15px
  font-weight bold
</style>
