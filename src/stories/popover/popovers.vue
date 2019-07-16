<template>
  <div>
    <div class="selects">
      <x-popover
        v-if="showFirst"
        @close="handleCloseFirst">
        Default popover
      </x-popover>

      <x-popover
        position="TR">
        Top Right popover
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate at animi placeat quam dolorum provident hic ipsa ducimus eveniet!
      </x-popover>

      <x-popover
        position="TL">
        Top Left popover
      </x-popover>

      <x-popover
        position="BR">
        Bottom Right popover
      </x-popover>

    </div>
    <br>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import xPopover from '../../components/popover/index.vue';

export default {
  components: {
    xPopover,
  },
  data() {
    return {
      showFirst: true,
    };
  },
  methods: {
    handleCloseFirst() {
      this.showFirst = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.popovers {
  
}
</style>
