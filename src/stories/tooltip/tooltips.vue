<template>
  <div>
    <div class="tooltips">

      <span v-tooltip="'my text'">This text has tooltip</span>

      <span v-tooltip="{ content: 'content' }">Tooltip</span>

    </div>
    <br>
  </div>
</template>

<script>
import Vue from 'vue';
import Tooltip from '../../components/tooltip/index.js';
// import Tooltip from 'vue-directive-tooltip';
// import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';

export default {
  directives: {
    tooltip: Tooltip
  }
}
</script>

<style lang="scss" scoped>
.tooltips {
  > * {
    margin: 0 5px;
  }
}
</style>
