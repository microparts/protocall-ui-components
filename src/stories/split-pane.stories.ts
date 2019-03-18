// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import Default from './split-pane/default.vue';
import Nested from './split-pane/nested.vue';

storiesOf('SplitPane', module)
  .add('Vertical usage', () => ({
    components: { Default },
    template: `<default/>`
  }))
  .add('Nested usage', () => ({
    components: { Nested },
    template: `<nested/>`
  }))
;
