<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
  >
    <q-card class="full-width full-height q-pa-sm flex column no-wrap dialog-bg ">
      <h5 class="text-center">
        Результаты
      </h5>
      <result-markup
        :exercise-results="exerciseResultCopy"
        :program-ids="programIds"
      />
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { IExercise, IResult } from 'src/store/exercises/types'
import ResultMarkup from 'components/Home/BoardProgram/ResultMarkup.vue'
import { BoardProgramIds } from 'components/constans'

defineEmits([
  ...useDialogPluginComponent.emits
])
const props = defineProps<{
  exercise: IExercise,
  programIds: BoardProgramIds
}>()

const { dialogRef, onDialogHide } = useDialogPluginComponent()
const exerciseResult = props.exercise.results.length > 0 ? props.exercise.results.find((res: IResult) => res.date === props.programIds.date) as IResult : { results: [] }
const exerciseResultCopy = JSON.parse(JSON.stringify(exerciseResult)) as IResult | {}

</script>

<style lang="stylus">
.list-index-number
  font-size 12px
  color: var(--gym-text-color-2)
</style>
