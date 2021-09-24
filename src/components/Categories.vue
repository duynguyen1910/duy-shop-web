<template>
  <div class="py-40">
    <div
      class="
        flex
        justify-center
        items-center
        font-cursive1 font-bold
        text-2xl text-pink-600
        mb-6
        transition
        transform
        duration-700
        ease-in-out
        ml-48
      "
      :class="{
        '-translate-x-24 opacity-100': isScale,
      }"
    >
      <span>Latest Arrivals</span>
    </div>
    <div
      class="
        flex
        justify-center
        items-center
        text-gray-800
        font-black
        text-5xl
        mb-8
        transition
        transform
        duration-700
        ease-in-out
        mr-48
      "
      :class="{
        'translate-x-24 opacity-100': isScale,
      }"
    >
      <span>PRODUCTS</span>
    </div>
    <div
      class="
        mb-10
        px-96
        transition
        delay-300
        transform
        duration-700
        ease-in-out
        scale-0
        opacity-0
      "
      :class="{
        'scale-100 opacity-100': isScale,
      }"
    >
      <div class="flex justify-between items-center">
        <div
          v-for="product in categories"
          :key="product._id"
          @click="productActive(product._id)"
          class="-mb-1 text-textproduct group cursor-pointer"
        >
          <button
            :class="{ 'text-pink-600': product._id === isActive }"
            class="uppercase text-sm font-semibold"
          >
            {{ product.name }}
          </button>
          <div
            class="
              p-0.5
              rounded-full
              mt-2.5
              transition
              duration-500
              group-hover:bg-pink-600
            "
            :class="{ 'bg-pink-600': product._id === isActive }"
          ></div>
        </div>
      </div>
      <div class="bg-gray-300 p-0.5 rounded-full"></div>
    </div>
    <div class="grid grid-cols-4 gap-8 transition duration-500">
      <div
        v-for="product in products"
        :key="product._id"
        class="border-2 rounded group relative"
      >
        <div
          class="
            mx-6
            mt-6
            filter
            transition
            duration-500
            delay-100
            group-hover:blur-sm
          "
        >
          <div class="flex justify-center items-center mt-6">
            <img
              :src="'http://localhost:3200/uploads/' + product.images[0]"
              class="w-55 h-55"
            />
          </div>
        </div>
        <div class="mx-6 mb-6">
          <div class="flex justify-center items-center mt-2">
            <span
              class="uppercase font-semibold tracking-tight text-gray-600"
              >{{ product.name }}</span
            >
          </div>
          <div
            class="
              flex
              justify-center
              items-start
              space-x-4
              text-pink-600
              font-semibold
              mt-1
              tracking-wide
            "
          >
            <div
              :class="{ 'line-through text-gray-500': product.promotionPrice }"
            >
              ${{ $filters.filterMoney(product.price) }}
            </div>
            <div v-if="product.promotionPrice">
              ${{ $filters.filterMoney(product.promotionPrice) }}
            </div>
          </div>
        </div>
        <div
          v-if="product.promotionPrice"
          class="
            bg-orange-500
            text-white
            py-1.25
            px-3
            rounded-md
            text-xs
            absolute
            top-5
            right-4
            font-bold
          "
        >
          SALE
        </div>
        <div
          class="
            absolute
            inset-0
            group
            opacity-0
            scale-0
            hover:opacity-100 hover:scale-100
            transition
            duration-500
            delay-100
            flex
            items-center
            justify-around
            px-16
            pb-18
          "
        >
          <router-link :to="'/products/' + product.slug">
            <div class="p-3 rounded-full bg-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </router-link>
          <router-link to="/cart">
            <button
              class="p-3 rounded-full bg-green-400 transform"
              @click="onAddToCart(product._id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg></button
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isScale: false,
      isActive: "",
      productInfo: {
        amount: 1,
        product: "",
      },
    };
  },
  watch: {
    categories() {
      this.categories.forEach((element) => {
        if (element.name === "Guitar") {
          this.isActive = element._id;
          this.productActive(element._id);
        }
      });
    },
  },
  computed: {
    ...mapGetters(["categories", "products"]),
  },
  methods: {
    ...mapActions(["getAllCategories", "getProductByCategories", "addToCart"]),
    productActive(id) {
      this.isActive = id;
      this.getProductByCategories(id);
    },
    async onAddToCart(id) {
      if (window.localStorage.getItem("token")) {
        this.productInfo.product = id;
        await this.addToCart(this.productInfo);
      } else {
        this.$router.push("/login");
      }
    },
    handleScroll() {
      if (window.scrollY > 1100) {
        this.isScale = true;
      }
    },
  },
  created() {
    this.getAllCategories();
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
};
</script>
