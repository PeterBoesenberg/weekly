<template>
  <q-page class="row">
    <div class="col-md-6 col-xs-12"><okr/></div>
    <div class="col-md-6 col-xs-12"><health/></div>
    <div class="col-md-6 col-xs-12"><tasks/></div>
    <div class="col-md-6 col-xs-12"><backlog/></div>
  </q-page>
</template>

<style>
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
