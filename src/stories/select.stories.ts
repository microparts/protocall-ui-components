// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import SelectStory from './select/selects.vue';

storiesOf('Select', module)
  .add('Selects', () => ({
    components: { SelectStory },
    template: `<select-story/>`,
  }))
