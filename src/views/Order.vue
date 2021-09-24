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
      <span>ORDER PAGE</span>
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
      <router-link to="cart">
        <span class="hover:text-pink-600 transition duration-300">CART PAGE</span>
      </router-link>
      <span>
        <ArrowRight class="w-3.5 h-3.5" />
      </span>
      <span class="text-pink-600 font-black">ORDER PAGE</span>
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
          <div class="w-4/12 flex justify-center items-center">Quantity</div>
          <div class="w-4/12 flex justify-center items-center">Price</div>
        </div>
        <div
          v-for="product in getProductOrdered.cart"
          :key="product._id"
          class="
            flex
            justify-between
            items-center
            bg-white
            text-pink-600
            font-semibold
            p-6
            rounded-lg
            shadow-lg
          "
        >
          <div class="flex items-center w-4/12 pl-10">
            <div class="w-2/5">
              <img
                class="rounded"
                width="100"
                height="100"
                :src="
                  'http://localhost:3200/uploads/' + product.product.images[0]
                "
              />
            </div>
            <div class="text-gray-700 font-semibold text-lg w-3/5">
              {{ product.product.name }}
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              w-4/12
              text-gray-700
              font-semibold
              text-lg
            "
          >
            {{ product.amount }}
          </div>

          <div
            class="
              flex
              justify-center
              items-center
              w-4/12
              text-gray-700
              font-semibold
              text-lg
            "
          >
            ${{
              $filters.filterMoney(
                product.product.promotionPrice
                  ? product.product.promotionPrice
                  : product.product.price * product.amount
              )
            }}
          </div>
        </div>
        <div
          class="
            flex
            items-center
            bg-white
            text-gray-600
            font-semibold
            rounded
            shadow-lg
            border-t-1 border-gray-200
            py-3
            pl-6
            pr-3
            sticky
            bottom-0
            left-0
            right-0
            z-40
            justify-end
            space-x-6
          "
        >
          <div class="font-semibold text-gray-500 text-lg">Total payment:</div>

          <div class="font-semibold text-gray-800 text-xl">
            ${{ $filters.filterMoney(getProductOrdered.total) }}
          </div>
          <button
            @click="onAddOrder"
            class="
              bg-pink-600
              text-white
              py-2.5
              px-8
              rounded
              hover:bg-pink-800
              transition
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-pink-600
              focus:ring-opacity-50
            "
          >
            Purchases
          </button>
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
                  Order creation successfully 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ArrowRight from "../components/icons/ArrowRight.vue";
export default {
  components: {
    ArrowRight,
  },
  data() {
    return {
      toaster: false,
    };
  },
  created() {},
  computed: {
    ...mapGetters(["getAuth", "getProductOrdered"]),
    lastName() {
      const fullName = window.localStorage.getItem("fullName");
      if (fullName) {
        const nameArray = fullName.split(" ");
        return nameArray[nameArray.length - 1];
      }
      return "";
    },
  },
  methods: {
    ...mapActions(["addOrder", "productOrdered"]),
    async onAddOrder() {
      const cartId = [];
      await this.getProductOrdered.cart.map((element) => {
        cartId.push(element._id);
        this.addOrder(cartId);
      });
      this.toaster = true;
      setTimeout(() => {
        this.toaster = false;
      }, 3000);
    },
  },
};
</script>
<style scoped>
.bg {
  background-image: url("../assets/images/products/bg.jpeg");
}
</style>
