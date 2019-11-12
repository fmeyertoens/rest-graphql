<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title>REST GraphQL Comparison</v-toolbar-title>
      <template v-slot:extension>
          <v-tabs
            optional
            centered
            fixed-tabs
          >
            <v-tab to="/">Home</v-tab>
            <v-tab to="/events">Events</v-tab>
            <v-tab to="/about">About</v-tab>
          </v-tabs>
      </template>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default {};
</script>

<style lang="scss">
</style>
