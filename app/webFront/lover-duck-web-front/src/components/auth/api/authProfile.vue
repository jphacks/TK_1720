<template>
  <div>
    <div v-if="toggle">
      <h1>{{ getAuthProfileResponse.name }}</h1>
      <h1>{{ getAuthProfileResponse.mail }}</h1>
      <h1>{{ getAuthProfileResponse.tel }}</h1>
    </div>
    <router-link :to="{ name: 'ProfileEdit'}"><button>EDIT</button></router-link>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      toggle: false
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getAuthProfileResponse'
    ])
  },
  watch: {
    getAuthProfileResponse (data) {
      this.toggle = true
    }
  },
  methods: {
    ...mapActions('auth', [
      'authProfileResponse'
    ])
  },
  created () {
    // do something after creating vue instance
    this.authProfileResponse()
  }
}
</script>
