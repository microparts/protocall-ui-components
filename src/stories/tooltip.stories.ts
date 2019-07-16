import { storiesOf } from '@storybook/vue'
import Tooltips from './tooltip/tooltips.vue';

storiesOf('Tooltip', module)
  .add('Tooltips', () => ({
    components: { Tooltips },
    template: `<tooltips/>`,
  }))
