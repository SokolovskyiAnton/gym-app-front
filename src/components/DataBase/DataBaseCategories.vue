<template>
  <categories-list-module
    :create="false"
    @show-exercises="showExercises"
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ICategories } from 'src/store/categories/types'
import DataBaseExercises from 'src/components/DataBase/DataBaseExercises.vue'
import CategoriesListModule from 'components/DataBase/CategoriesListModule.vue'

defineEmits([
  'show-exercises'
])

const $q = useQuasar()

function showExercises (category: ICategories): void {
  $q.dialog({
    component: DataBaseExercises,
    componentProps: {
      category: category
    }
  })
}
</script>
