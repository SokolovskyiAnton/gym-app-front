<template>
  <div
    class="flex column justify-between full-height"
  >
    <div class="data-base-exercises__title">
      <span>
        {{ selectedCategory.title }}
      </span>
    </div>
    <div class="data-base-exercises-main q-mb-auto">
      <q-form
        class="q-pt-sm"
        @submit.prevent
      >
        <div class="data-base-exercises-main__input">
          <q-input
            v-model="nameOfExercise"
            type="text"
            label="Название упражнения"
            label-color="grey"
            color="transparent"
            input-style="color: white; font-size: 18px; font-weight: bold;"
          />
        </div>
        <div class="data-base-exercises-main__toggle q-mt-lg">
          <div class="flex items-center full-width">
            <span>Собственный вес</span>
            <span class="toggle-info">
              i
              <q-tooltip
                class="bg-indigo"
                anchor="bottom end"
                max-height="200px"
                max-width="200px"
                :hide-delay="4000"
              >
                При выборе этого параметра в графиках будет учитываться количество повторов, а не тоннаж
              </q-tooltip>
            </span>
          </div>
          <q-toggle v-model="isOwnWeight" />
        </div>
      </q-form>
    </div>
    <div class="data-base-exercises-bottom">
      <div
        class="data-base-exercises-bottom__arrow q-mr-md"
        @click="createMode"
      >
        <q-icon
          name="west"
          size="1.2rem"
        />
      </div>
      <div
        v-if="nameOfExercise"
        class="data-base-exercises-bottom__btn full-width"
      >
        <q-btn
          class="full-width"
          unelevated
          @click="selectedExercise ? editExercise(nameOfExercise, isOwnWeight, selectedExercise) : createExercise(nameOfExercise, isOwnWeight)"
        >
          {{ selectedExercise ? 'Сохранить' : 'Создать' }}
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ICategories, IExercise } from 'src/store/categories/types'
import useMethodsOfExercises from 'src/hooks/useMethodsOfExercises'

const emit = defineEmits(['create-mode'])

const props = defineProps<{
  selectedCategory: ICategories | null,
  selectedExercise: IExercise
}>()

const isOwnWeight = ref<boolean>(props.selectedExercise ? props.selectedExercise.isOwnWeight : false)
const nameOfExercise = ref<string>(props.selectedExercise ? props.selectedExercise.title : '')

function createMode () {
  emit('create-mode')
}

const { createExercise, editExercise } = useMethodsOfExercises(props.selectedCategory, emit)
</script>

<style lang="stylus" scoped>
.data-base-exercises__title
  padding 10px 0 10px 0
  font-size 24px
  font-weight bold
  text-align center
.data-base-exercises-bottom
  display flex
  flex-wrap nowrap
  padding 10px
  &__arrow
    border-radius 50%
    background rgba(225, 225, 225, 0.2)
    min-width 40px
    min-height 40px
    display flex
    justify-content center
    align-items center
  &__btn
    border-radius 10px
    background var(--gym-btn-background-1)
    color var(--gym-btn-color-1)
.data-base-exercises-main__input
  border-top 1px solid gray
  border-bottom 1px solid gray
  border-radius 0
  padding 5px
.data-base-exercises-main__toggle
  display flex
  justify-content space-between
  border-bottom 1px solid gray
  font-weight bold
  font-size 17px
  padding 5px
.toggle-info
  text-align center
  line-height 20px
  width 20px
  height 20px
  border-radius 50%
  background rgba(225, 225, 225, 0.3)
  margin-left 20px
</style>
