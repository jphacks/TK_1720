<template>
  <div>
    <p>mail</p>
    <input v-model="mail" @input="sendMail(mail)" />
    <p>password</p>
    <input v-model="password" @input="sendPassword(password)" />
    <button @click="authSigninResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      mail: null,
      password: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getAuthSigninResponse'
    ])
  },
  watch: {
    getAuthSigninResponse (data) {
      if (data.accessToken) {
        window.location.href = '/duck'
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'updateAuthSigninMail',
      'updateAuthSigninPassword',
      'authSigninResponse'
    ]),
    sendMail (mail) {
      this.updateAuthSigninMail(mail)
      this.mail = mail
    },
    sendPassword (password) {
      this.updateAuthSigninPassword(password)
      this.password = password
    }
  }
}
</script>
