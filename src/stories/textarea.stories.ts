// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import TextareaStory from './textarea/textareas.vue';

storiesOf('Textarea', module)
  .add('Textareas', () => ({
    components: { TextareaStory },
    template: `<textarea-story/>`,
  }));
