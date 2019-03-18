import Vue from 'vue';
import SplitPane from '../components/split-pane/split-pane.vue';

const Components = {
  SplitPane,
};

Vue.component('split-pane', SplitPane);

// Object.keys(Components).forEach(name => {
//   // @ts-ignore
//   Vue.component(name, Components[name]);
// });

export default Components;
