<template>
  <q-card>
    <q-card-title>Team
      <span slot="subtitle">Wer nimmt am Weekly teil?</span>
    </q-card-title>

    <q-card-main>
      <person v-for="person in team" v-bind:person="person" v-bind:key="person"/>
    </q-card-main>
  </q-card>
</template>

<script>
import PersonComponent from './Person'

export default {
  name: 'TeamComponent',
  components: {
    person: PersonComponent
  },
  data () {
    return {
      team: [
        { name: 'Peter' },
        { name: 'Iryna' },
        { name: 'Iris' },
        { name: 'Katharina' }
      ]
    }
  }
}
</script>

<style>
</style>
