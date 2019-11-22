<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title>REST GraphQL Comparison</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-wrench</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Settings</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="REST URI" required v-model="restUri"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="GraphQL URI" required v-model="graphqlUri"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="primary darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <template v-slot:extension>
          <v-tabs
            optional
            centered
            fixed-tabs
          >
            <v-tab to="/">Home</v-tab>
            <v-tab to="/events">Events</v-tab>
            <v-tab to="/logs">Logs</v-tab>
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
export default Vue.extend({
  data: () => {
    return {
      dialog: false,
      restUri: 'https://people-api.herokuapp.com/',
      graphqlUri: 'https://event-api-graphql.herokuapp.com/'
    };
  }
});
</script>

<style lang="scss">
</style>
