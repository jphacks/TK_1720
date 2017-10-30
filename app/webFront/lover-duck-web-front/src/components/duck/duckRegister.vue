<template>
  <div class="wrap">
    <div class="container">
      <h1>Duckを登録</h1>
      <p　class="params">uniqueId</p>
      <input v-model="uniqueId" @input="sendUniqueId(uniqueId)" />
      <p　class="params">password</p>
      <input v-model="password" @input="sendPassword(password)" />
      <button @click="duckRegisterResponse">Check</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding-top: 100px;
  display: block;
  width: 30%;
  text-align: center;
  margin: 0 auto;
}

.params {
  text-align: left;
  margin: 0 10%;
}

.wrap {
  background-color: #fcf8e3!important;
  min-height: 100vh;
  height: auto;
  padding-bottom: 100px;
}
h1 {
  color: #111111;
  text-align: center;
  text-shadow: 1px 1px 10px orange 0.5;
}

p {
  font-weight: bold;
  margin: 8px auto 0;
}

input {
  border: none;
  border-radius: 4px;
  height: 30px;
  margin-bottom: 20px;
  width: 300px;
}

button {
  background-color: white;
  border: none;
  border-radius: 4px;
  color: orange;
  display: block;
  font-size: 14px;
  margin: 60px auto;
  padding: 10px 40px;
  text-decoration: none;
  width: 200px;
}
</style>
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
