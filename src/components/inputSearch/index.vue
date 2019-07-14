<template>
  <div class="x-input-search">
    <input
      :value="value"
      @input="input"
      class="x-input-search__input"
      v-on="listeners"
      v-bind="attrs" />
    <span class="x-input-search__icon x-icon-search" />
    <span
      v-if="showClearButton"
      class="x-input-search__clear x-icon-close"
      @click="handleClear" />
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
  export default class xInput extends Vue {

  @Prop(String)
  public readonly label!: string;

  @Prop(String)
  public readonly value!: string;


  // inheritAttrs: false,
  
  get listeners() {
    const { input, ...listeners } = this.$listeners;
    return listeners;
  }

  get showClearButton() {
    return !!this.value;
  }

  get attrs() {
    const { label, ...attrs } = this.$attrs;
    console.log('attrs', this.$attrs);
    return attrs;
  }

  handleClear() {
    this.$emit('input', '');
  }

  input(event) {
    this.$emit('input', event.target.value);
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
