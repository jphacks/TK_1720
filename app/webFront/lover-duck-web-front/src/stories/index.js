import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { VBtn } from 'vuetify'
import QButton from '../components/parts/QButton.vue'

storiesOf('Button', module)
  .add('default', () => ({
    components: { VBtn },
    template: '<v-btn>test</v-btn>',
    methods: { action: action('clicked') },
  }))
  .add('custom component', () => ({
    components: { QButton },
    template: '<q-button>test</q-button>',
    methods: {},
  }));
