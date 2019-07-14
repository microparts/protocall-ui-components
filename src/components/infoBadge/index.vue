<template>
  <div class="x-info-badge" :style="colorStyles">
    <span
      class="x-info-badge__background"
      :style="{ backgroundColor: color }" />
    <template v-if="text">{{text}}</template>
    <slot />
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
  export default class xInput extends Vue {

  @Prop(String)
  public readonly text!: string;

  @Prop({ type: String, default: '#6e6e6e' })
  public readonly color!: string;

  get colorStyles() {
    return {
      color: this.color,
    }
  }

};
</script>

<style lang="scss" scoped src="./style.scss"></style>
