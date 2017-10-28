<template>
  <div>
    <div v-for="log in list">
      {{ log }}
      <button @click="updateAlertId(log.alertId)">対応する</button>
      <div class="modal" v-if="toggle">
        <button @click="updateAlertstatus(0)">対応中</button>
        <button @click="updateAlertstatus(1)">対応済み</button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: ['id'],
  data () {
    return {
      duckId: null,
      perPage: 5,
      page: 1,
      list: [],
      alertId: null,
      toggle: false
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckAlertlogResponse',
      'getDuckAlertlogUpdateResponse' // update
    ])
  },
  watch: {
    getDuckAlertlogResponse (data) {
      this.list = data.alert
    },
    getDuckAlertlogUpdateResponse (data) {
      this.toggle = false
    }
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckAlertlogDuckId',
      'updateDuckAlertlogPerPage',
      'updateDuckAlertlogPage',
      'duckAlertlogResponse',
      'updateDuckAlertlogUpdateAlertId', // update
      'updateDuckAlertlogUpdateStatus',
      'duckAlertlogUpdateResponse'
    ]),
    sendDuckId (duckId) {
      this.updateDuckAlertlogDuckId(duckId)
      this.duckId = duckId
    },
    sendPerPage (perPage) {
      this.updateDuckAlertlogPerPage(perPage)
      this.perPage = perPage
    },
    sendPage (page) {
      this.updateDuckAlertlogPage(page)
      this.page = page
    },
    updateAlertId (id) {
      this.updateDuckAlertlogUpdateAlertId(id)
      this.toggle = true
    },
    updateAlertstatus (status) {
      this.updateDuckAlertlogUpdateStatus(status)
      this.duckAlertlogUpdateResponse()
    }
  },
  created () {
    // do something after creating vue instance
    this.sendDuckId(this.id)
    this.sendPerPage(this.perPage)
    this.sendPage(this.page)
    this.duckAlertlogResponse()
  }
}
</script>
