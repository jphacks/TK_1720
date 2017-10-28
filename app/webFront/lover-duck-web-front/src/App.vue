<template>
  <div id="app">
    <router-view></router-view>
    <simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
    </simplert>
  </div>
</template>

<script>
import Simplert from 'vue2-simplert'

export default {
  name: 'app',
  components: {
    Simplert
  },
  computed: {
    // use a computed property to get the value from the store
    errorMessage () { return this.$store.state.errorMessage }
  },
  methods: {
    openInfoAlert (title, message) {
      let obj = {
        title: title,
        message: message,
        type: 'info',
        hideAllButton: true
      }
      this.$refs.simplert.openSimplert(obj)
    },
    openErrorAlert (title, message) {
      let obj = {
        title: title,
        message: message,
        type: 'error',
        hideAllButton: true
      }
      this.$refs.simplert.openSimplert(obj)
    }
  },
  created: function () {
  },
  mounted: function () {
  },
  watch: {
    errorMessage (message) {
      if (message !== '') {
        this.openErrorAlert('ERROR', message, true)
        this.$store.dispatch('errorReset')
      }
    }
  }
}
</script>
<style lang="stylus">
  @require './stylus/main'
</style>
