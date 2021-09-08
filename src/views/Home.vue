<template>
  <div>
    <div class="bg-bgcontent px-80 pb-82 pt-35.75">
      <Categorys class="mb-28" />
      <Trending class="mb-28" />
    </div>
    <div class="-mt-83.5 px-80">
      <RoomBuildForYou class="mb-28" />
      <LogoFashion class="mb-28" />
    </div>
    <div class="bg-bgcontent px-80 mb-28">
      <Sale />
    </div>
  </div>
</template>

<script>
import Categorys from "../components/Categorys.vue";
import Sale from "../components/Sale.vue";
import Trending from "../components/Trending.vue";
import RoomBuildForYou from "../components/RoomBuildForYou.vue";
import LogoFashion from "../components/LogoFashion.vue";

export default {
  name: "Home",
  components: {
    Categorys,
    Sale,
    Trending,
    RoomBuildForYou,
    LogoFashion,
  },
};
</script>
