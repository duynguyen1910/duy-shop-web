<template>
  <div class="px-80 py-3 bg-bgcontent p-1 fixed top-0 left-0 right-0">
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
      <div class="ml-24 flex">
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
              hover:bg-pink-800
            "
          >
            Đăng nhập
          </div>
        </router-link>
        <router-link to="/login">
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
export default {};
</script>

<style>
</style>

