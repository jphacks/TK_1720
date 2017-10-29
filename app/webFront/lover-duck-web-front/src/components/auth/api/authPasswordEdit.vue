<template>
  <div>
    <p>oldPassword</p>
    <input v-model="oldPassword" @input="sendOldPassword(oldPassword)" />
    <p>newPassword</p>
    <input v-model="newPassword" @input="sendNewPassword(newPassword)" />
    <button @click="authPasswordEditResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      oldPassword: null,
      newPassword: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getAuthPasswordEditResponse'
    ])
  },
  watch: {
    getAuthPasswordEditResponse (data) {
      if (data.message === 'ok') {
        window.location.href = '/profile'
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'updateAuthPasswordEditOldPassword',
      'updateAuthPasswordEditNewPassword',
      'authPasswordEditResponse'
    ]),
    sendOldPassword (oldPassword) {
      this.updateAuthPasswordEditOldPassword(oldPassword)
      this.oldPassword = oldPassword
    },
    sendNewPassword (newPassword) {
      this.updateAuthPasswordEditNewPassword(newPassword)
      this.newPassword = newPassword
    }
  }
}
</script>
