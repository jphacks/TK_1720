<!-- status -->
<template>
  <div>
    <div v-for="duck in list">
      <h1>{{ duck.name }}</h1>
      <h4>
        <span v-if="duck.status">入浴中</span>
        <span v-else>現在入浴していません</span>
      </h4>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckListResponse'
    ])
  },
  watch: {
    getDuckListResponse (data) {
      this.list = data.ducks
    }
  },
  methods: {
    ...mapActions('duck', [
      'duckListResponse'
    ])
  },
  created () {
    // do something after creating vue instance
    this.duckListResponse()
  }
}
</script>
