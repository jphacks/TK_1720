<template>
  <div>
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>tel</p>
    <input v-model="tel" @input="sendTel(tel)" />
    <button @click="authProfileEditResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      name: null,
      tel: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getAuthProfileEditResponse',
      'getAuthProfileResponse'
    ])
  },
  watch: {
    getAuthProfileEditResponse (data) {
      if (data.message === 'ok') {
        alert('ok')
        window.location.href = '/profile'
      } else {
        alert('error')
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'updateAuthProfileEditName',
      'updateAuthProfileEditTel',
      'authProfileEditResponse'
    ]),
    sendName (name) {
      this.updateAuthProfileEditName(name)
      this.name = name
    },
    sendTel (tel) {
      this.updateAuthProfileEditTel(tel)
      this.tel = tel
    }
  }
}
</script>
