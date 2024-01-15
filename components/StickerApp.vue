<template>
  <v-row class="text-center">
    <v-col cols="12">
        <a :href="globalData.download_app.link">
            <img :src="globalData.download_app.img" alt="banner" class="responsive-img">
        </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
    props:['globalData'],
}
</script>

<style>

</style>