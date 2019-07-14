<template>
  <div>
    <div class="inputs">
      <x-input-search
        v-model="valueOne"
        placeholder="Type anything" />

      <x-input-search
        v-model="valueTwo"
        placeholder="Type anything..." />
     
    </div>
    <br>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import xInputSearch from '../../components/inputSearch/index.vue';

  @Component({
    components: { xInputSearch }
  })
  export default class InputSearch extends Vue {
    valueOne = 'How to create component';
    valueTwo = '';
  }
</script>

<style lang="scss" scoped>
.inputs {
  width: 50%;

  > * {
    margin: 10px 0;
  }
}
    
</style>
