<template>
  <transition-group tag="div" class="img-slider" name="slide">
    <div v-for="number in [currentImg]" v-bind:key="number">
      <img :src="imgList[Math.abs(currentImg) % imgList.length]" />
    </div>
  </transition-group>
</template>

<script>
export default {
  data: {
    message: "Click for slide",
    show: true,
    imgList: [
      "http://via.placeholder.com/350x150",
      "http://via.placeholder.com/350x151",
      "http://via.placeholder.com/350x152",
    ],
    currentImg: 0,
  },
  mounted() {
    setInterval(() => {
      this.currentImg = this.currentImg + 1;
    }, 3000);
  },
};
</script>

<style>
#demo {
  overflow: hidden;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.img-slider {
  overflow: hidden;
  position: relative;
  height: 200px;
  width: 400px;
}

.img-slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
