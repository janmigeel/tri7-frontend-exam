<template>
    <div class="nav-container">
        <v-row justify="start" class="nav-list">
            <v-col cols="3">
                <v-btn @click="navigate(item.route)" text style="color: #F57C00 !important;" class="common-btn">
                    Tentang OLE777
                </v-btn>
            </v-col>
            <v-col cols="2">
                <v-btn @click="navigate(item.route)" text style="color: white !important;" class="common-btn">
                    Komisi
                </v-btn>
            </v-col>
            <v-col cols="2">
                <v-btn @click="navigate(item.route)" text style="color: white !important;" class="common-btn">
                    Peraturan
                </v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn @click="navigate(item.route)" text style="color: white !important;" class="common-btn">
                    Pertanyaan & Jawaban
                </v-btn>
            </v-col>
            <v-col cols="auto">
                <v-btn @click="openContactForm" text style="color: black !important; background-color: #FFA726 !important;" class="common-btn">
                    OLE777 Official
                </v-btn>
                <ContactUs :dialog="contactFormDialog" @close="closeContactForm" @submit="submitForm"/>
            </v-col>
        </v-row>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ContactUs from '@/components/ContactUs.vue';
  export default {
    components: { ContactUs },
    data() {
        return {
            navigationItems: [
                { label: 'Tentang OLE777', route: '/tentang'},
                { label: 'Komisi', route: '/komisi' },
                { label: 'Peraturan', route: '/peraturan' },
                { label: 'Pertanyaan & Jawaban', route: '/pertanyaan-jawaban' },
                { label: 'OLE777 Official', route: '/ole777-official' },
            ],
            contactFormDialog: false,
        }
    },
    methods: {
      navigate(route) {
        this.$router.push(route);
      },
      openContactForm() {
        this.contactFormDialog = true;
      },
      closeContactForm() {
        this.contactFormDialog = false;
      },
      submitForm(formData) {
        axios.post('https://super7tech.com/developer_exam/api/sendMessage', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(response => {
        console.log(response.data);
        this.closeContactForm();
      })
      .catch(error => {
        console.error(error);
      });
      }
    },
  };
  </script>
  

<style>
.nav-container {
    background-color: #003C82;
    max-width: 100%;
}
.nav-list {
    margin: 0% 14.5%;
}
.common-btn {
    text-transform: none;
    text-decoration: none;
}
</style>