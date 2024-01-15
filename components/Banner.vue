<template>
    <div class="banner-container">
        <v-row>
            <v-col cols="12">
                <img src="images/banner-new.webp" alt="banner" class="responsive-img">
                <div class="banner-text">
                    <div class="ban-con">
                        <v-row>
                            <v-col col="12">
                                <h2 class="banner-header">
                                    <span class="banner-gradient">50% INSTANT KOMISI AFILIASI</span>
                                    <span class="banner-white">TAMBAH PENGHASILAN ANDA,</span>
                                    <br />
                                    <span class="banner-white">PASSIVE INCOME MENGGIURKAN!</span>
                                </h2>
                            </v-col>
                            <v-col cols="12">
                                <v-btn color="orange darken-3" style="height: 30px !important;">
                                    <a :href="globalData.link.register"  class="common-btn signup-btn" style="color: white !important;">Daftar sekarang</a>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props:['homePageData','globalData'],
}
</script>

<style scoped>
.responsive-img {
  width: 100%;
  height: auto;
}
.banner-text {
    width: 35%;
    position: absolute;
    left: 16%;
    top: 13%;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
}
.bon-con {
    min-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
.banner-gradient {
    background: linear-gradient(to top, #faa41f 0%, #FEF85A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 8px;
}
.banner-white {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
</style>