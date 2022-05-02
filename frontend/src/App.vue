<template>
  <v-app :style="{ backgroundColor: '#EEEEEE' }">
    <v-app-bar
      app
      color="black"
      dense
      elevation="0"
      dark
    >
      <v-btn class="ma-1" color="coxit" to="/" text :ripple="false">The Home</v-btn>
      <v-btn class="ma-1" color="coxit" to="/connector" text :ripple="false">The Connector</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',  
});
</script>
