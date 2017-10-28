<!-- status -->
<template>
  <div>
    <div v-for="duck in list">
      <h1>{{ duck.name }}</h1>
      <h4>
        <span v-if="duck.status">in the bath</span>
        <span v-else>not in the bath</span>
      </h4>
      <router-link :to="{ name: 'DuckDetail', params: { id: duck.id}}">watch!</router-link>
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
