// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import Disabled from './button/disabled.vue';
import Loading from './button/loading.vue';
import Icons from './icon/icons.vue';

storiesOf('Icon', module)
  .add('Icons', () => ({
    components: { Icons },
    template: `<icons/>`,
  }))
