<template>
  <div class="px-80 flex justify-between items-center py-28">
    <div class="space-y-8">
      <span class="text-gray-600 font-cursive text-2xl ml-0.5">Duy</span>
      <span class="text-pink-600 font-cursive text-2xl">Shop</span>
      <div class="border-b-1 text-sm pb-4">
        <div>
          <span class="text-gray-900 mr-4">Weekdays:</span>
          <span class="text-gray-500">08:00am - 08:00pm</span>
        </div>
        <div>
          <span class="text-gray-900 mr-4">Weekends:</span>
          <span class="text-gray-500">10:00am - 06:00pm</span>
        </div>
      </div>
      <div class="text-sm flex">
        <span class="text-gray-900 mr-4">Get Social</span>
        <div class="flex justify-between items-center space-x-3">
          <i class="fab fa-telegram-plane"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook-f"></i>
        </div>
      </div>
    </div>
    <div>
      <span class="text-2xl font-semibold text-gray-800">CONTACTS</span>
      <div class="text-sm space-y-4 mt-8">
        <div class="flex">
          <span class="mr-4"><Location class="text-pink-600" /></span>
          <span
            >3, Trung Son Residential Area, Binh Chach District,
            <br />
            Ho Chi Minh City, Viet Nam</span
          >
        </div>
        <div class="flex">
          <span class="mr-4">
            <Phone class="text-pink-600" />
          </span>
          <span>(+84) 923426248</span>
        </div>
        <div class="flex">
          <span class="mr-4">
            <Symbol class="text-pink-600" />
          </span>
          <span>duynguyen@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Location from "./icons/Location.vue";
import Phone from "./icons/Phone.vue";
import Symbol from "./icons/Symbol.vue";
export default {
  components: {
    Location,
    Phone,
    Symbol,
  },
};
</script>

<style></style>
