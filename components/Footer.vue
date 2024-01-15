<template>
  <v-row class="footer-container text-center">
    <v-col cols="3" class="d-flex align-center text-center">
        <v-row>
            <v-col cols="12" class="px-0 py-0">
                <a :href="globalData.footer[0].link">
                    <img :src="globalData.footer[0].img" alt="banner" class="responsive-img">
                </a>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="3" class="d-flex align-center text-center">
        <v-row>
            <v-col cols="12" class="px-3 py-0">
                <a :href="globalData.footer[1].link">
                    <img :src="globalData.footer[1].img" alt="banner" class="responsive-img">
                </a>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="3" class="d-flex align-center text-center">
        <v-row>
            <v-col cols="12" class="px-3 py-0">
                <a :href="globalData.footer[2].link">
                    <img :src="globalData.footer[2].img" alt="banner" class="responsive-img">
                </a>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="3" class="d-flex align-center text-center">
        <v-row>
            <v-col cols="12" class="px-3 py-0 d-flex align-center text-center">
                <a :href="globalData.footer[3].link">
                    <img :src="globalData.footer[3].img" alt="banner" class="responsive-img">
                </a>
            </v-col>
        </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
    props:['globalData'],
}
</script>

<style>
.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    background-color: #001E5A;
}
</style>