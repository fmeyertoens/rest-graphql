<template>
  <ul>
    <li v-for="event in events">
      {{event.title}} - {{event.description}} - {{event.price}} €
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    events: {
      required: true
    }
  }
});
</script>
