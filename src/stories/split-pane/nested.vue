<template>
  <div class="container">
    <split-pane>
      <template slot="left">
        A
      </template>
      <template slot="right">
        <split-pane :default="30" :min="30" :max="60" type="horizontal">
          <template slot="left">
            B
          </template>
          <template slot="right">
            C
          </template>
        </split-pane>
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
  export default class Nested extends Vue {

  }
</script>

<style lang="sass" scoped>
  .container
    height: 100vh
</style>
