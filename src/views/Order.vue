<template>
  <div>
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
          <div class="flex items-center mr-20">
            <img
              src="../assets/images/logos/logo-shop2.png"
              width="80"
              height="80"
            />
            <span class="text-gray-600 font-cursive text-2xl ml-0.5">Duy</span>
            <div class="text-pink-600 font-cursive text-2xl">Shop</div>
          </div>
        </router-link>
        <div
          class="text-3xl whitespace-nowrap font-semibold ml-6 text-pink-600"
        >
          Đơn Hàng
        </div>
        <div class="w-full ml-80">
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
                  focus:border-pink-600 focus:ring-1 focus:ring-pink-600
                  border-gray-200
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
                    width="157"
                    height="157"
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
                        class="w-6 h-6 mr-2 text-pink-400 fill-current"
                      />
                      Hồ sơ
                    </button>
                  </MenuItem>
                </div>
                <router-link to="/order">
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-pink-600 text-white' : 'text-gray-600',
                          'group flex rounded-md items-center w-full px-4 py-2 text-sm font-semibold',
                        ]"
                      >
                        <ShoppingCart
                          :active="active"
                          aria-hidden="true"
                          class="w-6 h-6 mr-2 text-pink-400"
                        />
                        Đơn hàng
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
                        class="w-6 h-6 mr-2 text-pink-400 fill-current"
                      />
                      Đăng xuất
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <div class="bg-bgcontent px-80 pb-82 pt-35.75">
      <div class="bg-white">
        <div
          v-for="product in getProductOrdered"
          :key="product._id"
          class="flex"
        >
          <div>
            <img
              class="rounded"
              width="100"
              height="100"
              :src="
                'http://localhost:3100/uploads/' + product.product.images[0]
              "
            />
          </div>
          <div>
            {{ product.amount }}
          </div>
          <div>
            {{ product.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/icons/Search.vue";
import User from "../components/icons/User.vue";
import Logout from "../components/icons/Logout.vue";
import ShoppingCart from "../components/icons/ShoppingCart.vue";
import { mapGetters } from "vuex";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
export default {
  components: {
    Search,
    User,
    Logout,
    ShoppingCart,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  data() {
    return {};
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
};
</script>

<style></style>
