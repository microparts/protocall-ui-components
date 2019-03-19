<template>
  <div>
    <div class="buttons">
      <x-button disabled>
        Default
      </x-button>
      <x-button option="primary" disabled>
        Primary
      </x-button>
      <x-button option="success" disabled>
        Success
      </x-button>
      <x-button option="info" disabled>
        Info
      </x-button>
      <x-button option="warning" disabled>
        Warning
      </x-button>
      <x-button option="danger" disabled>
        Danger
      </x-button>
    </div>
    <br>
    <div class="buttons">
      <x-button option="white" disabled>
        White
      </x-button>
      <x-button option="light" disabled>
        Light
      </x-button>
      <x-button option="dark" disabled>
        Dark
      </x-button>
      <x-button option="black" disabled>
        Black
      </x-button>
      <x-button option="text" disabled>
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
