<template>
  <div class="signin">
    <div class="container">
      <h1>ログイン</h1>
      <p>メールアドレス</p>
      <input v-model="mail" @input="sendMail(mail)" />
      <p>パスワード</p>
      <input v-model="password" @input="sendPassword(password)" />
      <button @click="authSigninResponse">ログインする</button>
    </div>
  </div>
</template>
<style scoped>
.signin {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../../../assets/background.jpg");
  background-size: cover;
  background-attachment: fixed;
}

.container {
  margin: 0 30%;
  padding-top: 100px;
  width: 40%
}

h1 {
  color: #fff;
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
  margin: 60px 0;
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
