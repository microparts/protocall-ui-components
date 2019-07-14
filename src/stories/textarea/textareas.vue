<template>
  <div>
    <div class="checkboxes">
      <x-textarea
        placeholder="type something..."
        :rows="3"
        label="Example of textarea"
        v-model="value" />
      <br/>
      <x-textarea
        placeholder="type something..."
        :rows="3"
        label="Textarea with error"
        error="text is too short"
        v-model="value" />
      <br/>
      <x-textarea
        label="Example of disabled textarea"
        disabled
        v-model="value2" />

    </div>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import xTextarea from '../../components/textarea/index.vue';

@Component({
  components: { xTextarea },
})
export default class Textareas extends Vue {
  value = 'textarea content';
  value2 = 'disabled textarea content';

}
</script>

<style lang="scss" scoped>
</style>
