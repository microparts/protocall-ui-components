<template>
  <button
    :type="type"
    :class="{
      button: true,
      'is-loading': loading,
      [`is-${option}`]: true,
      [`size-${size}`]: true,
    }"
    @click="onClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class XButton extends Vue {

  @Prop({ type: String, default: 'button' })
  public readonly type!: string;

  @Prop({ type: String, default: 'normal' })
  public readonly size!: string;

  @Prop({ type: String, default: 'default' })
  public readonly option!: string;

  @Prop(Boolean)
  public readonly disabled!: boolean;

  @Prop(Boolean)
  public readonly loading!: boolean;

  @Prop(Boolean)
  public readonly autofocus!: boolean;

  public onClick(e: any) {
    this.$emit('click', e);
  }
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
