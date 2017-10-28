<template>
  <div>
    <button @click="duckListResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return 
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckListResponse'
    ])
  },
  methods: {
    ...mapActions('duck', [
      'duckListResponse'
    ])
  }
}
</script>
