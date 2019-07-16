// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import RadioStory from './radio/radios.vue';

storiesOf('Radio', module)
  .add('Radios', () => ({
    components: { RadioStory },
    template: `<radio-story/>`,
  }))
