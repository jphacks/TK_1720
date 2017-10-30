<!-- status -->
<template>
  <div class="all">
    <div class="container">
      <div class="duck" v-for="duck in list">
        <router-link :to="{ name: 'DuckDetail', params: { id: duck.id}}">
          <div class="duck-content">
            <img class="duck-image" src="../../assets/duck.png" alt="duck image">
            <h1>{{ duck.name }}</h1>
            <h4>
              <span class="in" v-if="duck.status">入浴中</span>
              <span v-else>入浴していません</span>
            </h4>
          </div>
        </router-link>
      </div>
      <div class="button">
        <router-link :to="{ name: 'CreateDuck'}"><button>Duckを登録</button></router-link>
        <router-link :to="{ name: 'RegisterDuck'}"><button>Duckを追加</button></router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .all {
    width: 100%;
    height: 100vh;
    background-color: #fcf8e3;
    padding-top: 150px;
  }
  .container {
    margin-left: 200px;
  }

  .duck {
    background-color: #f6f6f6;
    border-radius: 4px;
    box-shadow: 0px 2px 4px #ccc;
    margin: 0 200px 15px 0;
    transition: 0.3s;
  }

  .button {
  }

  router-link {
    display: block;
  }

  .duck-content {
    padding: 15px 30px;
  }

  .duck-image {
    float: left;
    margin-right: 30px;
    width: 150px;
  }

  h1, h4 {
    color: #555;
  }

  .in {
    background-color: #ffe137;
    border-radius: 2px;
    padding: 5px 10px;
  }

  .duck:hover {
    background-color: #f2f2f2;
    box-shadow: none;
  }

  button {
    background-color: white;
    border: none;
    border-radius: 4px;
    color: orange;
    display: inline-block;
    font-size: 14px;
    margin: 10px auto;
    padding: 10px 40px;
    text-decoration: none;
    width: 200px;
    cursor: pointer;
  }
</style>
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
      this.list = data
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
