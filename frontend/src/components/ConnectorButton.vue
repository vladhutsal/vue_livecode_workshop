<template>
  <v-btn
    class="ml-3"
    color="black"
    :style="getBackgroundColor"
    outlined
    tile
    elevation="0"
    @click="onClickHandler"
  >
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'ConnectorButton',

    props: {
      text: { type: String, required: true},
      onClickHandler: { type: Function, required: true },
      color: { type: String },
    },

    computed: {
      getBackgroundColor(): string {
        let currentColor = 'white';
        if (this.color) currentColor = this.color;
        return `backgroundColor: ${currentColor}`;

      }
    }
  });
</script>
