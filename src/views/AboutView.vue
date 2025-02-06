<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScrollAnimations, clearScrollTriggers, slideInFrom } from '@/assets/utils/useScrollAnimations';
import CustomButton from "@/components/CustomButton.vue";
import FooterElektro from "../components/FooterElektro.vue";
import TheTimeLine from "@/components/TheTimeLine.vue";
import SplitSection from "@/components/SplitSection.vue";

const timeLineData = ref([
  {
    year: 2018,
    title: "Rozpoczęcie firmy",
    srcImg: "../assets/img/af6990db72693c8c4a8c981d5a92f0c3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    year: 2019,
    title: "Rozbudowa firmy eko plast",
    srcImg: "af6990db72693c8c4a8c981d5a92f0c3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    year: 2020,
    title: "Rozbudowa firmy eko plast",
    srcImg: "af6990db72693c8c4a8c981d5a92f0c3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    year: 2022,
    title: "Rozbudowa firmy eko plast",
    srcImg: "af6990db72693c8c4a8c981d5a92f0c3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

  },
  {
    year: 2022,
    title: "Rozbudowa firmy eko plast",
    srcImg: "af6990db72693c8c4a8c981d5a92f0c3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

  },
  {
    year: 2022,
    title: "Rozbudowa firmy eko plast",
    srcImg: "af6990db72693c8c4a8c981d5a92f0c3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

  },
]);

onMounted(() => {
  // Wywołanie funkcji z selektorem elementów do animacji
  useScrollAnimations('.slide-up');
  slideInFrom('.slide-in');
});

onUnmounted(() => {
  // Czyszczenie instancji ScrollTrigger po zniszczeniu komponentu
  clearScrollTriggers();
});
</script>

<template>
  <div class="about">
    <div class="container">
      <SplitSection>
        <template #left>
          <div class="">
            <div class="">
              <p style="font-size: 16px; color: #797979; margin-bottom: 24px">
                Strona główna > O nas
              </p>
            </div>
            <!-- eslint-disable-next-line -->
            <h1 class="title title--h2 title--bold slide-up">O nas</h1>
            <div class="underline underline--mb"></div>

            <h2
              class="title title--h2 title--uppercase title--small title--medium"
            >
              PHU ELEKTRO Rafał Kostrzewa
            </h2>
            <!-- eslint-disable-next-line -->
            <p class="text slide-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </template>
        <template #right>
          <div class="image-wrapper">
            <div class="rectangle rectangle--yellow"></div>
            <img
              src="../assets/img/b13d1eb03bc2495b181658cfbf381fad.jpeg"
              alt="services-hero-image"
            />
          </div>
        </template>
      </SplitSection>
      <div class="">
        <!-- eslint-disable-next-line -->
        <h1 class="title title--h2 title--bold slide-up">Nasz skład</h1>
        <div class="underline underline--mb slide-up"></div>

        <SplitSection>
          <template #left>
            <div class="background-for-img">
              <img src="" alt="boss-image" />
            </div>
          </template>
          <template #right>
            <h3 class="slide-up">Rafał Kostrzewa</h3>
            <!-- eslint-disable-next-line -->
            <p class="text text--mb-40 slide-up">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </template>
        </SplitSection>

        <SplitSection>
          <template #right>
            <div class="background-for-img">
              <img src="" alt="worker-image" />
            </div>
          </template>
          <template #left>
            <h class="title title--h2">Ryszard Kowalski</h>
            <!-- eslint-disable-next-line -->
            <p class="text text--mb-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </template>
        </SplitSection>
      </div>
      <div class="">
        <!-- eslint-disable-next-line -->
        <h1 class="title title--h2 title--bold">Nasza oś czasu</h1>
        <div class="underline underline--mb"></div>
      </div>
      <div class="">
        <TheTimeLine :data="timeLineData" />
      </div>
      <div class="video">
        <img src="../assets/img/video.png" />
      </div>
      <div class="">
        <!-- eslint-disable-next-line -->
        <h2 class="title title--h2">Skontaktuj się z nami!</h2>
        <div class="underline underline--mb"></div>
        <p class="text">
          <!-- eslint-disable-next-line -->
          Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach
          8.00-16.00
        </p>
        <CustomButton class="bg-granat">Skontaktuj się</CustomButton>
      </div>
    </div>
    <FooterElektro />
  </div>
</template>
<style lang="scss" scoped>
.about {
  background: #fff;
  padding-top: 10px;
}

h2 {
  color: #00405b;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}
.video {
  margin: 80px 0;
}
</style>
