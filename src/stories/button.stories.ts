// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import Color from './button/colors.vue';
import Disabled from './button/disabled.vue';
import Loading from './button/loading.vue';

storiesOf('Button', module)
  .add('Colors', () => ({
    components: { Color },
    template: `<color/>`
  }))
  .add('Disabled', () => ({
    components: { Disabled },
    template: `<disabled/>`
  }))
  .add('Loading', () => ({
    components: { Loading },
    template: `<loading/>`
  }))
;
