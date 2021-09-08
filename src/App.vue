<template>
  <div class="font-sans">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "./constants/index";
export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>

<!-- https://dribbble.com/shots/15004536/attachments/6726289?mode=media -->
