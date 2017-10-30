<template>
  <div class="all">
    <div class="container">
      <div v-if="toggle">
        <h1>{{ getDuckDetailResponse.name }}</h1>
        <span class="in" v-if="getDuckDetailResponse.status">入浴中</span>
          <span v-else>not in the bath</span>
        <h3>
          〒{{ getDuckDetailResponse.postalCode }}
          {{ getDuckDetailResponse.address }}
        </h3>
      </div>
      <p class="alert">
        <h2>Alert Log</h2>
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
    </div>
  </div>
</template>
<style scoped>
  .all {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #fcf8e3;
    padding-top: 100px;
    padding-bottom: 110px;
  }

  .container {
    margin: 0 200px;
  }

  .in {
    background-color: #ffe137;
    border-radius: 2px;
    padding: 5px 10px;
  }
</style>
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
