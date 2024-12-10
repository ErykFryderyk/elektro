<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";


defineProps({
  slides: Array, // Zdjęcia do slidera i galerii
});

const galleryID = "swiper-gallery";
let lightbox = null;
const activeIndex = ref(null);
const swiperConfig = ref({
  modules: [Navigation, Pagination],
  spaceBetween: 10,
  pagination: { clickable: true },
  navigation: true,
  breakpoints: {
    // Mobile (1 image)
    0: {
      slidesPerView: 1,
    },
    // Tablet (2 images)
    768: {
      slidesPerView: 2,
    },
    // Desktop (3 images)
    1024: {
      slidesPerView: 3,
    },
  },
})

onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }
});

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
});

// Funkcja otwierająca galerię z klikniętym zdjęciem
function openGallery(index) {
  activeIndex.value = index;
  if (lightbox) {
    lightbox.loadAndOpen(index);
  }
}
</script>

<template>
  <div>
    <!-- Swiper slider -->
    <swiper v-bind="swiperConfig"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img
          :src="slide.thumbnailURL"
          :alt="'Slide ' + (index + 1)"
          style="width: 100%; height: auto; cursor: pointer"
          @click="openGallery(index)"
        />
      </swiper-slide>
    </swiper>

    <!-- Hidden Gallery for PhotoSwipe -->
    <div :id="galleryID" style="display: none">
      <a
        v-for="(slide, index) in slides"
        :key="index"
        :href="slide.largeURL"
        :data-pswp-width="slide.width"
        :data-pswp-height="slide.height"
      >
        <img :src="slide.thumbnailURL" alt="" />
      </a>
    </div>
  </div>
</template>
