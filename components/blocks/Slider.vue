

<template>
  <swiper
    :slides-per-view="4"
    :space-between="20"
    @swiper="onSwiper"
  >
    <swiper-slide>
      <BlocksJoinCard />
    </swiper-slide>
    <swiper-slide>
      <BlocksJoinCard />
    </swiper-slide>
    <swiper-slide>
      <BlocksJoinCard />
    </swiper-slide>
    <swiper-slide>
      <BlocksJoinCard />
    </swiper-slide>
    <swiper-slide>
      <BlocksJoinCard />
    </swiper-slide>
    <swiper-slide>
      <BlocksJoinCard />
    </swiper-slide>
    <swiper-slide>
      <BlocksJoinCard />
    </swiper-slide>
  </swiper>
</template>

<script>
  import { Navigation } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css/navigation';
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation]
      };
    },
  }
</script>

<style lang="css">

</style>