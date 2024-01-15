<template>
  <v-row class="services-container">
    <v-col cols="12">
        <b>Kongsi OLE777</b> adalah program OLE777 Affiliate bola yang memberikan member dan non-member penghasilan dengan platform OLE777.
      Berdiri sejak tahun 2014, OLE777 memberikan hiburan online dengan kenyamanan, kualitas produk, layanan pelanggan terbaik, dan keuntungan bagi untuk seluruh player, dan anggota Kongsi OLE777 Affiliate Bola.
    </v-col>
    <v-col cols="12">
        <b>Langkah-langkah mendapatkan komisi dengan menjadi Kongsi OLE777:</b>
    </v-col>
    <v-col cols="12" class="pb-0">
        <v-chip color="orange" label>1</v-chip> Daftar dengan klik tombol " Daftar Sekarang" atau melalui link yang diberikan oleh tim kami.
    </v-col>
    <v-col cols="12" class="pb-0">
        <v-chip color="orange" label>2</v-chip> Lakukan Pendaftaran
    </v-col>
    <v-col cols="12" class="pb-0">
        <v-chip color="orange" label>3</v-chip> Sebarkan link khusus yang Anda dapat dari akun Anda.
    </v-col>
    <v-col cols="12" class="pb-0">
        <v-chip color="orange" label>4</v-chip> Anda bisa menyebarkan link melalui akun-akun Sosial Media Anda, seperti Facebook, Instagram, YouTube, Twitter, dan lain-lain.
    </v-col>
    <v-row class="mt-5 pt-5 text-center">
        <v-col cols="3">
            <v-row>
                <v-col cols="12">
                    <img :src="homePageData.services[0].img" alt="">
                </v-col>
                <v-col cols="12">
                    <h1>{{ homePageData.services[0].title }}</h1>
                </v-col>
                <v-col cols="12">
                    {{ homePageData.services[0].description }}
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="3">
            <v-row>
                <v-col cols="12">
                    <img :src="homePageData.services[1].img" alt="">
                </v-col>
                <v-col cols="12">
                    <h1>{{ homePageData.services[1].title }}</h1>
                </v-col>
                <v-col cols="12">
                    {{ homePageData.services[1].description }}
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="3">
            <v-row>
                <v-col cols="12">
                    <img :src="homePageData.services[2].img" alt="">
                </v-col>
                <v-col cols="12">
                    <h1>{{ homePageData.services[2].title }}</h1>
                </v-col>
                <v-col cols="12">
                    {{ homePageData.services[2].description }}
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="3">
            <v-row>
                <v-col cols="12">
                    <img :src="homePageData.services[3].img" alt="">
                </v-col>
                <v-col cols="12">
                    <h1>{{ homePageData.services[3].title }}</h1>
                </v-col>
                <v-col cols="12">
                    {{ homePageData.services[3].description }}
                </v-col>
            </v-row>
        </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
    props:['homePageData'],
}
</script>

<style scoped>
.services-container {
    padding: 50px 0px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
</style>
