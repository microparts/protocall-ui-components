// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import Disabled from './button/disabled.vue';
import Loading from './button/loading.vue';
import InputText from './input/text.vue';

storiesOf('Input', module)
  .add('InputText', () => ({
    components: { InputText },
    template: `<input-text/>`,
  }));
