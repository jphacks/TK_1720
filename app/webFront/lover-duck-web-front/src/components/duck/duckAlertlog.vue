<template>
  <div>
    <p>duckId</p>
    <input v-model="duckId" @input="sendDuckId(duckId)" />
    <p>perPage</p>
    <input v-model="perPage" @input="sendPerPage(perPage)" />
    <p>page</p>
    <input v-model="page" @input="sendPage(page)" />
    <button @click="duckAlertlogResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      duckId: null,
      perPage: null,
      page: null
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckAlertlogResponse'
    ])
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckAlertlogDuckId',
      'updateDuckAlertlogPerPage',
      'updateDuckAlertlogPage',
      'duckAlertlogResponse'
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
    }
  }
}
</script>
