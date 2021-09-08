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
          Giỏ Hàng
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
            <div class="ml-7 flex justify-center items-center">Sản Phẩm</div>
          </div>
          <div class="w-1/12 flex justify-center items-center">Số Lượng</div>
          <div class="w-4/12 flex justify-center items-center">Số Tiền</div>
          <div class="w-1/12 flex justify-center items-center">Thao Tác</div>
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
              :src="'http://localhost:3100/uploads/' + item.product.images[0]"
            />
            <div class="rounded-full py-1.5 px-3 text-green-600 bg-green-200">
              {{ item.product.name }}
            </div>
          </div>

          <div class="flex justify-center items-center w-1/12">
            <div class="text-yellow-600 bg-yellow-200 rounded-full py-1.5 px-3">
              {{ item.amount }}
            </div>
          </div>
          <div class="flex justify-center items-center w-4/12">
            <div
              v-if="item.product.promotionPrice"
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
                {{ $filters.filterMoney(item.product.promotionPrice) }}
              </div>
            </div>
            <div
              v-else
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
              <div>{{ $filters.filterMoney(item.product.price) }}</div>
            </div>
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
              "
              @change="checkAll($event)"
            />
            <div class="bg-pink-200 text-pink-600 rounded-full py-2 px-4 mr-4">
              Chọn Tất Cả
            </div>
          </div>
          <div class="flex items-center justify-center w-2/12">
            <div
              class="
                text-lightBlue-600
                bg-lightBlue-200
                rounded-full
                py-1.5
                px-3
              "
            >
              Tổng Thanh Toán:
            </div>
          </div>
          <div class="flex items-center justify-center w-2/12">
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
                {{ $filters.filterMoney(cartTotalAmount) }}
              </div>
            </div>
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
              Mua Hàng
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
          <div class="text-gray-600 font-semibold mb-3">
            Giỏ hàng của bạn còn trống
          </div>
          <router-link to="/">
            <div class="flex justify-center">
              <button class="bg-pink-600 text-white py-3 px-10 rounded">
                Mua Ngay
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
                  Giỏ hàng của bạn còn trống !!!
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
                <p class="text-sm font-bold text-gray-900">Xóa thành công</p>
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
import Trash from "../components/icons/Trash.vue";
import User from "../components/icons/User.vue";
import Logout from "../components/icons/Logout.vue";
import ShoppingCart from "../components/icons/ShoppingCart.vue";
import { mapActions, mapGetters } from "vuex";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: {
    Search,
    Trash,
    User,
    Logout,
    ShoppingCart,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
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

<style></style>
