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
        <div class="text-3xl ml-7 font-semibold text-pink-600">Sign Up</div>
      </div>
      <span class="text-pink-600 text-sm">Need help?</span>
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
        <div class="p-16">
          <div class="border bg-white rounded-lg w-123 p-20 shadow-xl">
            <form @submit.prevent="onSubmit(user)">
              <div class="text-3xl mb-4">Sign Up</div>
              <input
                v-model="user.fullName"
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
                type="text"
                placeholder="Full name"
              />
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
                  text-sm
                  hover:bg-pink-800
                  transition
                  focus:outline-none
                  focus:ring-2
                  focus:ring-pink-600
                  focus:ring-opacity-50
                "
              >
                Sign up
              </button>
              <div class="flex items-center mt-2">
                <div class="w-full h-px bg-gray-400"></div>
                <div class="uppercase px-3.5 text-xs text-gray-400">Or</div>
                <div class="w-full h-px bg-gray-400"></div>
              </div>
              <div class="flex justify-between my-6">
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
                    mx-3
                    items-center
                    bg-black
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
              <div class="mt-4 text-center">
                <span class="text-gray-400 text-sm mr-1"
                  >Do you already have an account?</span
                >
                <router-link to="/login" class="text-pink-600 text-sm"
                  >Login</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="toaster"
      class="
        mt-28
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
          shadow-lg
          rounded-lg
          pointer-events-auto
        "
      >
        <div class="rounded-lg shadow-xs overflow-hidden">
          <div class="py-4 px-6">
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
              <div class="ml-3 w-0 flex-1 pt-0.5 text-lg">
                <p class="text-sm font-medium text-gray-900">
                  Successful account registration
                </p>
                <router-link to="/login">
                  <p class="mt-2.5 text-sm font-bold text-pink-600">
                    Login
                  </p></router-link
                >
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
      toaster: false,
      user: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters({ mess: "getMessageRegisterSuccess" }),
  },
  methods: {
    ...mapActions(["requestRegister"]),
    async onSubmit(user) {
      await this.requestRegister(user);
      this.user.fullName = "";
      this.user.email = "";
      this.user.password = "";

      if (this.mess) {
        this.toaster = true;
      }
      setTimeout(() => {
        this.toaster = false;
      }, 5000);
    },
  },
};
</script>
<style lang="css" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
