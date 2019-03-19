// import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import ButtonDot from './badge/buttons-dot.vue';
import ButtonContent from './badge/buttons-content.vue';

storiesOf('Badge', module)
  .add('Buttons with simple dots', () => ({
    components: { ButtonDot },
    template: `<button-dot/>`
  }))
  .add('Buttons with content', () => ({
    components: { ButtonContent },
    template: `<button-content/>`
  }))
;
