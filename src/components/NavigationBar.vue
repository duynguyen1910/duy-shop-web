<template>
  <div
    class="
      px-80
      py-3
      bg-bgcontent
      p-1
      fixed
      top-0
      left-0
      right-0
      z-50
      border-b-1
      shadow-sm
      duration-700
    "
    id="navbar"
  >
    <div class="flex justify-between items-center">
      <router-link to="/">
        <div class="flex items-center pr-44">
          <img
            src="../assets/images/logos/logo-shop2.png"
            width="80"
            height="80"
          />
          <span class="text-gray-600 font-cursive text-2xl ml-0.5">Duy</span>
          <div class="text-pink-600 font-cursive text-2xl">Shop</div>
        </div>
      </router-link>
      <div class="w-full">
        <form @submit.prevent="onSubmit">
          <div class="relative">
            <input
              type="text"
              class="
                w-full
                border
                p-2.5
                rounded-sm
                text-sm
                focus:outline-none focus:ring-1 focus:ring-pink-600
              "
              placeholder="Tìm kiếm trên DuyShop"
            />
            <div class="absolute inset-y-0 right-0 p-1">
              <button
                class="
                  bg-pink-600
                  py-2
                  px-6
                  rounded-sm
                  h-8.5
                  transition
                  hover:bg-pink-800
                  focus:outline-none
                  focus:ring-2
                  focus:ring-pink-600
                  focus:ring-opacity-50
                "
                type="submit"
              >
                <Search />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="ml-24 flex">
        <button
          class="
            bg-pink-600
            whitespace-nowrap
            py-1.75
            px-6
            rounded-sm
            transition
            hover:bg-pink-800
            focus:outline-none
            focus:ring-2
            focus:ring-pink-600
            focus:ring-opacity-50
          "
        >
          <ShoppingCart />
        </button>
        <router-link to="/login">
          <div
            class="
              bg-pink-600
              text-white
              whitespace-nowrap
              ml-5
              py-1.75
              px-3.5
              text-sm
              rounded-sm
              transition
              hover:bg-pink-800
            "
          >
            Đăng nhập
          </div>
        </router-link>
        <router-link to="/register">
          <div
            class="
              bg-pink-600
              text-white
              whitespace-nowrap
              ml-2
              py-1.75
              px-3.5
              text-sm
              rounded-sm
              transition
              hover:bg-pink-800
            "
          >
            Đăng ký
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ShoppingCart from "./icons/ShoppingCart.vue";
import Search from "./icons/Search.vue";
export default {
  components: {
    ShoppingCart,
    Search,
  },
  created() {
    this.onScroll();
  },
  methods: {
    onScroll: () => {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-104px";
        }
        prevScrollpos = currentScrollPos;
      };
    },
  },
};
</script>
