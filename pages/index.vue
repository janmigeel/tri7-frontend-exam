<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12" lg="12">
        <Header :globalData="globalData" />
        <Navigation />
        <Banner :homePageData="homePageData" :globalData="globalData"/>
        <Cta :homePageData="homePageData"/>
        <Services :homePageData="homePageData"/>
        <StickerApp :globalData="globalData" />
        <Contact :globalData="globalData" />
        <Footer :globalData="globalData" />
    </v-col>
  </v-row>
</template>

<script>
import { getGlobalData, getHomePageData } from '~/services/ApiService'
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import Banner from '../components/Banner.vue'
import Cta from '../components/Cta.vue'
import Services from '../components/Services.vue'
import StickerApp from '../components/StickerApp.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Navigation, Banner , Cta, Services, StickerApp, Contact, Footer},
  name: 'IndexPage',
  data() {
    return {

    };
  },
  async asyncData() {
    try {
      const globalData = await getGlobalData();
      const homePageData = await getHomePageData();
      return { globalData, homePageData};
    } catch (error) {
      console.error('Error in asyncData:', error);
      return { globalData: null };
    }
  },
}
</script>
