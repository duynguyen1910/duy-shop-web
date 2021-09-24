<template>
  <div class="pt-25.75">
    <div
      class="
        flex
        items-center
        justify-center
        text-5xl
        font-extrabold
        bg
        py-56
        bg-cover bg-center bg-no-repeat
        text-white
      "
    >
      <span>PURCHASE PAGE</span>
    </div>
    <div
      class="
        flex
        justify-center
        items-center
        py-5
        bg-white
        space-x-4
        text-xs
        font-black
        text-gray-400
        rounded-xl
        tracking-widest
      "
    >
      <router-link to="/">
        <span class="hover:text-pink-600 transition duration-300">HOME</span>
      </router-link>
      <span>
        <ArrowRight class="w-3.5 h-3.5" />
      </span>
      <span class="text-pink-600 font-black">PURCHASE PAGE</span>
    </div>
    <div class="bg-bgcontent px-80 py-24">
      <div class="space-y-8">
        <div
          class="
            flex
            items-center
            bg-white
            px-6
            py-3
            rounded
            shadow
            text-gray-500
            font-semibold
          "
        >
          <div class="w-4/12 flex justify-center items-center">Product</div>
          <div class="w-4/12 flex justify-center items-center">Total</div>
          <div class="w-4/12 flex justify-center items-center">Status</div>
        </div>
        <div class="space-y-7">
          <div
            v-for="order in getMyOrder"
            :key="order._id"
            class="bg-white font-semibold p-6 rounded-lg shadow-lg flex"
          >
            <div class="w-4/12">
              <div v-for="product in order.product" :key="product._id">
                <div class="flex items-center justify-center">
                  <div class="w-2/5">
                    <img
                      class="rounded"
                      width="100"
                      height="100"
                      :src="
                        'http://localhost:3200/uploads/' +
                        product.product.images[0]
                      "
                    />
                  </div>
                  <div class="w-3/5 text-gray-700 font-semibold text-lg">
                    {{ product.product.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="w-4/12 flex items-center justify-center">
              ${{ $filters.filterMoney(order.totalAmount) }}
            </div>
            <div class="w-4/12 flex items-center justify-center">
            {{ order.createdAt }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "../components/icons/ArrowRight.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ArrowRight,
  },
  created() {
    this.myOrder();
  },
  methods: {
    ...mapActions(["myOrder"]),
  },
  computed: {
    ...mapGetters(["getMyOrder"]),
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/images/products/bg.jpeg");
}
</style>
