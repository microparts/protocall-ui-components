<template>
  <button
    :type="type"
    :class="classList"
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
  export default class xButton extends Vue {

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

    private classList: object = {};

    public created() {
      this.classList = {
        button: true,
        'is-loading': this.loading,
        'is-default': this.option === 'default',
        'is-primary': this.option === 'primary',
        'is-success': this.option === 'success',
        'is-info': this.option === 'info',
        'is-warning': this.option === 'warning',
        'is-danger': this.option === 'danger',
        'is-white': this.option === 'white',
        'is-light': this.option === 'light',
        'is-dark': this.option === 'dark',
        'is-black': this.option === 'black',
        'is-text': this.option === 'text',
      };
    }

    public onClick(e) {
      this.$emit('click', e);
    }
  }
</script>

<style lang="sass" scoped>
  @keyframes spinAround
    from
      transform: rotate(0deg)
    to
      transform: rotate(360deg)

  .button.is-loading
    color: transparent !important
    &::after
      box-sizing: inherit
      left: calc(50% - (1em / 2))
      top: calc(50% - (1em / 2))
      position: absolute
      animation: spinAround .5s infinite linear
      border: 2px solid #dbdbdb
      border-radius: 10px
      border-right-color: transparent
      border-top-color: transparent
      content: ""
      display: block
      height: 1em
      width: 1em

  .button[disabled]
    opacity: .5
    cursor: not-allowed
    &.is-loading
      opacity: 1
      cursor: progress
  .button
    outline: 0
    background-color: #fff
    color: #363636
    cursor: pointer
    justify-content: center
    padding: calc(.375em - 1px) .75em
    text-align: center
    white-space: nowrap
    -webkit-appearance: none
    align-items: center
    border: 1px solid #dbdbdb
    border-radius: 4px
    font-size: 1rem
    line-height: 1.5
    position: relative
    vertical-align: top
    &.is-primary, &.is-link, &.is-info, &.is-success, &.is-danger,
    &.is-warning, &.is-white, &.is-light, &.is-dark, &.is-black, &.is-text
      border-color: transparent
    &.is-primary, &.is-link, &.is-info, &.is-success, &.is-danger
      color: #fff
    &.is-default, &.is-primary, &.is-link, &.is-info, &.is-success, &.is-danger
      &:active
        box-shadow: inset 0 1px 7px rgba(0, 0, 0, 0.05)
    &.is-primary
      background-color: #00d1b2
      &:hover:not(:disabled)
        background-color: #00c4a7
      &:active
        background-color: #00b89c
    &.is-link
      background-color: #3273dc
      &:hover:not(:disabled)
        background-color: #276cda
      &:active
        background-color: #2366d1
    &.is-info
      background-color: #209cee
      &:hover:not(:disabled)
        background-color: #1496ed
      &:active
        background-color: #118fe4
    &.is-success
      background-color: #23d160
      &:hover:not(:disabled)
        background-color: #22c65b
      &:active
        background-color: #20bc56
    &.is-warning
      background-color: #ffdd57
      color: rgba(0, 0, 0, .7)
      &:hover:not(:disabled)
        background-color: #ffdb4a
      &:active
        background-color: #ffd83d
      &.is-loading::after
        border-color: transparent transparent rgba(0, 0, 0, .7) rgba(0, 0, 0, .7) !important
    &.is-danger
      background-color: #ff3860
      &:hover:not(:disabled)
        background-color: #ff2b56
      &:active
        background-color: #ff1f4b
    &.is-white
      background-color: #fff
      color: #0a0a0a
      &:hover:not(:disabled)
        background-color: #f9f9f9
      &:active
        background-color: #f2f2f2
    &.is-light
      background-color: #f5f5f5
      color: #363636
      &:hover:not(:disabled)
        background-color: #eee
      &:active
        background-color: #e8e8e8
    &.is-dark
      background-color: #363636
      color: #f5f5f5
      &:hover:not(:disabled)
        background-color: #2f2f2f
      &:active
        background-color: #292929
    &.is-black
      background-color: #0a0a0a
      color: #fff
      &:hover:not(:disabled)
        background-color: #040404
      &:active
        background-color: #000
    &.is-text
      border-color: transparent
      color: #4a4a4a
      text-decoration: underline
      &:hover:not(:disabled)
        background-color: #f5f5f5
      &:active
        background-color: #e8e8e8
</style>
