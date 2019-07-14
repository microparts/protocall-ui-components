<template>
  <span :class="classes"></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
  export default class xIcon extends Vue {

  @Prop(String)
  public readonly name!: string;

  get classes() {
    return `x-icon-${this.name}`;
  }

}
</script>

<style lang="scss" src="./style.scss"></style>
