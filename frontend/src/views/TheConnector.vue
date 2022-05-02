<template>
  <v-container>
    <p class="display-1">The Connector</p>
    <v-card
      tile
      elevation="0"
      outlined
    >
      <v-card-text>
        <connector-text-field 
          :label="'Your name'"
          :placeholder="'Enter your name'"
          :syncField.sync="nameField"
        />

        <connector-text-field
          class="my-2"
          :label="'Private description'"
          :placeholder="'Enter private description'"
          :syncField.sync="descriptionField"
        />

        <connector-text-field 
          :label="'Public message'"
          :placeholder="'Enter public message'"
          :syncField.sync="publicMsgField"
        />

      </v-card-text>
    </v-card>

     <div class="mt-2 d-flex flex-row align-center">
      <connector-button 
        :color="$vuetify.theme.themes.light.pastelOrange"
        :text="'Save'"
        :onClickHandler="registerClickHandler"
      />
      <connector-button  
        :color="$vuetify.theme.themes.light.pastelOrange"
        :text="'Load'"
        :onClickHandler="loadClickHandler"
      />
      <connector-button  
        :color="$vuetify.theme.themes.light.pastelRed"
        :text="'Reset'"
        :onClickHandler="resetClickHandler"
      />
      <p v-if="infoMsg" class="mb-0 ml-4" :class="getInfoMsgColor">
        {{ infoMsg }}
      </p>
    </div>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import api from '@/api';

  import { SUCCESS, ERROR } from '@/constants';
  import { IUser } from '@/interfaces';
  
  import ConnectorButton from '@/components/ConnectorButton.vue';
  import ConnectorTextField from '@/components/ConnectorTextField.vue';

  export default Vue.extend({
  components: { ConnectorButton, ConnectorTextField },
    name: 'TheConnector',

    data() {
      return {
        nameField: '',
        descriptionField: '',
        publicMsgField: '',

        isError: true,
        infoMsg: '',
        infoMsgColor: 'red--text',

        someValue: 0,
      };
    },

    computed: {
      getInfoMsgColor(): string {
        return this.isError ? 'red--text' : 'success--text';
      },      
    },

    methods: {
      setError(status: boolean): void {
        this.isError = status;
      },

      async setInfoMessage(message: string, error=SUCCESS): Promise<void> {
        const someText = "The faster you click, the faster your salary growth";
        this.setError(error);
        this.infoMsg = this.someValue > 5 ? someText : message;
        this.someValue += 1;
        await new Promise(resolve => setTimeout(resolve, 3000));
        if (this.infoMsg === someText) {
          this.infoMsg = '';
          this.someValue = 0;
          return;
        }
      },

      validateFields() {
        const isFieldValid = (field: string) => field.length < 3 ? false : true;

        const userFields = [this.nameField, this.descriptionField, this.publicMsgField];
        for (const fieldText of userFields) {
          if (!isFieldValid(fieldText)) return false;
        }
        return true;
      },

      async registerClickHandler() {
        if (this.validateFields()) {
          const userData: IUser = { 
            name: this.nameField,
            data: {
              description: this.descriptionField,
              public_msg: this.publicMsgField,
              timestamp: Date.now(),
            },
          };
          await api.registerUser(userData);
          await this.setInfoMessage('User was created');
          return;
        }

        await this.setInfoMessage('All fields are required to save', ERROR);
      },

      async loadClickHandler() {
        if (!this.nameField) {
          await this.setInfoMessage('Name field are required on load', ERROR);
          return;
        }
        const resp = await api.loadUser(this.nameField);
        if (!resp) {
          await this.setInfoMessage(`User ${this.nameField} not found`, ERROR);
          return;
        }

        this.nameField = resp.name;
        this.descriptionField = resp.data.description;
        this.publicMsgField = resp.data.public_msg;
        await this.setInfoMessage('User was found, you could edit it now');
      },

      async resetClickHandler() {
        if (!this.nameField) {
          await this.setInfoMessage('Name field are required to reset', ERROR);
          return;
        }
        const deleted = await api.resetUser(this.nameField);
        if (deleted) await this.setInfoMessage('User was removed');
      },
    },
  });
</script>
