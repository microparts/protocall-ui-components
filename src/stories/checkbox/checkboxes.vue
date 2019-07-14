<template>
  <div>
    <div class="checkboxes">
      <x-checkbox
        v-model="checkbox1"
        label="checkbox" />

      <x-checkbox
        v-model="checkbox2"
        label="checked" />

      <x-checkbox
        v-model="checkbox3"
        disabled
        label="disabled" />

      <x-checkbox
        v-model="checkbox4"
        disabled
        label="disabled checked" />

    </div>
    <br>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import xCheckbox from '../../components/checkbox/index.vue';

  @Component({
    components: { xCheckbox }
  })
  export default class Checkbox extends Vue {
    checkbox1 = false;
    checkbox2 = true;
    checkbox3 = false;
    checkbox4 = true;
  }
</script>

<style lang="scss" scoped>
</style>
