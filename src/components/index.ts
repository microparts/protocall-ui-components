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
import XPagination from '../components/pagination/index.vue';
import XPopover from '../components/pagination/index.vue';
import XSelect from '../components/select/index.vue';

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
  XPagination,
  XPopover,
  XSelect,
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
  XPagination,
  XPopover,
  XSelect,
};

Vue.component('split-pane', SplitPane);

// Object.keys(Components).forEach(name => {
//   // @ts-ignore
//   Vue.component(name, Components[name]);
// });

export default Components;
