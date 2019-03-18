<template>
  <div
    class="split-pane-container clearfix"
    :style="inMove"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
  >
    <div
      :class="['split-pane', 'left', [type]]"
      :style="{ [unitType]: percent + '%'}"
    >
      <slot name="left"/>
    </div>

    <div
      :class="['split-pane', 'resizer', [type]]"
      :style="{ [resizeType]: percent + '%'}"
      @mousedown="onMouseDown"
      @dblclick="onDoubleClick"
    />

    <div
      :class="['split-pane', 'right', [type]]"
      :style="{ [unitType]: 100 - percent + '%'}"
    >
      <slot name="right"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class SplitPane extends Vue {

    @Prop({ type: Number, default: 20 })
    public readonly default!: number;

    @Prop({ type: Number, default: 10 })
    public readonly min!: number;

    @Prop({ type: Number, default: 50 })
    public readonly max!: number;

    @Prop({ type: String, default: 'vertical', validator: SplitPane.typePropertyValidator })
    public readonly type!: string;

    private active: boolean = false;
    private hasMoved: boolean = false;
    private percent: number = this.default;
    private unitType: string = this.type === 'vertical' ? 'width' : 'height';
    private resizeType: string = this.type === 'vertical' ? 'left' : 'top';

    /**
     * Validate incoming type parameter.
     *
     * @param value
     */
    public static typePropertyValidator(value: string): boolean {
      return ['vertical', 'horizontal'].indexOf(value) >= 0
    }

    /**
     * Enable cursor if resizer in move.
     */
    get inMove(): object {
      if (this.active) {
        return {
          cursor: 'col-resize',
          userSelect: 'none',
        };
      }

      return {};
    }

    /**
     * If the user double-clicked on the resizer,
     * his position return to the default value.
     */
    public onDoubleClick() {
      if (! this.hasMoved) {
        this.percent = this.default;
        this.$emit('resize', this.percent, this.min, this.max);
      }
    }

    public onMouseDown() {
      this.active = true;
      this.hasMoved = false;
    }

    public onMouseUp() {
      this.active = false;
    }

    public onMouseMove(e) {
      if (e.buttons === 0 || e.which === 0) {
        this.active = false;
      }

      if (this.active) {
        let offset = 0;
        let target = e.currentTarget;
        if (this.type === 'vertical') {
          while (target) {
            offset += target.offsetLeft;
            target = target.offsetParent;
          }
        } else {
          while (target) {
            offset += target.offsetTop;
            target = target.offsetParent;
          }
        }

        const currentPage = this.type === 'vertical' ? e.pageX : e.pageY;
        const targetOffset = this.type === 'vertical' ? e.currentTarget.offsetWidth : e.currentTarget.offsetHeight;
        const percent = Math.floor(((currentPage - offset) / targetOffset) * 10000) / 100;

        if (this.type === 'vertical' && percent > this.min && (percent < 100 - this.max)) {
          this.percent = percent;
        }

        if (this.type === 'horizontal' && percent > this.min && (percent < this.max)) {
          this.percent = percent;
        }

        this.$emit('resize', this.percent, this.min, this.max);
        this.hasMoved = true
      }
    }
  }
</script>

<style lang="sass" scoped>
  .clearfix:after
    visibility: hidden
    display: block
    font-size: 0
    content: " "
    clear: both
    height: 0

  .split-pane-container
    height: 100%
    position: relative

  .split-pane
    &.vertical
      &.left
        position: absolute
        left: 0
        height: 100%
        padding-right: 3px
        overflow-y: auto
      &.right
        position: absolute
        right: 0
        height: 100%
        padding-left: 3px
        overflow-y: auto
    &.horizontal
      &.left
        position: absolute
        top: 0
        width: 100%
        overflow-y: auto
      &.right
        position: absolute
        bottom: 0
        width: 100%
        padding-top: 3px
        overflow-y: auto
    &.resizer
      -moz-box-sizing: border-box
      -webkit-box-sizing: border-box
      box-sizing: border-box
      background: #000
      position: absolute
      opacity: .2
      z-index: 10
      -moz-background-clip: padding
      -webkit-background-clip: padding
      background-clip: padding-box
      &.horizontal
        height: 11px
        margin: -5px 0
        border-top: 5px solid rgba(255, 255, 255, 0)
        border-bottom: 5px solid rgba(255, 255, 255, 0)
        cursor: row-resize
        width: 100%
      &.vertical
        width: 11px
        height: 100%
        margin-left: -5px
        border-left: 5px solid rgba(255, 255, 255, 0)
        border-right: 5px solid rgba(255, 255, 255, 0)
        cursor: col-resize
</style>
