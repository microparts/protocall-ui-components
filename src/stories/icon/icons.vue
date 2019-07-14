<template>
  <div>
    <div class="iconss">
      <x-icon name="check" />

      <x-icon class="red" name="info" />

      <x-icon class="big" name="phone" />

      <span class="x-icon-restore" />
    </div>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import xIcon from '../../components/icon/index.vue';

@Component({
  components: { xIcon },
})
export default class Icon extends Vue {

}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}

.big {
  font-size: 24px;

  &:hover {
    color: blue;
  }
}
</style>
