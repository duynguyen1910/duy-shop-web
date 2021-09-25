<template>
  <div>
    <Loader class="main fixed flex w-full h-full top-0 left-0 z-50" />
    <div class="font-sans">
      <component :is="layout">
        <router-view />
      </component>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "./constants/index";
import Loader from "./components/Loader.vue";
export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
  components: {
    Loader,
  },
  mounted() {
    let main = document.querySelector(".main");
    window.addEventListener("load", function () {
      setTimeout(() => {
        main.parentElement.removeChild(main);
      }, 5500);
    });
  },
};
</script>

<!-- https://dribbble.com/shots/15004536/attachments/6726289?mode=media -->
