<template>
  <div>
    <div class="buttons">
      <x-button loading>
        Default
      </x-button>
      <x-button color="primary" loading>
        Primary
      </x-button>
      <x-button color="success" loading>
        Success
      </x-button>
      <x-button color="info" loading>
        Info
      </x-button>
      <x-button color="warning" loading>
        Warning
      </x-button>
      <x-button color="danger" loading>
        Danger
      </x-button>
    </div>
    <br>
    <div class="buttons">
      <x-button color="white" loading>
        White
      </x-button>
      <x-button color="light" loading>
        Light
      </x-button>
      <x-button color="dark" loading>
        Dark
      </x-button>
      <x-button color="black" loading>
        Black
      </x-button>
      <x-button color="text" loading>
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
  export default class Loading extends Vue {

  }
</script>

<style lang="sass" scoped>
  .buttons
    .button
      display: inline-block
      margin-right: 10px
</style>
