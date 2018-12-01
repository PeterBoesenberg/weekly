<template>
  <div>
    <q-card>
    <q-card-title>
      OKRs
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <q-list>
         <q-list-header>BeratungTeam überzeugt mit konkreter zielführender Hilfe</q-list-header>
        <q-item >
          <q-item-main label="10 Personen vereinbaren ein persönliches Kennenlernen" sublabel=""/>
          <q-item-side right class="text-positive">5</q-item-side>
        </q-item>
        <q-item >
          <q-item-main label="50 Menschen erhalten das OKR E-Book" sublabel=""/>
          <q-item-side right class="text-negative">3</q-item-side>
        </q-item>
        <q-item >
          <q-item-main label="7 Videos auf YouTube veröffentlichen" sublabel=""/>
          <q-item-side right class="text-warning">4</q-item-side>
        </q-item>

      </q-list>
    </q-card-main>
  </q-card>
  </div>
</template>

<script>
export default {
  name: 'OKRComponent',
  data () {
    return {}
  }
}
</script>

<style>
</style>
