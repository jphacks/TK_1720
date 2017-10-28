import { configure } from '@storybook/vue'

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import Vuetify from 'vuetify'
Vue.use(Vuetify)
Vue.use(Vuex);

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
