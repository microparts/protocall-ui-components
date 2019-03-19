<template>
  <div class="root">
    <div class="buttons">
      <badge value="hot" :max="99">
        <x-button>
          Default
        </x-button>
      </badge>
      <badge :value="1000" :max="99">
        <x-button option="primary">
          Primary
        </x-button>
      </badge>
      <badge option="primary" value="new" :max="99">
        <x-button option="success">
          Success
        </x-button>
      </badge>
      <badge option="success" :value="1000" :max="9999">
        <x-button option="info">
          Info
        </x-button>
      </badge>
      <badge option="danger" :value="10" :max="9">
        <x-button option="warning">
          Warning
        </x-button>
      </badge>
      <badge option="dark" value="upd" :max="99">
        <x-button option="danger">
          Danger
        </x-button>
      </badge>
    </div>
    <br>
    <div class="buttons">
      <badge option="dark" :value="1000" :max="99">
        <x-button option="white">
          White
        </x-button>
      </badge>
      <badge option="primary" :value="1000" :max="99">
        <x-button option="light">
          Light
        </x-button>
      </badge>
      <badge option="warning" :value="1000" :max="99">
        <x-button option="dark">
          Dark
        </x-button>
      </badge>
      <badge option="danger" :value="1000" :max="99">
        <x-button option="black">
          Black
        </x-button>
      </badge>
      <badge option="dark" value="1000" :max="99">
        <x-button option="text">
          Text
        </x-button>
      </badge>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import xButton from '../../components/button/index.vue';
  import Badge from '../../components/badge/index.vue';

  @Component({
    components: { xButton, Badge }
  })
  export default class ButtonContent extends Vue {

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
