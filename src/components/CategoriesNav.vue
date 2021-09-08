<template>
  <div class="-mt-2">
    <div class="flex mb-28">
      <div class="w-4/5 relative">
        <div class="relative">
          <img
            src="../../src/assets/images/fashion-images/background-slider.png"
            alt=""
          />
          <div
            class="absolute bottom-0 right-0 mr-40 mb-38 opacity-0 transform"
            :class="{
              'transition translate-y-2/4  duration-1000 ease-in-out opacity-100 ':
                isRun,
            }"
          >
            <div class="text-white font-bold text-3xl uppercase">
              Chỉ trong ngày hôm nay
            </div>
            <div class="text-white flex justify-center mb-4 text-lg uppercase">
              <span>Tận hưởng giảm giá đến 70%</span>
            </div>
            <div class="flex justify-end items-center">
              <button
                class="
                  bg-pink-600
                  text-white text-sm
                  font-bold
                  rounded-sm
                  py-2.5
                  px-6
                "
              >
                ĐẾN NGAY
              </button>
            </div>
          </div>
        </div>
        <div
          :class="{ 'opacity-100': isRun }"
          class="
            absolute
            top-0
            left-0
            opacity-0
            transition
            duration-1000
            delay-1000
            transform
          "
        >
          <div class="relative">
            <img
              src="../../src/assets/images/fashion-images/background-slider2.png"
              alt=""
            />
            <div
              class="absolute bottom-0 right-0 mr-2 transform opacity-0"
              :class="{
                'transition -translate-y-2/4  duration-1000 ease-in-out opacity-100':
                  !isRun,
              }"
            >
              <div
                class="
                  text-white
                  flex
                  justify-center
                  items-center
                  text-lg
                  uppercase
                "
              >
                <span>Ưu đãi khi thanh toán online</span>
              </div>
              <div
                class="
                  text-white
                  font-bold
                  text-3xl
                  uppercase
                  flex
                  items-center
                  justify-end
                  mb-4
                "
              >
                <span>BLACK FRIDAY</span>
              </div>
              <div class="flex justify-end items-center">
                <button
                  class="
                    bg-pink-600
                    text-white text-sm
                    font-bold
                    rounded-sm
                    py-2.5
                    px-6
                  "
                >
                  ĐẾN NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/5 relative">
        <div>
          <div class="mb-14">
            <img src="../../src/assets/images/fashion-images/big.png" alt="" />
          </div>
          <div class="">
            <img src="../../src/assets/images/fashion-images/bee.png" alt="" />
          </div>
        </div>
        <div
          class="
            absolute
            top-0
            left-0
            opacity-0
            transition
            duration-1000
            delay-1000
          "
          :class="{ 'opacity-100': isRun }"
        >
          <div class="mb-14">
            <img
              src="../../src/assets/images/fashion-images/cinema.png"
              alt=""
            />
          </div>
          <div class="">
            <img
              src="../../src/assets/images/fashion-images/big-sale.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-md pb-28">
      <div class="grid grid-cols-5 gap-8">
        <router-link
          v-for="item in categories"
          :to="'/categories/' + item.slug"
          :key="item._id"
          :class="item.color"
          class="
            group
            p-8
            text-white
            bg-teal
            rounded-md
            hover:shadow-3xl
            transition
            delay-75
            duration-200
            ease-in-out
            transform
            hover:-translate-y-1 hover:scale-100
          "
        >
          <div class="flex justify-center">
            <i
              class="fa-2x text-white transition delay-100"
              :class="item.icon"
            ></i>
          </div>
          <div
            class="
              text-white
              mt-2
              font-semibold
              text-center
              whitespace-nowrap
              transition
              delay-100
            "
          >
            {{ item.name }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isRun: true,
      isTextRun: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.isRun = !this.isRun;
    }, 5000);
  },
  created() {
    this.getAllCategories();
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["getAllCategories"]),
  },
};
</script>
