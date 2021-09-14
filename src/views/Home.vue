<template>
  <div>
    <div class="bg px-80 pt-40 bg-cover bg-no-repeat bg-top bg-scroll">
      <Slider class="mb-28"/>
      <CategoriesNav class="mb-28" />
    </div>
    <div class="bg-bgcontent py-20 px-80">
      <RoomBuildForYou />
    </div>
    <div class="px-80 my-28">
      <LogoFashion class="" />
    </div>
    <div class="bg-trending py-20 mb-28">
      <Trending class="px-80" />
    </div>
  </div>
</template>

<script>
import CategoriesNav from "../components/CategoriesNav.vue";
import Trending from "../components/Trending.vue";
import RoomBuildForYou from "../components/RoomBuildForYou.vue";
import LogoFashion from "../components/LogoFashion.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "Home",
  components: {
    CategoriesNav,
    Trending,
    RoomBuildForYou,
    LogoFashion,
    Slider
  },
};
</script>

<style>
.bg {
  background-image: url("../../src/assets/images/fashion-images/background-category.jpeg");
}
.bg-trending {
  background-image: url("../../src/assets/images/fashion-images/background-trending.jpeg");
}
</style>
