<template>
  <div>
    <q-tree :nodes="okrs" node-key="id" label-key="label" default-expand-all>
      <div slot="default-header" slot-scope="prop" class="row items-center">
        <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
      </div>

      <div slot="default-body" slot-scope="prop">
        <span v-if="prop.node.confidence > -1" class="text-weight-thin">Zuversicht:
          <q-slider
            v-model="prop.node.confidence"
            :min="0"
            :max="10"
            :step="1"
            label
            snap
            color="positive"
            :warning="prop.node.confidence < 7 && prop.node.confidence > 2"
            :error="prop.node.confidence < 3"
          />
        </span>
      </div>
    </q-tree>
  </div>
</template>

<script>
export default {
  name: 'OKRComponent',
  data: () => ({
    okrs: [
      {
        id: 1,
        label: 'BeratungTeam überzeugt mit konkreter zielführender Hilfe',
        children: [
          {
            label: '10 Personen vereinbaren ein persönliches Kennenlernen',
            confidence: 5
          },
          {
            label: '50 Menschen erhalten das OKR E-Book',
            confidence: 2
          },
          {
            label: '7 Videos auf YouTube veröffentlichen',
            confidence: 4
          }
        ]
      }
    ]
  })}
</script>

<style>
</style>
