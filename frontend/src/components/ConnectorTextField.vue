<template>
  <v-text-field
    v-model="fieldValue"
    outlined
    :label="label"
    color="coxit"
    clearable
    :placeholder="placeholder"
    :style="{ backgroundColor: '#FFFFFF' }"
    dense
    hide-details
    @change="$emit(`update:syncField`, fieldValue)"
    :key="syncField"
  />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'ConnectorTextField',

    data() {
      return {
        fieldValue: '' as string,
      }
    },

    watch: {
      syncField: function(updatedValueFromParent: string) {
        this.fieldValue = updatedValueFromParent;
      }
    },

    props: {
      label: { type: String, required: true },
      placeholder: { type: String, required: true },
      syncField: { type: String, required: true },
    },
  });
</script>
