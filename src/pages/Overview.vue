<template>
  <q-page>
    <div class="quadrant"><tasks/></div>
    <div class="quadrant"><okr/></div>
    <div class="quadrant"><backlog/></div>
    <div class="quadrant"><health/></div>
  </q-page>
</template>

<style>
.quadrant{
  width: 50%;
  height: 50vh;
  display: inline-block;
}
</style>

<script>
import TasksComponent from '../components/Tasks'
import OKRComponent from '../components/OKR'
import BacklogComponent from '../components/Backlog'
import HealthComponent from '../components/Health'

export default {
  name: 'PageIndex',
  components: {
    'tasks': TasksComponent,
    'okr': OKRComponent,
    'backlog': BacklogComponent,
    'health': HealthComponent
  }
}
</script>
