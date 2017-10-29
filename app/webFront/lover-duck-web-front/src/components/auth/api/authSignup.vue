<template>
  <div class="signup">
    <div class="container">
      <h1>アカウント登録</h1>
      <p class="params">メールアドレス</p>
      <input v-model="mail" @input="sendMail(mail)" />
      <p class="params">パスワード</p>
      <input v-model="password" @input="sendPassword(password)" />
      <p class="params">氏名</p>
      <input v-model="name" @input="sendName(name)" />
      <p class="params">電話番号</p>
      <input v-model="tel" @input="sendTel(tel)" />
      <button @click="authSignupResponse">登録する</button>
    </div>
  </div>
</template>
<style scoped>
  .signup {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 130vh;
    background-image: url("../../../assets/background.jpg");
    background-size: cover;
    background-attachment: fixed;
  }

  .params {
    text-align: left;
    margin: 0 10%;
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
</style>
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
  watch: {
    getAuthSignupResponse (data) {
      if (data.accessToken) {
        window.location.href = '/duck'
      }
    }
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
