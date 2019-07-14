<template>
  <label class="checkbox__container">
    {{label}}
    <input
      ref="input"
      @click="input"
      :checked="value"
      :disabled="disabled"
      class="checkbox__checkbox"
      type="checkbox">
    <span
      class="checkbox__checkmark"
      :class="checkmarkClass" />
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
  export default class xCheckbox extends Vue {

  @Prop(String)
  public readonly label!: string;

  @Prop(Boolean)
  public readonly value!: boolean;

  @Prop(Boolean)
  public readonly disabled!: boolean;

  get checkmarkClass() {
    return this.value ? 'x-icon-checkbox-on' : 'x-icon-checkbox-off'
  }

  input(event) {
    this.$emit('input', !this.value);
  }

};
</script>

<style lang="scss" scoped src="./style.scss"></style>
