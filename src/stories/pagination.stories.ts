import { storiesOf } from '@storybook/vue'
import PaginationStory from './pagination/paginations.vue';

storiesOf('Pagination', module)
  .add('Paginations', () => ({
    components: { PaginationStory },
    template: `<pagination-story/>`,
  }))
