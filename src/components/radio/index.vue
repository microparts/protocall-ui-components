<template>
  <label class="radio__container">
    <input type="radio"
      :value="label"
      :name="name"
      :disabled="disabled"
      v-model="radioButtonValue">
    <span>{{ label }}</span>
    <span
      class="radio__icon"
      :class="radioIconClass" />
  </label>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class xRadio extends Vue {
  
    @Prop(String)
    public readonly label!: string;

    @Prop(String)
    public readonly name!: string;

    @Prop(String)
    public value!: string;

    @Prop(Boolean)
    public readonly disabled!: boolean;

    get radioIconClass() {
      return this.value === this.label ? 'x-icon-radio-on' : 'x-icon-radio-off'
    }

    get radioButtonValue() {
      return this.value
    }

    set radioButtonValue(event) {
      this.$emit('input', this.label)
    }

    input(event) {
      this.$emit('input', !this.value);
    }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
