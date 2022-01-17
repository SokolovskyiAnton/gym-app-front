<template>
  <div class="results-markup overflow-auto">
    <div
      v-if="form.results.length > 0"
      class="list-title flex full-width"
    >
      <div class="list-title__item">
        #
      </div>
      <div class="list-title__item">
        {{ programIds.isTimer ? 'Длительность' : 'Вес' }}
      </div>
      <div class="list-title__item">
        {{ programIds.isTimer ? 'Дистанция' : 'Повторения' }}
      </div>
    </div>
    <q-list>
      <q-item
        v-if="form.results.length > 0"
        class="flex column"
      >
        <div
          v-for="(result, index) in form.results"
          :key="index"
          class="flex list-block full-width q-mt-md q-mb-md"
        >
          <div
            v-if="!programIds.isTimer"
            class="flex full-width items-center"
          >
            <div class="list-block__item">
              {{ index + 1 }}
            </div>
            <div class="list-block__item">
              <q-input
                v-model.number="result.weight"
                input-class="text-center text-weight-bold"
                filled
                class="list-block__item-input"
              />
            </div>
            <div class="list-block__item">
              <q-input
                v-model.number="result.repetition"
                input-class="text-center text-weight-bold"
                filled
                class="list-block__item-input"
              />
            </div>
          </div>
          <div
            v-else
            class="flex flex full-width items-center"
          >
            <div class="list-block__item">
              {{ index + 1 }}
            </div>
            <div class="list-block__item">
              <q-input
                v-model.number="result.duration"
                input-class="text-center text-weight-bold"
                filled
                class="list-block__item-input"
              />
            </div>
            <div class="list-block__item">
              <q-input
                v-model.number="result.distance"
                input-class="text-center text-weight-bold"
                filled
                class="list-block__item-input"
              />
            </div>
          </div>
        </div>
      </q-item>

      <q-btn
        class="full-width q-mb-md q-mt-md btn-board"
        unelevated
        @click="addResult"
      >
        Добавить результат
      </q-btn>
    </q-list>
  </div>
  <q-btn
    class="full-width btn-board"
    @click="saveResult"
  >
    Сохранить
  </q-btn>
</template>

<script setup lang="ts">
// TODO create sticky block
import { reactive, ref, onMounted } from 'vue'
import { useStore } from 'src/store'
import { IResult } from 'src/store/exercises/types'
import { BoardProgramIds } from 'components/constans'

const props = defineProps<{
  exerciseResults: IResult,
  programIds: BoardProgramIds
}>()

const store = useStore()
const form = reactive(props.exerciseResults)
const isOldResult = ref<boolean>(true)

function addResult () {
  form.results.push({
    weight: 0,
    duration: 0,
    distance: 0,
    repetition: 0
  })
}

async function saveResult () {
  if (!isOldResult.value) {
    await store.dispatch('createResult', {
      exerciseId: props.programIds?.exerciseId,
      programId: props.programIds?.programId,
      result: {
        _id: props.programIds?.exerciseId,
        date: props.programIds?.date,
        results: form.results
      }
    })
  } else {
    await store.dispatch('updateResult', {
      exerciseId: props.programIds?.exerciseId,
      programId: props.programIds?.programId,
      result: {
        _id: form._id,
        results: form.results
      }
    })
  }
}
onMounted(() => {
  isOldResult.value = form.results.length > 0
})
</script>

<style lang="stylus" scoped>
.list-title__item
  flex-basis 40%
  text-align center
.list-title__item:first-child
  flex-basis 20%
.list-block__item
  flex-basis 40%
  text-align center
.list-block__item:first-child
  flex-basis 20%
  font-size 12px
  color: var(--gym-text-color-2)
.list-block__item-input
  padding 5px
.results-markup
  flex-grow 1
</style>
