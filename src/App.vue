<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
    components: {
        TheHeader
    },
    computed: {
        didAutoLogout() {
            return this.$store.getters.didAutoLogout;
        }
    },
    created() {
        this.$store.dispatch('tryLogin');
    },
    watch: {
        didAutoLogout(curValue, oldValue) {
            if (curValue && curValue !== oldValue) {
                this.$router.replace('/coaches');
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap');
* {
    box-sizing: border-box;
}
html {
    font-family: 'Poppins', sans-serif;
}
body {
    margin: 0;
}
</style>