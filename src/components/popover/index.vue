<template>
  <div class="popover" :class="position">
    <slot />
    <button
      @click="handleClose"
      class="popover__close-button x-icon-close" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class XPopover extends Vue {

  @Prop({ type: String, default: 'BL' })
  public readonly position!: string;

  handleClose() {
    this.$emit('close');
  }
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
