<template>
  <q-page class="flex flex-center column">
    <h1>Weekly</h1>
    <team/>
    <hr>
    <div>Start, Ende, Timebox</div>
  </q-page>
</template>

<style>
</style>

<script>
import TeamComponent from '../components/Team'

export default {
  name: 'PageIndex',
  components: {
    'team': TeamComponent
  }
}
</script>
