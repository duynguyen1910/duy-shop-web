<template>
  <div class="-mt-2">
    <div class="text-pink-600 text-3xl font-semibold mb-7 tracking-widest">
      Danh Mục
    </div>
    <div class="bg-white rounded-md shadow-xl p-5">
      <div class="grid grid-cols-5 gap-8">
        <div
          v-for="item in categorys"
          :key="item._id"
          class="
            group
            p-8
            hover:bg-pink-600
            rounded-md
            hover:shadow-3xl
            transition
            delay-100
            duration-400
            ease-in-out
            transform
            hover:-translate-y-1
            hover:scale-110
          "
        >
          <div class="flex justify-center">
            <i
              class="
                fa-2x
                text-gray-500
                group-hover:text-white
                transition
                delay-100
              "
              :class="item.icon"
            ></i>
          </div>
          <div
            class="
              text-gray-600
              group-hover:text-white
              mt-2
              text-center
              whitespace-nowrap
              transition
              delay-100
            "
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.getAllCategogys();
  },
  computed: {
    ...mapGetters(["categorys"]),
  },
  methods: {
    ...mapActions(["getAllCategogys"]),
  },
};
</script>