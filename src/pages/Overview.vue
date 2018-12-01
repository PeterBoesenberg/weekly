<template>
  <q-page>
    <div class="quadrant">tasks</div>
    <div class="quadrant">okr</div>
    <div class="quadrant">backlog</div>
    <div class="quadrant">health</div>
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
export default {
  name: 'PageIndex'
}
</script>
