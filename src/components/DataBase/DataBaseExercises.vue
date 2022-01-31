<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
  >
    <q-card
      class="full-width full-height dialog-bg"
      :class="{'exercise-create-bg': isCreateMode}"
    >
      <div
        v-if="!isCreateMode"
        class="exercises-list"
      >
        <div class="data-base-exercises__title">
          <span>
            {{ category.title }}
          </span>
        </div>
        <create-button
          class="q-ml-sm q-mr-sm"
          :tab="'exercises'"
          @click="createMode"
        />
        <div class="data-base-exercises">
          <div
            v-for="exercise in category.exercises"
            :key="exercise._id"
            class="data-base-exercises__item"
          >
            {{ exercise.title }}
            <q-btn
              icon="more_vert"
              flat
            >
              <q-menu
                anchor="bottom middle"
                auto-close
                transition-show="scale"
                transition-hide="scale"
              >
                <q-list>
                  <q-item
                    clickable
                    @click="editExercise(exercise)"
                  >
                    Update
                  </q-item>
                  <q-item
                    clickable
                    @click="deleteExercise(exercise)"
                  >
                    Delete
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </div>

      <exercise-create-module
        v-else
        :selected-exercise="selectedExercise"
        :selected-category="category"
        @create-mode="createMode"
      />
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent, useQuasar } from 'quasar'
import { useStore } from 'src/store'
import { ref } from 'vue'
import CreateButton from 'components/CreateButton.vue'
import { ICategories, IExercise } from 'src/store/categories/types'
import ExerciseCreateModule from 'components/DataBase/ExerciseCreateModule.vue'

defineEmits([
  ...useDialogPluginComponent.emits,
  'create-mode'
])

const props = defineProps<{
  category: ICategories
}>()

const { dialogRef, onDialogHide } = useDialogPluginComponent()
const store = useStore()
const $q = useQuasar()
const isCreateMode = ref<boolean>(false)
const selectedExercise = ref<IExercise>()

function createMode (): void {
  isCreateMode.value = !isCreateMode.value
}
function editExercise (exercise: IExercise): void {
  selectedExercise.value = exercise
  createMode()
}
function deleteExercise (exercise: IExercise): void {
  const data = {
    exerciseId: exercise._id,
    categoryId: props.category._id
  }
  $q.dialog({
    title: 'Внимание!',
    message: 'Вы хотите удалить упражнение?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    void store.dispatch('deleteExercise', data)
    $q.notify({
      type: 'positive',
      message: 'Exercise is deleted'
    })
  })
}
</script>

<style lang="stylus" scoped>
.data-base-exercises__title
  padding 10px 0 10px 0
  font-size 24px
  font-weight bold
  text-align center
.data-base-exercises__item
  display flex
  justify-content space-between
  align-items center
  padding 15px
  font-size 17px
  font-weight bold
  margin-top 10px

.exercise-create-bg
  background var(--gym-page-color-2) !important
  color white
</style>
