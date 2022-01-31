<template>
  <div class="exercises-list">
    <div
      v-for="category in categories"
      :key="category._id"
      class="exercise-item q-mt-sm q-mb-sm"
      @click="!create ? showExercises(category) : selectCategory(category)"
    >
      <div class="exercise-item__title">
        {{ category.title }}
      </div>
      <div class="exercise-item-block">
        <div class="exercise-item-block__quantity">
          {{ category.exercises.length }}
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
import { ICategories } from 'src/store/categories/types'

defineProps<{
  create: boolean
}>()

const store = useStore()
const categories = computed(() => store.getters.categories as ICategories[])
const emit = defineEmits(['select-category', 'show-exercises'])

function selectCategory (category: ICategories) {
  emit('select-category', category)
}
function showExercises (category: ICategories) {
  emit('show-exercises', category)
}
</script>

<style lang="stylus" scoped>
.exercise-item
  display flex
  justify-content space-between
  align-items center
  flex-wrap nowrap
  padding 15px
  cursor pointer
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
      width 30px
      height 30px
      background-color rgba(225, 225, 225, 0.3)
      color: var(--gym-text-color-3)
</style>
