<template>
  <div>
    <p class="display-1">The Stats</p>
    <v-card 
      v-for="(user, idx) of allUsers"
      :key="idx"
      class="mb-2"
      tile
      outlined
      elevation="0"
    >
      <v-card-text>
        <p class="mb-0 subtitle-1">{{ user.name }}</p>
        <p class="mb-0 subtitle-1 black--text">{{ user.data.public_msg }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
  import { IUser } from '@/interfaces'
  import Vue, { PropType } from 'vue'

  export default Vue.extend({
    name: 'TheStats',
    props: {
      allUsers: {
        type: Array as PropType<IUser[]>,
      }
    }
    
  })
</script>
