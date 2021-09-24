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
      <span>PRODUCTS</span>
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
      <span class="text-pink-600">PRODUCTS</span>
    </div>
    <div class="bg-bgcontent py-35.75 px-80">
      <div class="p-24 bg-white">
        <div class="flex">
          <div class="space-y-7">
            <div class="border-2 rounded p-5 w-110 h-110">
              <img
                v-if="currentImg"
                :src="'http://localhost:3200/uploads/' + currentImg"
              />
            </div>
            <div class="flex items-center justify-center space-x-7">
              <div
                v-for="image in product.images"
                :key="image"
                class="border-2 p-3 rounded cursor-pointer"
                :class="{ 'border-pink-600 shadow-xl': image === currentImg }"
                @click="urlImg(image)"
              >
                <img
                  :src="'http://localhost:3200/uploads/' + image"
                  width="100"
                  height="100"
                  class="transition duration-300 transform hover:scale-110"
                />
              </div>
            </div>
          </div>
          <div class="pl-24">
            <div class="space-y-8 border-b-1 pb-4">
              <span
                class="text-gray-900 text-3xl font-semibold tracking-wide"
                >{{ product.name }}</span
              >
              <div class="flex justify-between items-center">
                <div
                  v-if="product.promotionPrice"
                  class="text-2xl font-bold text-pink-600"
                >
                  $ {{ $filters.filterMoney(product.promotionPrice) }}
                </div>
                <div v-else class="text-2xl font-bold text-pink-600">
                  $ {{ $filters.filterMoney(product.price) }}
                </div>
                <div class="flex justify-between">
                  <Star />
                  <Star class="text-orange-600" />
                  <Star class="text-orange-600" />
                  <Star />
                  <Star />
                </div>
              </div>
              <div class="text-gray-600 text-sm">
                {{ product.description }}
              </div>
            </div>
            <div class="border-b-1 pb-4">
              <div class="mt-8 font-semibold space-x-2">
                <span class="text-gray-800">Category</span>
                <span class="text-gray-500">
                  {{ product.category ? product.category.name : "" }}
                </span>
              </div>
              <div class="flex mt-8">
                <button
                  class="
                    group
                    flex
                    items-center
                    justify-center
                    text-gray-500
                    hover:text-pink-600
                  "
                >
                  <i
                    @click="productInfo.amount > 1 ? productInfo.amount-- : ''"
                    class="fas fa-minus fa-xs"
                  ></i>
                </button>
                <div class="flex items-center">
                  <input
                    type="number"
                    class="
                      w-10
                      h-7.5
                      text-sm
                      border
                      mx-2.5
                      px-2.5
                      bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-pink-600
                      focus:border-pink-600
                      border-none
                      rounded-sm
                    "
                    v-model="productInfo.amount"
                  />
                </div>
                <button
                  class="
                    flex
                    items-center
                    justify-center
                    text-gray-500
                    hover:text-pink-600
                  "
                  @click="productInfo.amount++"
                >
                  <i class="fas fa-plus fa-xs"></i>
                </button>
              </div>
              <div class="flex space-x-7 items-center w-full mt-8">
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
                    hover:-translate-y-0.5
                  "
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div>
              <div class="flex items-center mt-8 space-x-5">
                <div class="font-semibold text-gray-800">Share</div>
                <div class="flex space-x-7 text-gray-600">
                  <i class="fab fa-twitter hover:text-pink-600"></i>
                  <i class="fab fa-facebook-f hover:text-pink-600"></i>
                  <i class="fab fa-telegram-plane hover:text-pink-600"></i>
                </div>
              </div>
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
                  <p class="text-sm font-bold text-gray-900">
                    Add product succesfully
                  </p>
                  <router-link to="/cart">
                    <p class="mt-2.5 text-sm font-bold text-pink-600">
                      Go to Cart 
                    </p></router-link
                  >
                </div>
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
import ArrowRight from "../components/icons/ArrowRight.vue";
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
      currentImg: "",
    };
  },
  components: {
    Star,
    ArrowRight,
  },
  computed: {
    ...mapGetters({ product: "productBySlug" }),
  },
  watch: {
    product() {
      this.currentImg = this.product.images[0];
    },
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
    urlImg(url) {
      this.currentImg = url;
    },
  },
};
</script>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.bg {
  background-image: url("../assets/images/products/bg.jpeg");
}
</style>
