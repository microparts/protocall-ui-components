<template>
  <div>
    <div class="selects">
      <x-select
        :options="arrayOfObjects" 
        :selected="object" 
        @updateOption="methodToRunOnSelect" 
        :placeholder="'Select an Item'">
      </x-select>


      <x-select
        :options="arrayOfObjects"
        class="wide"
        :selected="object" 
        @updateOption="methodToRunOnSelect" 
        :placeholder="'Select an Item'">
      </x-select>

    </div>
    <br>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import xSelect from '../../components/select/index.vue';

export default {
  components: {
    xSelect,
  },
  data() {
    return {
      arrayOfObjects: [
        {
          name: 'One',
        },
        {
          name: 'Two',
        },
        {
          name: 'Three',
        },
      ],
      object: {
        name: 'Object Name',
      }
    }
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  }
}
</script>

<style lang="scss" scoped>
.selects {
  > * {
    margin: 0 5px;
  }

  .wide {
    width: 400px;
  }
}
</style>
