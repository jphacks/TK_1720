<template>
  <div class="wrap">
    <div class="container">
      <h1>DACKを追加</h1>
      <p　class="params">uniqueId</p>
      <input v-model="uniqueId" @input="sendUniqueId(uniqueId)" />
      <p　class="params">postalCode</p>
      <input v-model="postalCode" @input="sendPostalCode(postalCode)" />
      <p　class="params">address</p>
      <input v-model="address" @input="sendAddress(address)" />
      <p　class="params">password</p>
      <input v-model="password" @input="sendPassword(password)" />
      <p　class="params">name</p>
      <input v-model="name" @input="sendName(name)" />
      <button @click="duckCreateResponse">Check</button>
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
  height: 100vh;
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
      postalCode: null,
      address: null,
      password: null,
      name: null
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckCreateResponse'
    ])
  },
  watch: {
    getDuckCreateResponse (data) {
      if (data.message === 'OK') {
        window.location.href = '/duck'
      } else {
        alert('通信エラー')
      }
    }
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckCreateUniqueId',
      'updateDuckCreatePostalCode',
      'updateDuckCreateAddress',
      'updateDuckCreatePassword',
      'updateDuckCreateName',
      'duckCreateResponse'
    ]),
    sendUniqueId (uniqueId) {
      this.updateDuckCreateUniqueId(uniqueId)
      this.uniqueId = uniqueId
    },
    sendPostalCode (postalCode) {
      this.updateDuckCreatePostalCode(postalCode)
      this.postalCode = postalCode
    },
    sendAddress (address) {
      this.updateDuckCreateAddress(address)
      this.address = address
    },
    sendPassword (password) {
      this.updateDuckCreatePassword(password)
      this.password = password
    },
    sendName (name) {
      this.updateDuckCreateName(name)
      this.name = name
    }
  }
}
</script>
