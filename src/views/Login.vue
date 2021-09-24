<template>
  <div>
    <div class="flex justify-between items-center px-80 my-4">
      <div class="flex items-center">
        <router-link to="/">
          <div class="flex items-center">
            <img
              class="
                background-size:
                cover;
                background-repeat:
                no-repeat;
                background-position:
                center
                center;
              "
              src="../assets/images/logos/logo-shop2.png"
              width="100"
              height="100"
            />
            <span class="text-gray-600 font-cursive text-3xl ml-1">Duy</span>
            <div class="text-pink-600 font-cursive text-3xl">Shop</div>
          </div>
        </router-link>
        <div class="text-3xl ml-7 font-semibold text-pink-600">Login</div>
      </div>
      <span class="text-pink-600 text-sm">Cần trợ giúp?</span>
    </div>
    <div class="mx-auto px-80 bg-violetcustoms">
      <div class="w-full h-full flex justify-center items-center">
        <div>
          <img
            class="
              background-size:
              cover;
              background-repeat:
              no-repeat;
              background-position:
              center
              center;
            "
            src="../assets/images/logos/layout-auth.jpg"
          />
        </div>
        <div>
          <div class="border bg-white rounded-lg p-16 shadow-xl">
            <form @submit.prevent="onSubmit(user)">
              <div class="text-3xl my-4">Login</div>
              <input
                v-model="user.email"
                class="
                  border
                  rounded
                  p-2
                  w-full
                  text-sm
                  my-4
                  focus:outline-none
                  focus:ring-1
                  focus:ring-pink-400
                  focus:border-pink-600
                  border-gray-200
                "
                type="email"
                placeholder="Email"
              />
              <input
                v-model="user.password"
                class="
                  border
                  rounded
                  p-2
                  w-full
                  text-sm
                  my-4
                  focus:outline-none
                  focus:ring-1
                  focus:ring-pink-400
                  focus:border-pink-600
                  border-gray-200
                "
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                class="
                  rounded
                  w-full
                  p-2
                  my-4
                  uppercase
                  text-white
                  bg-pink-600
                  transition
                  text-sm
                  hover:bg-pink-800
                  focus:outline-none
                  focus:ring-2
                  focus:ring-pink-600
                  focus:ring-opacity-50
                "
              >
                Login
              </button>
              <div class="flex justify-between">
                <a class="text-blue-500 text-xs" href="">Forgot password</a>
                <a class="text-blue-500 text-xs" href="">Login by sms</a>
              </div>
              <div class="flex items-center mt-2">
                <div class="w-full h-px bg-gray-400"></div>
                <div class="uppercase px-3.5 text-xs text-gray-400">Or</div>
                <div class="w-full h-px bg-gray-400"></div>
              </div>
              <div class="flex justify-between my-8">
                <button
                  class="
                    p-2
                    flex flex-1
                    items-center
                    bg-blue-500
                    rounded
                    justify-around
                  "
                >
                  <div class="mr-0.5">
                    <i class="fab fa-facebook fa-lg text-white"></i>
                  </div>
                  <div class="text-white text-sm">Facebook</div>
                </button>
                <button
                  class="
                    p-2
                    flex flex-1
                    items-center
                    bg-black
                    mx-3
                    rounded
                    justify-around
                  "
                >
                  <div class="mr-0.5">
                    <i class="fab fa-apple fa-lg text-white"></i>
                  </div>
                  <div class="text-white text-sm">Apple</div>
                </button>
                <button
                  class="
                    p-2
                    flex flex-1
                    items-center
                    bg-blue-500
                    rounded
                    justify-around
                  "
                >
                  <div class="mr-0.5">
                    <i class="fab fa-google fa-lg text-white"></i>
                  </div>
                  <div class="text-white text-sm">Google</div>
                </button>
              </div>
              <div class="my-4 text-center">
                <span class="text-gray-400 text-sm mr-1"
                  >You do not know DuyShop?</span
                >
                <router-link to="/register" class="text-pink-600 text-sm"
                  >Sign up</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- failed toaster -->
    <div
      v-show="failedToaster"
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
                  {{ getMessageLoginFailed.message }}
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
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => {
    return {
      failedToaster: false,
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUserData", "getAuth", "getMessageLoginFailed"]),
  },
  methods: {
    ...mapActions(["requestLogin"]),
    async onSubmit(user) {
      await this.requestLogin(user);
      if (this.getAuth) {
        this.$router.push("/");
      } else {
        this.failedToaster = true;
        setTimeout(() => {
          this.failedToaster = false;
        }, 3000);
      }
      this.user.email = "";
      this.user.password = "";
    },
  },
};
</script>
