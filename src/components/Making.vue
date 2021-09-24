<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div class="flex items-center justify-center">
        <div class="space-y-5">
          <div class="flex items-center justify-center">
            <div
              class="
                bg-gradient-to-r
                from-purple-600
                via-pink-600
                to-red-600
                p-1
                rounded-full
                transform
                scale-50
                duration-700
                ease-in-out
                transition
                opacity-0
                delay-200
              "
              :class="{
                ' scale-100 opacity-100 ': isScale,
              }"
            >
              <img
                class="
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white
                  p-1
                "
                src="../assets/images/products/guitar1.jpeg"
                width="270"
                height="270"
              />
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              text-gray-800
              uppercase
              font-semibold
              text-lg
              transition
              delay-300
              transform
              duration-700
              ease-in-out
              ml-40
              opacity-0
            "
            :class="{
              '-translate-x-20 opacity-100': isScale,
            }"
          >
            <span>THE MATERIALS</span>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              transition
              transform
              duration-700
              ease-in-out
              scale-0
              opacity-0
              delay-200
            "
            :class="{
              'scale-100 opacity-100': isScale,
            }"
          >
            <div class="text-gray-500 text-sm">
              Guitars start as piles of wood. The backs and sides are usually
              made from sturdy hardwoods like mahogany, rosewood or maple.
            </div>
          </div>
          <div
            :class="{
              'translate-x-20 opacity-100': isScale,
            }"
            class="
              flex
              justify-center
              items-center
              transition
              delay-300
              transform
              duration-700
              ease-in-out
              mr-40
              opacity-0
            "
          >
            <button
              class="
                text-white text-sm
                bg-orange-600
                rounded
                py-2
                px-4
                hover:bg-orange-800
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="space-y-5">
          <div class="flex items-center justify-center">
            <div
              class="
                bg-gradient-to-r
                from-purple-600
                via-pink-600
                to-red-600
                p-1
                rounded-full
                transform
                scale-0
                transition
                duration-700
                ease-in-out
                opacity-0
                delay-200
              "
              :class="{
                'scale-100 opacity-100': isScale,
              }"
            >
              <img
                class="
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white
                  p-1
                "
                src="../assets/images/products/guitar2.jpeg"
                width="270"
                height="270"
              />
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              text-gray-800
              uppercase
              font-semibold
              text-lg
              transition
              delay-300
              transform
              duration-700
              ease-in-out
              ml-40
              opacity-0
            "
            :class="{
              '-translate-x-20 opacity-100': isScale,
            }"
          >
            <span>GLUING TOP AND BOTTOM</span>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              transition
              transform
              duration-700
              ease-in-out
              scale-0
              opacity-0
              delay-200
            "
            :class="{
              'scale-100 opacity-100': isScale,
            }"
          >
            <div class="text-gray-500 text-sm">
              This wood glue, Allen admits, isn’t so different from the white
              craft glue you probably have among your school supplies
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              transition
              delay-300
              transform
              duration-700
              ease-in-out
              mr-40
              opacity-0
            "
            :class="{
              'translate-x-20 opacity-100': isScale,
            }"
          >
            <button
              class="
                text-white text-sm
                bg-pink-600
                rounded
                py-2
                px-4
                hover:bg-pink-800
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="space-y-5">
          <div class="flex items-center justify-center">
            <div
              class="
                bg-gradient-to-r
                from-purple-600
                via-pink-600
                to-red-600
                p-1
                rounded-full
                transform
                scale-0
                transition
                duration-700
                ease-in-out
                opacity-0
                delay-200
              "
              :class="{
                ' scale-100 opacity-100': isScale,
              }"
            >
              <img
                class="
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white
                  p-1
                "
                src="../assets/images/products/guitar3.jpeg"
                width="270"
                height="270"
              />
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              text-gray-800
              uppercase
              font-semibold
              text-lg
              transition
              delay-300
              transform
              duration-700
              ease-in-out
              ml-40
              opacity-0
            "
            :class="{
              '-translate-x-20 opacity-100': isScale,
            }"
          >
            <span>FINAL INSPECTION</span>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              transition
              delay-200
              transform
              duration-700
              ease-in-out
              scale-0
              opacity-0
            "
            :class="{
              'scale-100 opacity-100': isScale,
            }"
          >
            <div class="text-gray-500 text-sm">
              Like a big crack appearing, but this is uncommon. Inspectors check
              that the guitar sounds good and is comfortable to play.
            </div>
          </div>

          <div
            class="
              flex
              justify-center
              items-center
              transition
              delay-300
              transform
              duration-700
              ease-in-out
              mr-40
              opacity-0
            "
            :class="{
              'translate-x-20 opacity-100': isScale,
            }"
          >
            <button
              class="
                text-white text-sm
                bg-violet-600
                rounded
                py-2
                px-4
                hover:bg-violet-800
                transition
                duration-100
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScale: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 750) {
        this.isScale = true;
      }
    },
  },
};
</script>
