<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <v-btn color="primary">Primary</v-btn>
    <q-button></q-button>
  </div>
</template>

<script>
import QButton from '@/components/parts/QButton.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    QButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
