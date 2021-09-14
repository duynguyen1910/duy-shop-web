<template>
  <div class="flex justify-around">
    <LouisVuitton class="w-28 h-auto" />
    <Gucci class="w-28 h-auto" />
    <Chanel class="w-28 h-auto" />
    <Hermes class="w-28 h-auto" />
    <ChristianDior class="w-28 h-auto" />
  </div>
</template>

<script>
import LouisVuitton from "./icons/LouisVuitton.vue";
import Gucci from "./icons/Gucci.vue";
import Chanel from "./icons/Chanel.vue";
import Hermes from "./icons/Hermes.vue";
import ChristianDior from "./icons/ChristianDior.vue";
export default {
  components: {
    LouisVuitton,
    Gucci,
    Chanel,
    Hermes,
    ChristianDior,
  },
};
</script>
<style></style>
