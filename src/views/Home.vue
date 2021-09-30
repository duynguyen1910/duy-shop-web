<template>
  <div>
    <div class="pt-25.75">
      <Slider />
    </div>
    <div class="px-80">
      <AboutUs />
    </div>
    <div class="bg-bgcontent py-20 px-80">
      <Making />
    </div>
    <div class="px-80">
      <Categories />
      <Blog/>
    </div>
  </div>
</template>

<script>
import Categories from "../components/Categories.vue";
import Making from "../components/Making.vue";
import Slider from "../components/Slider.vue";
import AboutUs from "../components/AboutUs.vue";
import Blog from "../components/Blog.vue";
export default {
  name: "Home",
  components: {
    Categories,
    Making,
    Slider,
    AboutUs,
    Blog
  },
};
</script>

<style>
/* .bg {
  background-image: url("../../src/assets/images/fashion-images/background-category.jpeg");
} */
/* .bg-trending {
  background-image: url("../../src/assets/images/fashion-images/background-trending.jpeg");
} */
</style>
