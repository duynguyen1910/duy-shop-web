<template>
  <div class="bg-bgcontent pt-35.75 pb-10 px-80">
    <div class="p-28 bg-white">
      <div class="flex">
        <div class="w-2/5" v-for="image in product.images" :key="image.images">
          <img :src="'http://localhost:3200/uploads/' + image">
        </div>
        <div class="w-3/5 pl-20 pr-32">
          <span class="text-gray-700 text-3xl font-semibold">{{
            product.name
          }}</span>
          <div class=" text-gray-500 text-sm mb-10">
            {{ product.description }}
          </div>
          <div class="flex mt-4 py-4">
            <div
              class="group flex items-center justify-center hover:text-pink-600"
            >
              <i
                @click="productInfo.amount > 1 ? productInfo.amount-- : ''"
                class="fas fa-minus fa-xs"
              ></i>
            </div>
            <div class="flex items-center">
              <input
              type="number"
              class="
                w-10
                h-7
                text-sm
                border
                mx-2
                px-2
                focus:outline-none
                focus:ring-1
                focus:ring-pink-600
                focus:border-pink-600
                border-gray-200
                rounded-sm
              "
              v-model="productInfo.amount"
            />
            </div>
            <div
              class="flex items-center justify-center hover:text-pink-600"
              @click="productInfo.amount++"
            >
              <i class="fas fa-plus fa-xs"></i>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div v-if="product.promotionPrice" class="font-semibold flex mr-3">
              <span class="mb-2 text-xs text-orange-600">₫</span>
              <span class="">{{
                $filters.filterMoney(product.promotionPrice)
              }}</span>
            </div>
            <div v-else class="font-semibold flex">
              <span class="mb-2 text-xs text-orange-600">₫</span>
              <span class="">{{ $filters.filterMoney(product.price) }}</span>
            </div>
            <div class="flex justify-between">
              <Star />
              <Star class="text-orange-600" />
              <Star class="text-orange-600" />
              <Star />
              <Star />
            </div>
          </div>
          <div class="flex space-x-7 items-center w-full mt-3">
            <button
              @click="onAddToCart()"
              class="
                hover:bg-pink-800
                text-sm
                px-7
                py-2.5
                uppercase
                bg-pink-600
                text-white
                transition
                duration-300
                rounded
                transform
                hover:-translate-y-1
              "
            >
              Thêm Vào Giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="toaster"
      class="
        mt-22
        fixed
        inset-0
        flex
        items-end
        justify-center
        px-4
        py-6
        pointer-events-none
        sm:p-6 sm:items-start sm:justify-end
      "
    >
      <div
        class="
          max-w-sm
          w-full
          bg-white
          shadow-xl
          rounded-lg
          pointer-events-auto
        "
      >
        <div class="rounded-lg shadow-xs overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  Sản phẩm đã được thêm vào giỏ hàng
                </p>
                <router-link to="/cart">
                  <p class="mt-2.5 text-sm font-bold text-pink-600">
                    Xem Ngay
                  </p></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../components/icons/Star.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isActive: false,
      toaster: false,
      productInfo: {
        amount: 1,
        product: "",
      },
    };
  },
  components: {
    Star,
  },
  computed: {
    ...mapGetters({ product: "productBySlug" }),
  },
  created() {
    this.getProductBySlug(this.$route.params.slug);
  },
  methods: {
    ...mapActions(["getProductBySlug", "addToCart"]),
    async onAddToCart() {
      if (window.localStorage.getItem("token")) {
        this.productInfo.product = this.product._id;
        await this.addToCart(this.productInfo);
        this.toaster = true;
        setTimeout(() => {
          this.toaster = false;
        }, 5000);
      } else {
        this.$router.push("/cart");
      }
    },
  },
};
</script>
<style scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
