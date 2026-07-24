<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable">
      <v-toolbar-title>REST GraphQL Comparison</v-toolbar-title>
      <v-spacer />
      <settings-dialog />
      <template #extension>
        <v-tabs class="w-100" optional align-tabs="center" fixed-tabs>
          <v-tab to="/"> Home </v-tab>
          <v-tab to="/events"> Events </v-tab>
          <!-- <v-tab to="/logs">Logs</v-tab> -->
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import SettingsDialog from "@/components/SettingsDialog.vue";
</script>

<style lang="scss"></style>
