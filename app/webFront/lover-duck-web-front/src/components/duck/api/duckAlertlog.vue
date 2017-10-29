<template>
  <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>アラートの発火した時間</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="log in list">
            <th scope="row">{{ list.indexOf(log) + 1 }}</th>
            <td>{{ log.calledAt }}</td>
            <td>
              <span v-if="log.status === 0">対応済み</span>
              <span v-if="log.status === 1">対応中</span>
              <span v-if="log.status === 2">未対応</span>
            </td>
            <td>
              <button @click="updateAlertId(log.alertId)">対応する</button>
            </td>
            <div class="modal" v-if="toggle">
              <div class="white-back">
                <h3>ダックの状態を変更します</h3>
                <div class="button-wrapper">
                  <button class="update-button" @click="updateAlertstatus(0)">対応中</button>
                  <button class="update-button" @click="updateAlertstatus(1)">対応済み</button>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<style scoped>
  .modal  {
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    bottom: 0;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .white-back {
    background-color: white;
    border-radius: 4px;
    height: 250px;
    opacity: 1;
    width: 50%;
  }

  h3 {
    text-align: center;
  }

  .button-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  button {
    background-color: #f2f2f2;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .update-button {
    margin: 20px 40px;
    padding: 20px;
    width: 200px;
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
