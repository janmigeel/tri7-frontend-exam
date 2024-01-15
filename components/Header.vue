<template>
    <div class="container">
        <v-row class="branding">
            <v-col cols="6">
                <div >
                    <a href="/">
                        <img :src="globalData.logo" alt="Share OLE777 Affiliate Football">
                    </a>
                </div>
            </v-col>
            <v-col cols="6" class="text-end">
                <div class="forms">
                    <form action="#">
                        <v-btn color="blue-grey-lighten-5">
                            <a :href="globalData.link.login" class="common-btn login-btn">Login</a>
                        </v-btn>
                        <v-btn color="orange darken-3" >
                            <a :href="globalData.link.register"  class="common-btn signup-btn" style="color: white !important;">Daftar sekarang</a>
                        </v-btn>
                    </form>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props:['globalData'],
}
</script>

<style>
.container {
    background-color: #001E5A;
    max-width: 100%;
}
.branding {
    margin: 0% 15%;
}
.common-btn {
    text-transform: none;
    text-decoration: none;
}
.common-btn signup-btn {
    color: white;
}
</style>