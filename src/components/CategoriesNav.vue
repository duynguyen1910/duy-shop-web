<template>
  <div class="-mt-2">
    <div class="rounded-md pb-28">
      <div class="grid grid-cols-5 gap-8">
        <router-link
          v-for="item in categories"
          :to="'/categories/' + item.slug"
          :key="item._id"
          :class="item.color"
          class="
            group
            p-8
            text-white
            bg-teal
            rounded-md
            hover:shadow-3xl
            transition
            delay-75
            duration-200
            ease-in-out
            transform
            hover:-translate-y-1 hover:scale-100
          "
        >
          <div class="flex justify-center">
            <i
              class="fa-2x text-white transition delay-100"
              :class="item.icon"
            ></i>
          </div>
          <div
            class="
              text-white
              mt-2
              font-semibold
              text-center
              whitespace-nowrap
              transition
              delay-100
            "
          >
            {{ item.name }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {

  // mounted() {
  //   setInterval(() => {
  //     this.isRun = !this.isRun;
  //   }, 5000);
    
  // },
  created() {
    this.getAllCategories();
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["getAllCategories"]),
  },
};
</script>
