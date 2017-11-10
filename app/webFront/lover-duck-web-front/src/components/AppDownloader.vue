<template>
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-container class="dack">
            <drop
              class="drop"
              @drop="handleDrop">
              <v-layout row wrap>
                <v-flex xs4 v-for="img in imgs" :key="imgs.indexOf(img)">
                  <drag
                  :transferData="imgs.indexOf(img)"
                  :key="imgs.indexOf(img)"
                  class="list-img"
                  >
                    <img v-bind:src="img"/>
                  </drag>
                </v-flex>
              </v-layout>
            </drop>
          </v-container>
        </v-flex>
        <v-flex xs6>
          <drop
          @drop="removeItems"
          >
            <v-container elevation-4 class="app">
              <v-list two-line class="list">
                <template v-for="item in items">
                  <v-subheader v-if="item.header">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
                  <v-list-tile avatar v-else v-bind:key="item.title" @click="">
                    <v-list-tile-avatar>
                      <drag
                        :transferData="{img: item.avatar, text: item.title}"
                        :key="item.avater">
                        <img v-bind:src="item.avatar">
                      </drag>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-container>
          </drop>
        </v-flex>
      </v-layout>
    </v-container>
    <simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
    </simplert>
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
  padding: 48% 28%;
}
.list {
}
.app {
  min-height: 80vh;
  background-color: white;
}
.drag {
		display: inline-block;
	}
.drop {
  min-width: 24vw;
  max-width: 24vw;
  min-height: 7vw;
	height: auto;
  border: rgba(150,150,150,.5) dashed 1rem;
  border-radius: 10px;
}
.list-img {
  margin: 3px!important;
}
</style>

<script>
import { Drag, Drop } from 'vue-drag-drop'
import Simplert from 'vue2-simplert'

export default {
  components: {
    Drag,
    Drop,
    Simplert
  },
  data () {
    return {
      items: [
        { header: 'アプリ一覧' },
        { divider: true, inset: true },
        { avatar: '../../static/radio.svg', title: 'ラジオアプリ', subtitle: "<span class='grey--text text--darken-2'>入浴中にダックからラジオを流すことができます。</span>" },
        { divider: true, inset: true },
        { avatar: '../../static/math.svg', title: '子供のための計算アプリ', subtitle: "<span class='grey--text text--darken-2'>お風呂に入りながら算数の勉強をすることができます。</span>" }
      ],
      imgs: []
    }
  },
  methods: {
    handleDrop (img) {
      try {
        if (this.imgs.length < 6) {
          this.imgs.push(img.img)
        }
        let obj = {
          title: 'App追加',
          message: img.text + 'を追加しました',
          type: 'success',
          hideAllButton: true
        }
        this.$refs.simplert.openSimplert(obj)
      } catch (e) {
        return
      }
    },
    removeItems (index) {
      this.imgs.splice(index, 1)
    }
  }
}
</script>
