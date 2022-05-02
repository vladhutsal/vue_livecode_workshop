<template>
  <v-container>
    <the-stats :allUsers="allUsers"/>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import TheStats from '@/components/TheStats.vue';

  import api from '@/api';
  import { IUser } from '@/interfaces';
  

  export default Vue.extend({
    name: 'TheHome',
    data() {
      return {
        allUsers: [] as IUser[],
      }
    },

    async mounted () {
      const resp = await api.loadAllUsers();
      console.log(resp)
      if (resp) this.allUsers = resp;
    },

    components: { TheStats },
  })
</script>
