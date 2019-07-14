<template>
  <div>
    <div class="inputs">
      <x-input
        value="hello"
        placeholder="type anything" />

      <x-input
        label="Email"
        type="email"
        placeholder="Your email" />

      <x-input
        placeholder="type anything" />

      <x-input
        disabled
        value="hello"
        placeholder="type anything" />

      <x-input
        label="Email"
        value="hello@domain"
        error="Email address is incorrect" />

      <x-input
        value="input with icon"
        icon="email"
        placeholder="type anything" />

      <x-input
        value="input with icon error"
        icon="phone"
        error="wrong phone"
        placeholder="type anything" />
     
    </div>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import xInput from '../../components/input/index.vue';

@Component({
  components: { xInput },
})
export default class InputText extends Vue {

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
