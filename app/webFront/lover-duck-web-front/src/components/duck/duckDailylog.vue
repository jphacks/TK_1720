<template>
  <div>
    <p>duckId</p>
    <input v-model="duckId" @input="sendDuckId(duckId)" />
    <p>perPage</p>
    <input v-model="perPage" @input="sendPerPage(perPage)" />
    <p>page</p>
    <input v-model="page" @input="sendPage(page)" />
    <button @click="duckDailylogResponse">Check</button>
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
      'getDuckDailylogResponse'
    ])
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckDailylogDuckId',
      'updateDuckDailylogPerPage',
      'updateDuckDailylogPage',
      'duckDailylogResponse'
    ]),
    sendDuckId (duckId) {
      this.updateDuckDailylogDuckId(duckId)
      this.duckId = duckId
    },
    sendPerPage (perPage) {
      this.updateDuckDailylogPerPage(perPage)
      this.perPage = perPage
    },
    sendPage (page) {
      this.updateDuckDailylogPage(page)
      this.page = page
    }
  }
}
</script>
