<template>
  <div class="root">
    <div class="buttons">
      <badge :hide="hidden">
        <x-button>
          Default
        </x-button>
      </badge>
      <badge :hide="hidden">
        <x-button option="primary">
          Primary
        </x-button>
      </badge>
      <badge option="primary" :hide="hidden">
        <x-button option="success">
          Success
        </x-button>
      </badge>
      <badge option="success" :hide="hidden">
        <x-button option="info">
          Info
        </x-button>
      </badge>
      <badge option="danger" :hide="hidden">
        <x-button option="warning" :hide="hidden" loading>
          Warning
        </x-button>
      </badge>
      <badge option="dark" :hide="hidden">
        <x-button option="danger" :hide="hidden">
          Danger
        </x-button>
      </badge>
    </div>
    <br>
    <div class="buttons">
      <badge option="dark" :hide="hidden">
        <x-button option="white">
          White
        </x-button>
      </badge>
      <badge option="primary" :hide="hidden">
        <x-button option="light">
          Light
        </x-button>
      </badge>
      <badge option="warning" :hide="hidden">
        <x-button option="dark">
          Dark
        </x-button>
      </badge>
      <badge option="danger" :hide="hidden">
        <x-button option="black">
          Black
        </x-button>
      </badge>
      <badge option="dark" :hide="hidden">
        <x-button option="text">
          Text
        </x-button>
      </badge>
    </div>

    <br><br>
    <button @click="hideBadge">show/hide</button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import xButton from '../../components/button/index.vue';
  import Badge from '../../components/badge/index.vue';

  @Component({
    components: { xButton, Badge }
  })
  export default class ButtonDot extends Vue {

    public hidden! = false;

    public hideBadge() {
      this.hidden = !this.hidden;
    }
  }
</script>

<style lang="sass" scoped>
  .root
    margin-top: 15px
  .buttons
    .badge
      display: inline-block
      margin-right: 10px
</style>
