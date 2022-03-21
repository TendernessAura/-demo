<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="carousel in list" :key="carousel.id">
      <img :src="carousel.imgUrl" />
    </swiper-slide>
    <!-- 左右按钮 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Carousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Some Swiper option/callback...
        loop: true,
        autoplay: true,
      },
    };
  },
  props: ["list"],
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
</style>