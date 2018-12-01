<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Weekly
          <div slot="subtitle">Den Wochenstart erfolgreich planen</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>

        <q-item to="/overview">
          <q-item-side icon="border_inner"/>
          <q-item-main label="4 Feldertafel" sublabel="Alles auf einen Blick"/>
        </q-item>
        <q-item to="/weekly">
          <q-item-side icon="calendar_today"/>
          <q-item-main label="Weekly starten" sublabel="Teilnehmer und Inhalte"/>
        </q-item>
        <q-item to="/confidence">
          <q-item-side icon="thumbs_up_down"/>
          <q-item-main label="Key Results 1" sublabel="Zuversicht einschätzen"/>
        </q-item>
        <q-item to="/changes">
          <q-item-side icon="tune"/>
          <q-item-main label="Key Results 2" sublabel="Änderungen bewerten"/>
        </q-item>
        <q-item to="/health">
          <q-item-side icon="local_hospital"/>
          <q-item-main label="Health Metriken" sublabel="Ampel-Einschätzung"/>
        </q-item>
        <q-item to="/tasks">
          <q-item-side icon="check"/>
          <q-item-main label="Aufgaben der Woche" sublabel="Konkrete Aufgaben"/>
        </q-item>
        <q-item to="/backlog">
          <q-item-side icon="notifications_paused"/>
          <q-item-main label="Backlog" sublabel="Die nächsten 4 Wochen"/>
        </q-item>
        <q-item-separator/>
        <q-item>
          <q-item-side icon="timeline"/>
          <q-item-main label="OKRs" sublabel="OKRs editieren"/>
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
