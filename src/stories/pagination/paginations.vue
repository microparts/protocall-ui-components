<template>
  <div>
    <div class="selects">

      <x-pagination :totalPage="10" @btnClick="goToFunction"></x-pagination>
      <br />
      <x-pagination :totalPage="15" :withNextPrev="false"></x-pagination>
      <br />
      <x-pagination :totalPage="20" :myData="'myname'" @btnClick="goToFuncWithData"></x-pagination>
      <br />
      <x-pagination :totalPage="20" :myData="['myname', 'myemail']" @btnClick="goToFuncWithMultipleData"></x-pagination>

    </div>
    <br>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import xPagination from '../../components/pagination/index.vue';

export default {
  components: {
    xPagination,
  },
  data() {
    return {
    }
  },
  methods: {
    goToFunction(n)
    {
      console.log(n);
    },
    goToFuncWithData(n, data)
    {
      console.log(n, data);
    },
    goToFuncWithMultipleData(n, data)
    {
      console.log(n, data[0], data[1]);
    }      
  }
}
</script>

<style lang="scss" scoped>
.selects {
  
}
</style>
