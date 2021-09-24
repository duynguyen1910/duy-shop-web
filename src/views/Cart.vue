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
      <span>CART PAGE</span>
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
      <span class="text-pink-600">CART PAGE</span>
    </div>
    <div class="bg-bgcontent px-80 py-24">
      <div v-if="cart.length > 0" class="space-y-8">
        <div
          class="
            bg-white
            text-gray-600
            font-semibold
            flex
            px-6
            py-3
            rounded
            shadow
          "
        >
          <div class="flex items-center w-6/12">
            <input
              type="checkbox"
              class="
                cursor-pointer
                transform
                scale-125
                text-pink-600
                border-1
                focus:ring-0 focus:ring-offset-0
                bg-white
                border-gray-300
                rounded-sm
              "
              @change="checkAll($event)"
            />
            <div class="ml-7 flex justify-center items-center text-gray-500">
              Product
            </div>
          </div>
          <div class="w-1/12 flex justify-center items-center text-gray-500">
            Quantity
          </div>
          <div class="w-4/12 flex justify-center items-center text-gray-500">
            Price
          </div>
          <div class="w-1/12 flex justify-center items-center text-gray-500">
            Feature
          </div>
        </div>
        <div
          class="
            flex
            bg-white
            text-pink-600
            font-semibold
            p-6
            rounded-lg
            shadow-lg
          "
          v-for="item in cart"
          :key="item._id"
        >
          <div class="flex items-center space-x-7 w-6/12">
            <input
              type="checkbox"
              class="
                cursor-pointer
                transform
                scale-125
                text-pink-600
                border-1
                focus:ring-0 focus:ring-offset-0
                bg-white
                border-gray-300
                rounded-sm
              "
              :value="item"
              v-model="price"
            />
            <img
              class="rounded"
              width="100"
              height="100"
              v-if="
                item.product && item.product.images && item.product.images[0]
              "
              :src="'http://localhost:3200/uploads/' + item.product.images[0]"
            />
            <div
              class="text-gray-700 font-semibold text-lg"
              v-if="item.product && item.product.name"
            >
              {{ item.product.name }}
            </div>
          </div>
          <div class="flex justify-center items-center w-1/12">
            <div class="flex">
              <button
                class="
                  group
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  font-semibold
                  text-lg
                  hover:text-pink-600
                "
              >
                <i
                  @click="item.amount > 1 ? item.amount-- : ''"
                  class="fas fa-minus fa-xs"
                ></i>
              </button>
              <div class="flex items-center">
                <input
                  type="number"
                  class="
                    w-10
                    h-8
                    border
                    mx-3
                    px-2
                    text-gray-700
                    font-semibold
                    text-lg
                    bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-pink-600
                    focus:border-pink-600
                    border-none
                    rounded-sm
                  "
                  v-model="item.amount"
                />
              </div>
              <button
                class="
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  font-semibold
                  text-lg
                  hover:text-pink-600
                "
                @click="item.amount++"
              >
                <i class="fas fa-plus fa-xs"></i>
              </button>
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
            <div v-if="item && item.product && item.product.promotionPrice">
              ${{ $filters.filterMoney(item.product.promotionPrice) }}
            </div>
            <div v-else>${{ $filters.filterMoney(item.product.price) }}</div>
          </div>
          <div class="w-1/12 flex justify-center items-center">
            <button
              @click="onDeleteCart(item._id)"
              class="
                text-pink-600
                bg-pink-200
                rounded-full
                p-1.5
                hover:text-pink-800
                transition
                duration-200
                focus:outline-none
                focus:ring-2
                focus:ring-pink-600
                focus:ring-opacity-50
              "
            >
              <Trash />
            </button>
          </div>
        </div>
        <div
          class="
            flex
            justify-between
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
          "
        >
          <div class="flex items-center w-6/12">
            <input
              type="checkbox"
              class="
                transform
                scale-125
                mr-7
                text-pink-600
                border-1
                focus:ring-0 focus:ring-offset-0
                bg-white
                border-gray-300
                rounded-sm
                cursor-pointer
              "
              @change="checkAll($event)"
            />
            <div class="bg-pink-200 text-pink-600 rounded-full py-2 px-4 mr-4">
              Select all
            </div>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              w-2/12
              font-semibold
              text-lg text-gray-500
            "
          >
            Total:
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              w-2/12
              font-semibold
              text-xl text-gray-800
            "
          >
            ${{ $filters.filterMoney(cartTotalAmount) }}
          </div>
          <div class="flex items-center justify-center w-2/12">
            <button
              @click="onOrdered"
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
      <div v-else class="flex justify-center">
        <div class="flex flex-col">
          <div class="flex justify-center">
            <img
              src="../../src/assets/images/logos/cart-empty.png"
              width="150"
              height="150"
            />
          </div>
          <div class="text-gray-600 font-semibold mb-3">Your cart is Empty</div>
          <router-link to="/">
            <div class="flex justify-center">
              <button class="bg-pink-600 text-white py-3 px-10 rounded">
                Buy now
              </button>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div
      v-show="toastCartEmpty"
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
                  class="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-bold text-gray-900">
                  Your cart is Empty !!!
                </p>
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
                  Deleted successfully
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
import Trash from "../components/icons/Trash.vue";
import ArrowRight from "../components/icons/ArrowRight.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Trash,
    ArrowRight,
  },
  data() {
    return {
      toastCartEmpty: false,
      price: [],
      toaster: false,
    };
  },
  async created() {
    await this.getCart();
    this.price = [...this.cart];
  },
  computed: {
    ...mapGetters(["cart", "getAuth"]),
    lastName() {
      const fullName = window.localStorage.getItem("fullName");
      if (fullName) {
        const nameArray = fullName.split(" ");
        return nameArray[nameArray.length - 1];
      }
      return "";
    },
    cartTotalAmount() {
      let total = 0;
      total = this.price.reduce((acc, item) => {
        return (
          acc +
          item.amount *
            (item.product.promotionPrice
              ? item.product.promotionPrice
              : item.product.price)
        );
      }, 0);
      return total;
    },
  },
  methods: {
    ...mapActions(["getCart", "deleteCart", "productOrdered"]),
    async onDeleteCart(id) {
      await this.deleteCart(id);
      this.toaster = true;
      setTimeout(() => {
        this.toaster = false;
      }, 1900);
      this.getCart();
    },
    checkAll(event) {
      event.target.checked ? (this.price = [...this.cart]) : (this.price = []);
    },
    onOrdered() {
      if (this.price == "") {
        this.toastCartEmpty = true;
      } else {
        this.productOrdered({ cart: this.price, total: this.cartTotalAmount });
        this.$router.push("/order");
      }
      setTimeout(() => {
        this.toastCartEmpty = false;
      }, 2000);
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
