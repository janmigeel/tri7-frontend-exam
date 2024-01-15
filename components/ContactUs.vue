<template>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">
          Contact Form
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="form.fullname" label="Full Name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="form.email" label="Email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="form.subject" label="Subject" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.message" label="Message" required></v-textarea>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn type="submit" color="primary">Submit</v-btn>
              <v-btn @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      dialog: Boolean,
    },
    data() {
      return {
        form: {
          fullname: '',
          email: '',
          subject: '',
          message: ''
        }
      };
    },
    methods: {
      closeDialog() {
        this.$emit('close');
      },
      submitForm() {
        this.$emit('submit', this.form);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>