<template>
  <v-row class="cta-container">
    <v-col col="4">
        <img :src="homePageData.offers[0].img" alt="1" class="cta-img">
    </v-col>
    <v-col col="4">
        <img :src="homePageData.offers[1].img" alt="2" class="cta-img">
    </v-col>
    <v-col col="4">
        <img :src="homePageData.offers[2].img" alt="3" class="cta-img">
    </v-col>
  </v-row>
</template>

<script>
export default {
    props:['homePageData'],
}
</script>

<style scoped>
.cta-container {
    padding: 50px 0px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
.cta-img {
    width: 100%;
    max-width: 384px;
    border-radius: 8px;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
}
</style>