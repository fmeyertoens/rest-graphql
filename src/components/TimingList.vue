<template>
  <table v-if="timings.length > 0">
    <thead>
      <tr>
        <th>Received</th>
        <th>Parsed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="timing in timings">
        <td>{{timing.timeToReceive.toFixed(2)}}</td>
        <td>{{timing.timeToParse.toFixed(2)}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    timings: {
      required: true
    }
  }
});
</script>
<style lang="scss" scoped>
table {
  border-collapse: collapse;
}

th, td {
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
}

th {
  text-align: center;
}

td {
  text-align: end;
}

tbody tr:nth-child(odd) {
  background: #eee;
}
</style>