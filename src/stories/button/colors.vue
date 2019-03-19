<template>
  <div>
    <div class="buttons">
      <x-button>
        Default
      </x-button>
      <x-button option="primary">
        Primary
      </x-button>
      <x-button option="success">
        Success
      </x-button>
      <x-button option="info">
        Info
      </x-button>
      <x-button option="warning">
        Warning
      </x-button>
      <x-button option="danger">
        Danger
      </x-button>
    </div>
    <br>
    <div class="buttons">
      <x-button option="white">
        White
      </x-button>
      <x-button option="light">
        Light
      </x-button>
      <x-button option="dark">
        Dark
      </x-button>
      <x-button option="black">
        Black
      </x-button>
      <x-button option="text">
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
