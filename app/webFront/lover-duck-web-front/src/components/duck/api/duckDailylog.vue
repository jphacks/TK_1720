<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>入浴時間</th>
          <th>退室時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in list">
          <th scope="row">{{ list.indexOf(log) + 1 }}</th>
          <td>{{ log.startAt }}</td>
          <td>{{ log.endAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
td {
  padding: 0 20px;
}
</style>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: ['id'],
  data () {
    return {
      duckId: null,
      perPage: 5,
      page: 1,
      list: []
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckDailylogResponse'
    ])
  },
  watch: {
    getDuckDailylogResponse (data) {
      this.list = data.dailyLog
    }
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
  },
  created () {
    // do something after creating vue instance
    this.sendDuckId(this.id)
    this.sendPerPage(this.perPage)
    this.sendPage(this.page)
    this.duckDailylogResponse()
  }
}
</script>
