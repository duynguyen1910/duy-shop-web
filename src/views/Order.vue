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
                        Đơn mua
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
            text-gray-600
            font-semibold
          "
        >
          <div class="w-4/12 flex justify-center items-center">Sản Phẩm</div>
          <div class="w-4/12 flex justify-center items-center">Số Lượng</div>
          <div class="w-4/12 flex justify-center items-center">Số Tiền</div>
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
          <div class="flex items-center w-4/12 justify-around">
            <img
              class="rounded"
              width="100"
              height="100"
              :src="
                'http://localhost:3200/uploads/' + product.product.images[0]
              "
            />
            <div>
              <div class="rounded-full py-1.5 px-3 text-green-600 bg-green-200">
                {{ product.product.name }}
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center w-4/12">
            <div class="text-yellow-600 bg-yellow-200 rounded-full py-1.5 px-3">
              {{ product.amount }}
            </div>
          </div>

          <div class="flex justify-center items-center w-4/12">
            <div
              class="
                flex
                text-lightBlue-600
                bg-lightBlue-200
                rounded-full
                py-1.5
                px-3
              "
            >
              <span class="mr-0.5">₫</span>
              <div>
                {{
                  $filters.filterMoney(
                    product.product.promotionPrice
                      ? product.product.promotionPrice
                      : product.product.price * product.amount
                  )
                }}
              </div>
            </div>
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
            space-x-3
          "
        >
          <div class="text-pink-600 bg-pink-200 rounded-full py-1.5 px-3">
            Tổng Thanh Toán:
          </div>

          <div class="flex text-pink-600 bg-pink-200 rounded-full py-1.5 px-3">
            <span class="mr-0.5">₫</span>
            <div>
              {{ $filters.filterMoney(getProductOrdered.total) }}
            </div>
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
            Đặt Hàng
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
                  Đơn Hàng Đã Được Tạo
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
import Search from "../components/icons/Search.vue";
import Purchase from "../components/icons/Purchase.vue";
import User from "../components/icons/User.vue";
import Logout from "../components/icons/Logout.vue";
import { mapActions, mapGetters } from "vuex";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
export default {
  components: {
    Search,
    User,
    Logout,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Purchase,
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
