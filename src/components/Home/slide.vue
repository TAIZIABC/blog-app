<template>
  <div class="slide">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="https://oss.static.nubia.cn/upload/5acb0bca3b32364.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://oss.static.nubia.cn/upload/5acb0bcb961d81.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://oss.static.nubia.cn/upload/5acb0bcc1ad4654.png" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
      name: "slide",
      data() {
        return {
          swiperOption: {
            autoplay: true,
            effect: 'slide',
            grabCursor: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            cubeEffect: {
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94
            }
          }
        }
      },
      components: {
        swiper,
        swiperSlide
      },
    }
</script>

<style scoped>
.slide{
  width: 100%;
  height: 215px;
}
img{
  width: 100%;
  height: auto;
}
</style>
