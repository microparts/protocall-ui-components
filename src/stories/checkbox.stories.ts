// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import CheckboxStory from './checkbox/checkboxes.vue';

storiesOf('Checkbox', module)
  .add('Checkboxes', () => ({
    components: { CheckboxStory },
    template: `<checkbox-story/>`,
  }))
