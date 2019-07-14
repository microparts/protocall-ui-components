<template>
  <div>
    <div class="badges">
      <x-info-badge text="draft" />

      <x-info-badge
        color="#ebc715"
        text="badge with very very very long text" />

      <x-info-badge color="#00c27b" text="new" />

      <x-info-badge color="#fb4242">
        not public
      </x-info-badge>

    </div>
    <br>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import xInfoBadge from '../../components/infoBadge/index.vue';

  @Component({
    components: { xInfoBadge }
  })
  export default class InfoBadges extends Vue {
  }
</script>

<style lang="scss" scoped>
.badges {
  > * {
    margin: 0 5px;
  }
}
</style>
