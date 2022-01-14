<template>
  <div class="calendar">
    <div
      class="calendar-block"
      :class="{'full': fullSize}"
    >
      <calendar-btn />
      <q-date
        v-model="date"
        class="full-width"
        minimal
        first-day-of-week="1"
        :locale="locale"
        :events="events"
      />
    </div>
    <div class="flex justify-center">
      <span
        class="calendar-plank"
        @click="changeHeight"
      />
    </div>
  </div>
  <board :date="date" />
</template>

<script setup lang="ts">
// TODO create animation for calendar
// TODO create opportunity to add a few programs
import { computed, ref } from 'vue'
import { useStore } from 'src/store'
import { locale } from 'pages/constans'
import Board from 'components/Home/Board.vue'
import CalendarBtn from 'components/Home/CalendarBtn.vue'

const store = useStore()
const fullSize = ref<boolean>(false)
const date = ref<string>('')
const events = computed(() => store.getters.events)

function changeHeight () {
  fullSize.value = !fullSize.value
}
</script>

<style lang="stylus" scoped>
.calendar
  background var(--gym-page-color-1)
  border-radius 10px
.calendar-block
  height 180px
  overflow hidden
  transition height .5s ease-in-out
.full
  height 320px
  transition height .5s ease-in-out
.calendar-plank
  display block
  text-align center
  background var(--gym-btn-background)
  width 80px
  height 10px
  cursor pointer
  margin-top 10px
  margin-bottom 10px
  border-radius 5px
</style>
