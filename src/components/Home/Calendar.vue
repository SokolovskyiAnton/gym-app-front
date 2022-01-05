<template>
  <div class="calendar">
    <div class="calendar-block" :class="{'full-height': fullSize}">
      <q-date
        class="full-width"
        v-model="date"
        minimal
        first-day-of-week="1"
        :locale="locale"
        :events="events"
      />
    </div>
    <div class="flex justify-center">
      <span @click="changeHeight" class="calendar-plank"></span>
    </div>
  </div>
</template>

<script lang="ts">
// TODO create animation for calendar
import { locale } from 'pages/constans'
import { computed, ref } from 'vue'
import { useStore } from 'src/store'

export default {
  name: 'calendar',
  setup () {
    const store = useStore()
    const fullSize = ref<boolean>(false)
    const date = ref<string>('')
    const events = computed(() => store.getters.events)
    function changeHeight () {
      fullSize.value = !fullSize.value
    }
    return {
      changeHeight,
      fullSize,
      date,
      locale,
      events
    }
  }
}
</script>

<style lang="stylus" scoped>
.calendar
  background var(--gym-page-color-1)
  border-radius 10px
.calendar-block
  height 150px
  overflow hidden
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
