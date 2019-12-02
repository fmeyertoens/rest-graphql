<template>
  <div class="home mx-auto">
    <Info/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Info from '@/components/Info.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Info,
  },
});
</script>
