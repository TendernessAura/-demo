<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    this.$store.dispatch("getCategoryList");
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getFloors");
  },
};
</script>

<style>
</style>
