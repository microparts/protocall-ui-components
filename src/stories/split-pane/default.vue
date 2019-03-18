<template>
  <div class="container">
    <split-pane>
      <template slot="left">
        Left pane
      </template>
      <template slot="right">
        Right pane
        <br><br>
        Double click to return default position
      </template>
    </split-pane>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SplitPane from '../../components/split-pane/index.vue';

  @Component({
    components: { SplitPane }
  })
  export default class Default extends Vue {

  }
</script>

<style lang="sass" scoped>
  .container
    height: 100vh
</style>
