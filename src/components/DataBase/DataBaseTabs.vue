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

    <create-button
      :tab="tab"
      @click="showModal"
    />

    <q-tab-panels
      v-model="tab"
      class="data-base-tabs-panels"
      animated
    >
      <q-tab-panel name="exercises">
        <data-base-categories />
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
import DataBaseCategories from 'components/DataBase/DataBaseCategories.vue'
import DataBasePrograms from 'components/DataBase/DataBasePrograms.vue'
import ExerciseCreateByCategory from 'components/DataBase/ExerciseCreateByCategory.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const tab = ref<string>('exercises')

function showModal (): void {
  if (tab.value === 'exercises') {
    $q.dialog({
      component: ExerciseCreateByCategory
    })
  }
}
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
