<template>
  <div>
    <button @click="authProfileResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
  },
  computed: {
    ...mapGetters('auth', [
      'getAuthProfileResponse'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'authProfileResponse'
    ])
  }
}
</script>
