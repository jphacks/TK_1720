<template>
  <div>
    <div v-if="toggle">
      <h3>{{ getDuckDetailResponse.name }}</h3>
      <span v-if="getDuckDetailResponse.status">in the bath</span>
        <span v-else>not in the bath</span>
      <h3>〒{{ getDuckDetailResponse.postalCode }}</h3>
      <h3>{{ getDuckDetailResponse.address }}</h3>
    </div>
    <p>
      <alert-log
        :id="duckId"
      ></alert-log>
    </p>
    <p>
      <h2>Daily Log</h2>
      <daily-log
       :id="duckId"
      ></daily-log>
    </p>
    <p>
      alert status 変更
    </p>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import DailyLog from './api/duckDailylog'
import AlertLog from './api/duckAlertlog'

export default {
  components: {
    DailyLog,
    AlertLog
  },
  data () {
    return {
      duckId: null,
      toggle: false
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckDetailResponse'
    ])
  },
  watch: {
    getDuckDetailResponse (data) {
      this.toggle = true
    }
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckDetailDuckId',
      'duckDetailResponse'
    ]),
    sendDuckId (duckId) {
      this.updateDuckDetailDuckId(duckId)
      this.duckId = duckId
    }
  },
  created () {
    // do something after creating vue instance
    this.sendDuckId(this.$route.params.id)
    this.duckDetailResponse()
  }
}
</script>
<style scoped>
</style>
