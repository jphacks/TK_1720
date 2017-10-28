<template>
  <div>
    <p>duckId</p>
    <input v-model="duckId" @input="sendDuckId(duckId)" />
    <button @click="duckDetailResponse">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      duckId: null
    }
  },
  computed: {
    ...mapGetters('duck', [
      'getDuckDetailResponse'
    ])
  },
  methods: {
    ...mapActions('duck', [
      'updateDuckDetailDuckId',
      'duckDetailResponse'
    ]),
    sendDuckId (duckId) {
      this.updateDuckDetailDuckId(duckId)
      this.duckId = duckId
    }
  }
}
</script>
