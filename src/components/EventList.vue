<template>
  <ul>
    <li v-for="event in events" :key="event.title">
      {{ event.title }} - {{ event.description }} - {{ event.price }} €
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    events: {
      type: Array as PropType<Array<{ title: string; description: string; price: number }>>,
      required: true,
    },
  },
});
</script>
