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
        <div class="text-3xl ml-7">Đăng ký</div>
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
          <div class="border bg-white rounded-lg p-14 shadow-xl">
            <form @submit.prevent="onSubmit">
              <div class="text-3xl my-4">Đăng ký</div>
              <input
                class="
                  border
                  rounded
                  p-2
                  w-full
                  text-sm
                  my-4
                  focus:outline-none focus:ring-1 focus:ring-pink-400
                "
                type="number"
                placeholder="Số điện thoại"
              />
              <input
                class="
                  border
                  rounded
                  p-2
                  w-full
                  text-sm
                  my-4
                  focus:outline-none focus:ring-1 focus:ring-pink-400
                "
                type="password"
                placeholder="Mật khẩu"
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
                Đăng ký
              </button>
              <div class="flex items-center mt-2">
                <div class="w-full h-px bg-gray-400"></div>
                <div class="uppercase px-3.5 text-xs text-gray-400">Hoặc</div>
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
              <div class="my-2 text-center text-xs">
                <span class="text-gray-400"
                  >Bằng việc đăng kí, bạn đã đồng ý với DuyShop về</span
                >
                <div>
                  <router-link to=" /term-of-service"
                    ><span class="text-pink-600"
                      >Điều khoản dịch vụ</span
                    ></router-link
                  >
                  <span class="text-gray-400 mx-1">và</span>
                  <router-link to="/privacy-policy"
                    ><span class="text-pink-600"
                      >Chính sách bảo mật</span
                    ></router-link
                  >
                </div>
              </div>
              <div class="my-4 text-center">
                <span class="text-gray-400 text-sm mr-1"
                  >Bạn đã có tài khoản?</span
                >
                <router-link to="/login" class="text-pink-600 text-sm"
                  >Đăng nhập</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
