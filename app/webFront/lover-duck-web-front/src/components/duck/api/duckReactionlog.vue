<template>
  <div>
    <p>alertId</p>
    <input v-model="alertId" @input="sendAlertId(alertId)" />
    <button @click="duckReactionlogResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      alertId: null
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckReactionlogResponse'
    ])
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckReactionlogAlertId',
      'duckReactionlogResponse'
    ]),
    sendAlertId (alertId) {
      this.updateDuckReactionlogAlertId(alertId)
      this.alertId = alertId
    }
  }
}
</script>
