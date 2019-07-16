import { storiesOf } from '@storybook/vue'
import PopoverStory from './popover/popovers.vue';

storiesOf('Popover', module)
  .add('Popovers', () => ({
    components: { PopoverStory },
    template: `<popover-story/>`,
  }))
