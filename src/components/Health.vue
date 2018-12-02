<template>
  <div>
    <q-field
      :label="metric.label"
      v-for="(metric, index) in healthMetrics" :key="metric.label"
    >
      <q-option-group
          color="secondary"
          v-model="healthMetrics[index].value"
          :options="[
            { label: 'Rot', value: 'red', color: 'error' },
            { label: 'Gelb', value: 'yellow', color: 'warning'},
            { label: 'Grün', value: 'green', color: 'positive' }
          ]"
        />
    </q-field>
  </div>
</template>

<script>
export default {
  name: 'HealthComponent',
  data () {
    return {
      healthMetrics: [
        {
          label: 'Hubspot aktiv nutzen',
          value: 'green'
        },
        {
          label: 'Schnelle Entscheidungen treffen',
          value: 'yellow'
        }
      ]
    }
  }
}
</script>

<style>

</style>
