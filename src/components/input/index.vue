<template>
  <div class="x-input">
    <label
      class="x-input__label"
      v-if="label"
      for="id">
      {{label}}
    </label>
    <input
      :value="value"
      @input="input"
      class="x-input__input"
      :class="{ error, 'with-icon': !!icon }"
      v-on="listeners"
      v-bind="attrs" />
    <span v-if="icon" class="x-input__icon" :class="`x-icon-${icon}`" />
    <span
      v-if="error"
      class="x-input__error">
      {{error}}
    </span>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
  export default class XInput extends Vue {

  @Prop(String)
  public readonly label!: string;

  @Prop(String)
  public readonly value!: string;

  @Prop(String)
  public readonly error!: string;

  @Prop(String)
  public readonly icon!: string;
  // inheritAttrs: false,

  get listeners() {
    const { input, ...listeners } = this.$listeners;
    return listeners;
  }

  get attrs() {
    const { label, error, icon, ...attrs } = this.$attrs;
    console.log('attrs', icon, this.$attrs);
    return attrs;
  }

  input(event: any) {
    this.$emit('input', event.target.value);
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
