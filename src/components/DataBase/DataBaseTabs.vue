<template>
  <div class="q-mt-md">
    <q-tabs
      v-model="tab"
      indicator-color="transparent"
      align="justify"
    >
      <q-tab
        class="data-base-tabs"
        :class="{'data-base-tabs-active': tab === 'exercises'}"
        name="exercises"
        label="Упражнения"
      />
      <q-tab
        class="data-base-tabs"
        :class="{'data-base-tabs-active': tab === 'programs'}"
        name="programs"
        label="Программы"
      />
    </q-tabs>

    <create-button :tab="tab" />

    <q-tab-panels
      v-model="tab"
      class="data-base-tabs-panels"
      animated
    >
      <q-tab-panel name="exercises">
        <data-base-exercises />
      </q-tab-panel>
      <q-tab-panel name="programs">
        <data-base-programs />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
// TODO create correct word endings
import { ref } from 'vue'
import CreateButton from 'components/CreateButton.vue'
import DataBaseExercises from 'components/DataBase/DataBaseExercises.vue'
import DataBasePrograms from 'components/DataBase/DataBasePrograms.vue'

const tab = ref<string>('exercises')
</script>

<style lang="stylus" scoped>
.data-base-tabs
  border-radius 15px !important
.data-base-tabs-active
  background var(--gym-btn-background-2)
  color white
.data-base-tabs-panels
  background var(--gym-page-color)
</style>
