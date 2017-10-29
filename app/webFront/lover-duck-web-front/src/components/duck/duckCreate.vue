<template>
  <div>
    <p>uniqueId</p>
    <input v-model="uniqueId" @input="sendUniqueId(uniqueId)" />
    <p>postalCode</p>
    <input v-model="postalCode" @input="sendPostalCode(postalCode)" />
    <p>address</p>
    <input v-model="address" @input="sendAddress(address)" />
    <p>password</p>
    <input v-model="password" @input="sendPassword(password)" />
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <button @click="duckCreateResponse">Check</button>
  </div>
</template>
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
