// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import InputSearchStory from './inputSearch/inputs.vue';

storiesOf('Input search', module)
  .add('inputs', () => ({
    components: { InputSearchStory },
    template: `<input-search-story/>`,
  }));
