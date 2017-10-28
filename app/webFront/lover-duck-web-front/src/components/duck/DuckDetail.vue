<template>
  <div>
    <p>
      duck name
    </p>
    <p>
      daily log
    </p>
    <p>
      alert log
    </p>
    <p>
      alert status 変更
    </p>
  </div>
</template>
<script>
import AlertLog from './api/AlertLog'

export default {
  components: {
    AlertLog
  }
}
</script>
<style scoped>
</style>
