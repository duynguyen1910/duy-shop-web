<template>
  <div class="relative">
    <div>
      <div v-for="i in [currentIndex]" :key="i">
        <img
          :src="currentImg"
          class="w-full h-155 rounded-xl shadow-2xl select-none"
        />
      </div>
    </div>
    <div
      v-if="currentImg"
      class="
        absolute
        top-1/2
        left-1/2
        flex
        justify-center
        items-center
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <div class="space-y-6">
        <div
          :class="{
            'translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 0,
          }"
          class="
            flex
            items-center
            justify-center
            text-white
            font-cursive1 font-semibold
            text-2xl
            mr-48
            transform
            transition
            duration-700
            ease-in-out
            opacity-0
            delay-200
          "
        >
          <span>Welcome to DuyShop</span>
        </div>
        <div
          :class="{
            'scale-100 opacity-100':
              Math.abs(currentIndex) % this.images.length === 0,
          }"
          class="
            text-8xl text-pink-600
            font-bold
            transform
            transition
            duration-700
            scale-50
            flex
            items-center
            justify-center
            opacity-0
            ease-in-out
          "
        >
          <span>PRODUCTS</span>
        </div>
        <div
          class="
            text-white
            font-bold
            text-3xl
            flex
            items-center
            justify-center
            transform
            transition
            duration-700
            ml-48
            opacity-0
            ease-in-out
            delay-200
          "
          :class="{
            '-translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 0,
          }"
        >
          <span>GROWN WITH LOVE</span>
        </div>
        <div class="flex justify-center items-center">
          <button
            :class="{
              '-translate-y-1/2 opacity-100':
                Math.abs(currentIndex) % this.images.length === 0,
            }"
            class="
              text-white
              bg-pink-600
              py-4
              px-9
              rounded
              shadow
              transform
              transition
              duration-700
              font-bold
              mt-10
              opacity-0
              ease-in-out
              delay-300
            "
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="currentImg"
      class="
        absolute
        top-1/2
        left-1/2
        flex
        justify-center
        items-center
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <div class="space-y-6">
        <div
          :class="{
            'translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 1,
          }"
          class="
            flex
            items-center
            justify-center
            text-white
            font-cursive1 font-semibold
            text-2xl
            mr-48
            transform
            transition
            duration-700
            ease-in-out
            opacity-0
            delay-200
          "
        >
          <span>Dedicated Service</span>
        </div>
        <div
          :class="{
            'scale-100 opacity-100':
              Math.abs(currentIndex) % this.images.length === 1,
          }"
          class="
            text-8xl text-violet-600
            font-bold
            transform
            transition
            duration-700
            scale-50
            flex
            items-center
            justify-center
            opacity-0
            ease-in-out
          "
        >
          <span>SATISFACTION</span>
        </div>
        <div
          class="
            text-white
            font-bold
            text-3xl
            flex
            items-center
            justify-center
            transform
            transition
            duration-700
            ml-48
            opacity-0
            ease-in-out
            delay-200
          "
          :class="{
            '-translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 1,
          }"
        >
          <span>ONLY ONE PURPOSE</span>
        </div>
        <div class="flex justify-center items-center">
          <button
            :class="{
              '-translate-y-1/2 opacity-100':
                Math.abs(currentIndex) % this.images.length === 1,
            }"
            class="
              text-white
              bg-violet-600
              py-4
              px-9
              rounded
              shadow
              transform
              transition
              duration-700
              font-bold
              mt-10
              opacity-0
              ease-in-out
              delay-300
            "
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="currentImg"
      class="
        absolute
        top-1/2
        left-1/2
        flex
        justify-center
        items-center
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <div class="space-y-6">
        <div
          :class="{
            'translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 2,
          }"
          class="
            flex
            items-center
            justify-center
            text-white
            font-cursive1 font-semibold
            text-2xl
            mr-48
            transform
            transition
            duration-700
            ease-in-out
            opacity-0
            delay-200
          "
        >
          <span>Saving is now your Duty</span>
        </div>
        <div
          :class="{
            'scale-100 opacity-100':
              Math.abs(currentIndex) % this.images.length === 2,
          }"
          class="
            text-8xl text-orange-600
            font-bold
            transform
            transition
            duration-700
            scale-50
            flex
            items-center
            justify-center
            opacity-0
            ease-in-out
          "
        >
          <span>SAVING</span>
        </div>
        <div
          class="
            text-white
            font-bold
            text-3xl
            flex
            items-center
            justify-center
            transform
            transition
            duration-700
            ml-48
            opacity-0
            ease-in-out
            delay-200
          "
          :class="{
            '-translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 2,
          }"
        >
          <span>SAVING IS NOW YOUR</span>
        </div>
        <div class="flex justify-center items-center">
          <button
            :class="{
              '-translate-y-1/2 opacity-100':
                Math.abs(currentIndex) % this.images.length === 2,
            }"
            class="
              text-white
              bg-orange-600
              py-4
              px-9
              rounded
              shadow
              transform
              transition
              duration-700
              font-bold
              mt-10
              opacity-0
              ease-in-out
              delay-300
            "
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="currentImg"
      class="
        absolute
        top-1/2
        left-1/2
        flex
        justify-center
        items-center
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <div class="space-y-6">
        <div
          :class="{
            'translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 3,
          }"
          class="
            flex
            items-center
            justify-center
            text-white
            font-cursive1 font-semibold
            text-2xl
            mr-48
            transform
            transition
            duration-700
            ease-in-out
            opacity-0
            delay-200
          "
        >
          <span>To Anywhere In The World</span>
        </div>
        <div
          :class="{
            'scale-100 opacity-100':
              Math.abs(currentIndex) % this.images.length === 3,
          }"
          class="
            text-8xl text-blue-600
            font-bold
            transform
            transition
            duration-700
            scale-50
            flex
            items-center
            justify-center
            opacity-0
            ease-in-out
          "
        >
          <span>BRANCHS</span>
        </div>
        <div
          class="
            text-white
            font-bold
            text-3xl
            flex
            items-center
            justify-center
            transform
            transition
            duration-700
            ml-48
            opacity-0
            ease-in-out
            delay-200
          "
          :class="{
            '-translate-x-24 opacity-100':
              Math.abs(currentIndex) % this.images.length === 3,
          }"
        >
          <span>FROM DUYSHOP WITH LOVE</span>
        </div>
        <div class="flex justify-center items-center">
          <button
            :class="{
              '-translate-y-1/2 opacity-100':
                Math.abs(currentIndex) % this.images.length === 3,
            }"
            class="
              text-white
              bg-blue-600
              py-4
              px-9
              rounded
              shadow
              transform
              transition
              duration-700
              font-bold
              mt-10
              opacity-0
              ease-in-out
              delay-300
            "
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
    <a
      class="
        cursor-pointer
        absolute
        top-1/2
        transform
        -translate-y-1/2
        w-auto
        p-4
        text-white
        font-bold
        transition
        duration-700
        ease-in-out
        select-none
        rounded-r-lg
        hover:bg-pink-600
      "
      @click="prev"
      href="#"
      >&#10094;</a
    >
    <a
      class="
        absolute
        top-1/2
        transform
        -translate-y-1/2
        right-0
        w-auto
        p-4
        text-white
        font-bold
        transition
        duration-700
        ease-in-out
        select-none
        rounded-l-lg
        hover:bg-pink-600
      "
      @click="next"
      href="#"
      >&#10095;</a
    >
  </div>
</template>

<script>
export default {
  name: "Slider",
  components: {},
  data() {
    return {
      images: [
        "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://www.businessprocessincubator.com/wp-content/uploads/thumbnails/thumbnail-127401.jpg",
        "https://images.pexels.com/photos/6719878/pexels-photo-6719878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/227433/pexels-photo-227433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(() => {
        this.next();
      }, 7000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style></style>
