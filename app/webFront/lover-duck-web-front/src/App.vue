<template>
  <div id="app">
    <header-vue></header-vue>
    <router-view></router-view>
    <simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
    </simplert>
  </div>
</template>

<script>
import Simplert from 'vue2-simplert'
import HeaderVue from '@/components/Header'

export default {
  name: 'app',
  components: {
    Simplert,
    HeaderVue
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
<style>
* {
  box-sizing: border-box;
  font-family: '游ゴシック体','Yu Gothic','YuGothic',"Hiragino Sans","Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro W3",'Roboto',Helvetica,Arial,"メイリオ","Meiryo",sans-serif;
  letter-spacing: 1px;
  line-height: 2em;
  text-decoration: none;
}

body {
  margin: 0;
}
</style>
