<template>
  <div>
    <p>mail</p>
    <input v-model="mail" @input="sendMail(mail)" />
    <p>password</p>
    <input v-model="password" @input="sendPassword(password)" />
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>tel</p>
    <input v-model="tel" @input="sendTel(tel)" />
    <button @click="authSignupResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      mail: null,
      password: null,
      name: null,
      tel: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getAuthSignupResponse'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'updateAuthSignupMail',
      'updateAuthSignupPassword',
      'updateAuthSignupName',
      'updateAuthSignupTel',
      'authSignupResponse'
    ]),
    sendMail (mail) {
      this.updateAuthSignupMail(mail)
      this.mail = mail
    },
    sendPassword (password) {
      this.updateAuthSignupPassword(password)
      this.password = password
    },
    sendName (name) {
      this.updateAuthSignupName(name)
      this.name = name
    },
    sendTel (tel) {
      this.updateAuthSignupTel(tel)
      this.tel = tel
    }
  }
}
</script>
