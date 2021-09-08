<template>
  <div class="bg-bgcontent pt-35.75 pb-10 px-80">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        class="
          rounded-lg
          overflow-hidden
          shadow-sm
          hover
          transition
          duration-200
        "
        v-for="product in products"
        :key="product._id"
      >
        <div class="relative group">
          <div v-for="image in product.images" :key="image.images">
            <img
              style="width: 302px; height: 258px"
              :src="'http://localhost:3100/uploads/' + image"
              class="
                rounded
                block
                w-full
                filter
                transition
                duration-500
                delay-100
                group-hover:blur-sm
              "
            />
          </div>
          <div
            class="
              absolute
              inset-0
              flex
              justify-center
              items-center
              opacity-0
              hover:opacity-100
              transition
              duration-500
              delay-100
            "
          >
            <router-link :to="'/products/' + product.slug">
              <div
                class="
                  bg-pink-600
                  text-white text-sm
                  py-2
                  px-7
                  font-semibold
                  transition
                  duration-300
                  rounded-sm
                  hover:bg-white hover:text-gray-700
                "
              >
                MUA NGAY
              </div>
            </router-link>
          </div>
        </div>
        <div class="py-2 px-6 bg-white">
          <div class="text-gray-700 uppercase font-semibold">
            {{ product.name }}
          </div>
          <div
            class="flex justify-between text-xs font-semibold text-orange-600"
          >
            <span>{{ categoriesBySlug.name }}</span>
            <span class="flex space-x-0.5"
              ><Star class="text-gray-600" /> <Star class="text-gray-600" />
              <Star /> <Star /> <Star class="text-gray-600"
            /></span>
          </div>
          <div class="flex mt-2 text-gray-700">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Star from "../components/icons/Star.vue";
export default {
  data() {
    return {
      isHoverImg: false,
    };
  },
  components: {
    Star,
  },
  async created() {
    await this.getCategoryBySlug(this.$route.params.slug);
    await this.getProductByCategories(this.categoriesBySlug._id);
  },
  computed: {
    ...mapGetters(["products", "categoriesBySlug"]),
  },
  methods: {
    ...mapActions([
      "getCategoryBySlug",
      "getProductByCategories",
      "getProductInfo",
    ]),
  },
};
</script>
