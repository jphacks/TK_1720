<template>
  <div>
    <p>alertId</p>
    <input v-model="alertId" @input="sendAlertId(alertId)" />
    <p>status</p>
    <input v-model="status" @input="sendStatus(status)" />
    <button @click="duckAlertlogUpdateResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      alertId: null,
      status: null
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckAlertlogUpdateResponse'
    ])
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckAlertlogUpdateAlertId',
      'updateDuckAlertlogUpdateStatus',
      'duckAlertlogUpdateResponse'
    ]),
    sendAlertId (alertId) {
      this.updateDuckAlertlogUpdateAlertId(alertId)
      this.alertId = alertId
    },
    sendStatus (status) {
      this.updateDuckAlertlogUpdateStatus(status)
      this.status = status
    }
  }
}
</script>
