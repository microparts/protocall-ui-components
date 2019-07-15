import Vue from 'vue';
import XBadge from '../components/badge/index.vue';
import XButton from '../components/button/index.vue';
import XCheckbox from '../components/checkbox/index.vue';
import XIcon from '../components/icon/index.vue';
import XInfoBadge from '../components/infoBadge/index.vue';
import XInput from '../components/input/index.vue';
import XInputSearch from '../components/inputSearch/index.vue';
import XRadio from '../components/radio/index.vue';
import SplitPane from '../components/split-pane/index.vue';
import XTextarea from '../components/textarea/index.vue';
import XTooltip from '../components/tooltip/index.js';

const Components = {
  SplitPane,
  XBadge,
  XButton,
  XCheckbox,
  XIcon,
  XInfoBadge,
  XInput,
  XInputSearch,
  XRadio,
  XTextarea,
  XTooltip,
};

export { 
  XBadge,
  XButton,
  XCheckbox,
  XIcon,
  XInfoBadge,
  XInput,
  XInputSearch,
  XRadio,
  XTextarea,
  XTooltip,
};

Vue.component('split-pane', SplitPane);

// Object.keys(Components).forEach(name => {
//   // @ts-ignore
//   Vue.component(name, Components[name]);
// });

export default Components;
