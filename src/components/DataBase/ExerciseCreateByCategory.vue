<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
  >
    <q-card
      class="full-width full-height dialog-bg"
      :class="{'exercise-create-bg': isCreateMode}"
    >
      <categories-list-module
        v-if="!isCreateMode"
        :create="true"
        @select-category="selectCategory"
      />
      <exercise-create-module
        v-else
        :selected-exercise="null"
        :selected-category="categorySelected"
        @create-mode="createMode"
      />
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import ExerciseCreateModule from 'components/DataBase/ExerciseCreateModule.vue'
import CategoriesListModule from 'components/DataBase/CategoriesListModule.vue'
import { ICategories } from 'src/store/categories/types'

defineEmits([
  ...useDialogPluginComponent.emits,
  'select-category'
])

const { dialogRef, onDialogHide } = useDialogPluginComponent()
const categorySelected = ref<ICategories>()
const isCreateMode = ref<boolean>(false)

function selectCategory (category: ICategories): void {
  categorySelected.value = category
  createMode()
}
function createMode (): void {
  isCreateMode.value = !isCreateMode.value
}

</script>

<style lang="stylus" scoped>
.exercise-create-bg
  background var(--gym-page-color-2) !important
  color white
</style>
