<template>
  <div
    :class="{
      badge: true,
      'is-active': !hide,
      [`is-${option}`]: true,
      'has-content': content,
    }"
    :data-badge="content"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Badge extends Vue {

    @Prop({ type: String, default: 'primary' })
    public readonly option!: string;

    @Prop({ type: String | Number, default: '' })
    public readonly value!: string | number;

    @Prop(Number)
    public readonly max!: number;

    @Prop({ type: Boolean, default: false })
    public readonly hide!: boolean;

    /**
     * Get content of badge in depends on the value type.
     */
    get content(): string | number {
      if (typeof this.max === 'number' && typeof this.value === 'number') {
        return this.max < this.value ? `${this.max}+` : this.value;
      }

      return this.value;
    }
  }
</script>

<style lang="sass" scoped>
  .badge
    &.has-content::after
      padding-left: 5px
      padding-right: 5px
    &.is-active
      position: relative
      vertical-align: middle
      display: inline-block
      &::after
        min-width: 1.2rem
        min-height: 1.2rem
        font-size: .75rem
        top: 0
        right: 0
        bottom: auto
        left: auto
        -webkit-transform: translate(50%, -50%)
        transform: translate(50%, -50%)
        background-clip: padding-box
        border-radius: 10px
        box-shadow: 0 0 0 1px #fff
        content: attr(data-badge)
        z-index: 99
        position: absolute
        color: white
        line-height: 1.2rem
        text-align: center
      &.is-primary::after
        background: #00d1b2
      &.is-success::after
        background: #23d160
      &.is-info::after
        background: #209cee
      &.is-warning::after
        background: #ffdd57
        color: black
      &.is-danger::after
        background: #ff3860
      &.is-dark::after
        background: #363636
      &.is-black::after
        background: #0a0a0a

</style>
