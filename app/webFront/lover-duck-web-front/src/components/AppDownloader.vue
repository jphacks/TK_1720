<template>
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-container>
            <div class="dack">
            </div>
          </v-container>
        </v-flex>
        <v-flex xs6>
          <v-container elevation-4 class="app">
            <v-list two-line class="list">
              <template v-for="item in items">
                <v-subheader v-if="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
                <v-list-tile avatar v-else v-bind:key="item.title" @click="">
                  <v-list-tile-avatar>
                    <img v-bind:src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<style lang="stylus">
  @require '../stylus/main'
</style>
<style scoped>
#inspire {
  background-color: #fcf8e3!important;
}

.dack {
  background-image: url(../assets/duck.svg);
  padding: 50%;
}
.list {
}
.app {
  height: 100%;
  background-color: white;
}
</style>

<script>
export default {
  data () {
    return {
      items: [
        { header: 'アプリ一覧' },
        { divider: true, inset: true },
        { avatar: '../../static/radio.svg', title: 'ラジオアプリ', subtitle: "<span class='grey--text text--darken-2'>入浴中にダックからラジオを流すことができます。</span>" },
        { divider: true, inset: true },
        { avatar: '../../static/math.svg', title: '子供のための計算アプリ', subtitle: "<span class='grey--text text--darken-2'>お風呂に入りながら算数の勉強をすることができます。</span>" }
      ]
    }
  }
}
</script>
