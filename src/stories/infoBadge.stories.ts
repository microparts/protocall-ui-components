import { storiesOf } from '@storybook/vue'
import Badges from './infoBadge/badges.vue';

storiesOf('Info Badge', module)
  .add('Badges', () => ({
    components: { Badges },
    template: `<badges/>`,
  }))
