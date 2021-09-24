<template>
  <div
    class="
    fixed
      px-80
      py-3
      bg-bgcontent
      p-1
      top-0
      left-0
      right-0
      z-50
      border-b-1
      shadow-sm
      duration-700
    "
  >
    <div class="flex justify-between items-center">
      <router-link to="/">
        <div class="flex items-center mr-44">
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
                border-1
                p-2.5
                rounded-sm
                text-sm
                focus:outline-none
                focus:ring-1
                focus:ring-pink-600
                focus:border-pink-600
                border-gray-200
              "
              placeholder="Search..."
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
        <router-link to="/cart">
          <div class="relative">
            <div
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
            </div>
            <div
              v-if="cart.length > 0"
              class="
                absolute
                right-0
                top-0
                bg-amber-200
                py-0.5
                px-2.5
                text-xs
                rounded-full
                text-amber-600
                font-bold
                shadow-lg
                transform
                translate-x-2/4
                -translate-y-2/4
              "
            >
              {{ cart.length }}
            </div>
          </div>
        </router-link>
        <div v-if="getAuth">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="
                  group
                  flex
                  items-center
                  ml-5
                  hover:shadow-inner
                  transition
                  hover:bg-bgcontenthover
                  rounded-full
                  p-1
                "
              >
                <div
                  class="rounded-full overflow-hidden flex items-center mr-1"
                >
                  <img
                    src="../assets/images/products/user.png"
                    width="137"
                    height="137"
                  />
                </div>
                <span
                  class="
                    whitespace-nowrap
                    text-pink-600
                    font-semibold
                    transition
                    delay-75
                  "
                  >{{ lastName }}</span
                >
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="
                  absolute
                  right-0
                  w-56
                  mt-2
                  origin-top-right
                  bg-white
                  divide-y divide-gray-100
                  rounded-md
                  shadow-lg
                  ring-1 ring-gray-600 ring-opacity-5
                  focus:outline-none
                "
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-pink-600 text-white' : 'text-gray-600',
                        'group flex rounded-md items-center w-full px-4 py-2 text-sm font-semibold',
                      ]"
                    >
                      <User
                        :active="active"
                        aria-hidden="true"
                        class="w-6 h-6 mr-2 text-pink-400"
                      />
                      Profile
                    </button>
                  </MenuItem>
                </div>
                <router-link to="/purchase">
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-pink-600 text-white' : 'text-gray-600',
                          'group flex rounded-md items-center w-full px-4 py-2 text-sm font-semibold',
                        ]"
                      >
                        <Purchase
                          :active="active"
                          aria-hidden="true"
                          class="w-6 h-6 mr-2 text-pink-400"
                        />
                        Purchase
                      </button>
                    </MenuItem>
                  </div>
                </router-link>

                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-pink-600 text-white' : 'text-gray-600',
                        'group flex rounded-md items-center w-full px-4 py-2 text-sm font-semibold',
                      ]"
                    >
                      <Logout
                        :active="active"
                        aria-hidden="true"
                        class="w-6 h-6 mr-2 text-pink-400"
                      />
                      Sign out
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <template v-else>
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
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import ShoppingCart from "./icons/ShoppingCart.vue";
import Purchase from "./icons/Purchase.vue";
import Search from "./icons/Search.vue";
import User from "./icons/User.vue";
import Logout from "./icons/Logout.vue";
import { mapActions, mapGetters } from "vuex";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
export default {
  data() {
    return {
      onScroll: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  components: {
    ShoppingCart,
    Search,
    User,
    Logout,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Purchase,
  },
  computed: {
    ...mapGetters(["getAuth", "cart"]),
    lastName() {
      const fullName = window.localStorage.getItem("fullName");
      if (fullName) {
        const nameArray = fullName.split(" ");
        return nameArray[nameArray.length - 1];
      }
      return "";
    },
  },
  created() {
    this.getCart();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions(["getCart"]),
    handleScroll() {
      if (window.scrollY > 300) {
        this.onScroll = !this.onScroll;
      }
    },
  },
};
</script>
