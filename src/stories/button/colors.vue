<template>
  <div>
    <div class="buttons">
      <x-button>
        Default
      </x-button>
      <x-button color="primary">
        Primary
      </x-button>
      <x-button color="success">
        Success
      </x-button>
      <x-button color="info">
        Info
      </x-button>
      <x-button color="warning">
        Warning
      </x-button>
      <x-button color="danger">
        Danger
      </x-button>
    </div>
    <br>
    <div class="buttons">
      <x-button color="white">
        White
      </x-button>
      <x-button color="light">
        Light
      </x-button>
      <x-button color="dark">
        Dark
      </x-button>
      <x-button color="black">
        Black
      </x-button>
      <x-button color="text">
        Text
      </x-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import xButton from '../../components/button/index.vue';

  @Component({
    components: { xButton }
  })
  export default class Color extends Vue {

  }
</script>

<style lang="sass" scoped>
  .buttons
    .button
      display: inline-block
      margin-right: 10px
</style>
