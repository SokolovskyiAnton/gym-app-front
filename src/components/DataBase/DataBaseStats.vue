<template>
  <div class="data-base-stats flex no-wrap text-center q-mt-md">
    <div
      v-for="item in list"
      :key="item"
      class="stats-block"
    >
      <div class="stats-block__content">
        <div class="stats-block__length">
          {{ item[0].value.length }}
        </div>
        <div>
          <span>
            {{ item[1] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store'
import { computed } from 'vue'

const store = useStore()
const programs = computed(() => store.getters.programs)
const exercises = computed(() => store.getters.exercises)

const list = [[programs, 'программ'], [exercises, 'упражнений']]
</script>

<style scoped lang="stylus">
.stats-block
  padding 20px
  width 100%
  border-radius 25px
  margin-left 10px
  font-weight bold
  background var(--gym-btn-background-3)
  color var(--gym-text-color-9)
  &__content
    display flex
    flex-direction column
    justify-content center
    align-items center
.stats-block__length
  font-size 17px
</style>
