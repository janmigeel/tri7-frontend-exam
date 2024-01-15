<template>
  <v-row class="contact-container text-center">
    <v-col cols="4">
        <img :src="globalData.contact[0].img" alt="">
        <h4>{{ globalData.contact[0].label }}</h4>
        {{ globalData.contact[0].value }}
    </v-col>
    <v-col cols="4">
        <img :src="globalData.contact[1].img" alt="">
        <h4>{{ globalData.contact[1].label }}</h4>
        {{ globalData.contact[1].value }}
    </v-col>
    <v-col cols="4">
        <img :src="globalData.contact[2].img" alt="">
        <h4>{{ globalData.contact[2].label }}</h4>
        {{ globalData.contact[2].value }}
    </v-col>
  </v-row>
</template>

<script>
export default {
    props:['globalData'],
}
</script>

<style scoped>
.contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
</style>