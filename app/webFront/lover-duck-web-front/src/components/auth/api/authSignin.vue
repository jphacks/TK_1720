<template>
  <div class="signin">
    <div class="alert">
      JPHACKS 審査員のみなさんへ<br />
      mail: test@gmail.com <br />
      password: test, <br />
      でsigninしてみてください。<br />
    </div>
    <div class="container">
      <h1>ログイン</h1>
      <p class="params">メールアドレス</p>
      <input v-model="mail" @input="sendMail(mail)" />
      <p class="params">パスワード</p>
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
  padding-top: 100px;
  display: block;
  width: 30%;
  text-align: center;
  margin: 0 auto;
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
  margin: 60px auto;
  padding: 10px 40px;
  text-decoration: none;
  width: 200px;
}

.params {
  text-align: left;
  margin: 0 10%;
}

.alert {
  display: inline-block;
  position: fixed;
  bottom:0;
  right:0;
  font-size: 5px;
  text-align: center;
  padding: 50px;
  margin: 10px;
  background-color: #fcf8e3!important;
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
