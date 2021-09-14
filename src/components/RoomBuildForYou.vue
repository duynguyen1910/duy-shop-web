<template>
  <div>
    <!-- <img class="w-2/5" src="../assets/images/products/living-room.png" /> -->
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
              "
              :class="{
                'transform scale-100 transition duration-700 ease-out': isScale,
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
                src="../assets/images/products/living-room.png"
                width="230"
                height="230"
              />
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              text-gray-900
              uppercase
              font-semibold
              text-lg
            "
          >
            <span>Phòng Khách</span>
          </div>
          <div class="text-gray-500 text-sm">
            Không gian phòng khách là nơi quan trọng nhất trong ngôi nhà, nếu
            không chú ý đến phòng khách tức là bạn đã thất bại trong việc sáng
            tạo không gian nội thất trong gia đình
          </div>
          <div class="flex justify-center items-center">
            <button
              class="
                text-white text-sm
                bg-orange-600
                rounded
                py-2
                px-4
                hover:bg-orange-800
                transition
                duration-100
              "
            >
              Xem Thêm
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
                scale-50
              "
              :class="{
                'transform scale-100 transition duration-700 ease-out': isScale,
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
                src="../assets/images/products/bedroom.png"
                width="230"
                height="230"
              />
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              text-gray-900
              uppercase
              font-semibold
              text-lg
            "
          >
            <span>Phòng Ngủ</span>
          </div>
          <div class="text-gray-500 text-sm">
            Phòng ngủ không chỉ là nơi ta nghỉ ngơi sau một ngày làm việc mệt
            nhọc, là nơi lấy lại năng lượng cho một ngay hoạt động hết công
            suất, là không gian bạn sẽ gắn bó nhiều nhất trong ngôi nhà của
            chính mình.
          </div>
          <div class="flex justify-center items-center">
            <button
              class="
                text-white text-sm
                bg-pink-600
                rounded
                py-2
                px-4
                hover:bg-pink-800
                transition
                duration-100
              "
            >
              Xem Thêm
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
                scale-50
              "
              :class="{
                'transform scale-100 transition duration-700 ease-out': isScale,
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
                src="../assets/images/products/dining-room.png"
                width="230"
                height="230"
              />
            </div>
          </div>
          <div
            class="
              flex
              justify-center
              items-center
              text-gray-900
              uppercase
              font-semibold
              text-lg
            "
          >
            <span>Phòng Ăn</span>
          </div>
          <div class="text-gray-500 text-sm">
            Phòng ăn là nơi sum họp, kết nối các thành viên trong gia đình, nên
            việc thiết kế một mẫu phòng ăn đẹp rất quan trọng. Xem ngay các mẫu
            thiết kế phòng ăn đẹp nhất tại đây
          </div>
          <div class="flex justify-center items-center">
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
              Xem Thêm
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
      if (window.scrollY > 800) {
        this.isScale = true;
      }
    },
  },
};
</script>

<style></style>
