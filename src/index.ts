import { VueConstructor } from 'vue';
import SplitPane from './components/split-pane.vue';

export default {
  install (Vue: VueConstructor) {
    Vue.component('split-pane', SplitPane);
  },
  SplitPane,
}
