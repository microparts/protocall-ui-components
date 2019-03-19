<template>
  <div>
    <div class="buttons">
      <x-button loading>
        Default
      </x-button>
      <x-button option="primary" loading>
        Primary
      </x-button>
      <x-button option="success" loading>
        Success
      </x-button>
      <x-button option="info" loading>
        Info
      </x-button>
      <x-button option="warning" loading>
        Warning
      </x-button>
      <x-button option="danger" loading>
        Danger
      </x-button>
    </div>
    <br>
    <div class="buttons">
      <x-button option="white" loading>
        White
      </x-button>
      <x-button option="light" loading>
        Light
      </x-button>
      <x-button option="dark" loading>
        Dark
      </x-button>
      <x-button option="black" loading>
        Black
      </x-button>
      <x-button option="text" loading>
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
