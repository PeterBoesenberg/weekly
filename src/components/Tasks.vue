<template>
   <div>
    <q-field
      v-for="(task, index) in tasks" :key="task.label"
    >

      <q-checkbox v-model="tasks[index].checked" :label="task.label" />
    </q-field>

  </div>
</template>

<script>
export default {
  name: 'TasksComponent',
  data () {
    return {
      tasks: [
        {
          label: 'LinkedIn-Leute anschreiben',
          checked: true
        },
        {
          label: 'E-Book bei Altkontakten promoten',
          checked: false
        },
        {
          label: '2 Videos aufnehmen',
          checked: false
        }
      ]
    }
  }
}
</script>

<style>
</style>
