<template>
  <div>
    <p>uniqueId</p>
    <input v-model="uniqueId" @input="sendUniqueId(uniqueId)" />
    <p>password</p>
    <input v-model="password" @input="sendPassword(password)" />
    <button @click="duckRegisterResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      uniqueId: null,
      password: null
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckRegisterResponse'
    ])
  },
  watch: {
    getDuckRegisterResponse (data) {
      if (data.message === 'OK') {
        window.location.href = '/duck'
      } else {
        alert('通信エラー')
      }
    }
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckRegisterUniqueId',
      'updateDuckRegisterPassword',
      'duckRegisterResponse'
    ]),
    sendUniqueId (uniqueId) {
      this.updateDuckRegisterUniqueId(uniqueId)
      this.uniqueId = uniqueId
    },
    sendPassword (password) {
      this.updateDuckRegisterPassword(password)
      this.password = password
    }
  }
}
</script>
