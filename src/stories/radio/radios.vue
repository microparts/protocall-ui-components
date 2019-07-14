<template>
  <div>
    <div class="checkboxes">
      <x-radio
        name="test"
        v-model="radioValue"
        label="radio button 1" />
      <br/>
      <x-radio
        name="test"
        v-model="radioValue"
        label="radio button 2" />
      <br/>
      <x-radio
        name="test2"
        disabled
        v-model="radioValue2"
        label="radio button disabled 3" />
      <br/>
      <x-radio
        name="test2"
        disabled
        v-model="radioValue2"
        label="radio button disabled 4" />

    </div>
    <br>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import xRadio from '../../components/radio/index.vue';

  @Component({
    components: { xRadio }
  })
  export default class Checkbox extends Vue {
    radioValue = 'two';
    radioValue2 = 'radio button disabled 4';
    
  }
</script>

<style lang="scss" scoped>
</style>
