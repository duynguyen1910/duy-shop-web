<template>
  <div class="flex justify-between py-18">
    <div
      class="
        w-7/12
        transition
        transform
        duration-700
        ease-in-out
        -ml-80
        opacity-0
      "
      :class="{ 'translate-x-80 opacity-100': isTranslate }"
    >
      <img
        src="../assets/images/products/guitar-bg.jpeg"
        width="600"
        height="600"
      />
    </div>
    <div class="w-5/12 flex items-center">
      <div class="space-y-6">
        <div
          :class="{ '-translate-x-48 opacity-100': isTranslate }"
          class="
            font-cursive1 font-bold
            text-2xl text-pink-600
            transition
            transform
            duration-700
            ease-in-out
            ml-48
            opacity-0
          "
        >
          A Few Words About Our Shop
        </div>
        <div
          :class="{ '-translate-x-48 opacity-100': isTranslate }"
          class="
            text-gray-800
            font-black
            text-5xl
            transition
            delay-75
            transform
            duration-700
            ease-in-out
            ml-48
            opacity-0
          "
        >
          ABOUT US
        </div>
        <div
          :class="{ '-translate-x-40 opacity-100': isTranslate }"
          class="
            text-gray-500 text-sm
            transition
            delay-100
            transform
            duration-700
            ease-in-out
            ml-40
            opacity-0
          "
        >
          Armed with a love of guitars and a knack for business, DuyShop is one
          of the largest independently owned guitar stores in the Ho Chi Minh,
          and still growing.
        </div>
        <div class="flex justify-between items-center">
          <div
            :class="{ '-translate-x-80 opacity-100': isTranslate }"
            class="
              flex
              items-center
              space-x-7
              transition
              delay-200
              transform
              duration-700
              ease-in-out
              ml-80
              opacity-0
            "
          >
            <div
              class="
                p-4
                rounded-full
                bg-amber-300
                text-gray-800
                hover:text-white hover:bg-pink-600
                transition
                duration-300
              "
            >
              <ArrowRight />
            </div>
            <div>
              <div class="text-gray-800 text-sm font-bold">DUYCADUONG</div>
              <div class="text-pink-600 italic font-medium">Shop Founder</div>
            </div>
          </div>
          <div
            :class="{ '-translate-x-80 opacity-100': isTranslate }"
            class="
              transition
              delay-300
              transform
              duration-700
              ease-in-out
              -mr-80
              opacity-0
            "
          >
            <img src="../assets/images/products/chuki.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "../components/icons/ArrowRight.vue";
export default {
  data() {
    return {
      isTranslate: false,
    };
  },
  components: {
    ArrowRight,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 120) {
        this.isTranslate = true;
      }
    },
  },
};
</script>

<style></style>
