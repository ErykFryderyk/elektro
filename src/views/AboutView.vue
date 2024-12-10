<script setup>
import { ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import FooterElektro from "../components/FooterElektro.vue";
import TheTimeLine from "@/components/TheTimeLine.vue";

const timeLineData = ref([
  {
    year: 2010,
    title: 'Rozpoczęcie firmy',
    srcImg: '../assets/img/af6990db72693c8c4a8c981d5a92f0c3.jpeg',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
  },
  {
    year: 2011,
    title: 'Rozbudowa firmy eko plast',
    srcImg: 'af6990db72693c8c4a8c981d5a92f0c3.jpeg',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
  },
  {
    year: 2012,
    title: 'Rozbudowa firmy eko plast',
    srcImg: 'af6990db72693c8c4a8c981d5a92f0c3.jpeg',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
  },
  {
    year: 2013,
    title: 'Rozbudowa firmy eko plast',
    srcImg: 'af6990db72693c8c4a8c981d5a92f0c3.jpeg',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
  },
]);
</script>

<template>
  <div class="about">
    <div class="container">
      <div class="">
        <div class="">
          <p style="font-size: 16px; color: #797979; margin-bottom: 24px">
            Strona główna > O nas
          </p>
        </div>
        <!-- eslint-disable-next-line -->
        <h1 class="title title--h2 title--bold">O nas</h1>
        <div class="underline underline--mb"></div>
        <div class="image-wrapper">
          <div class="rectangle rectangle--yellow"></div>
          <img
            src="../assets/img/b13d1eb03bc2495b181658cfbf381fad.jpeg"
            alt="services-hero-image"
          />
        </div>

        <h2 class="title title--h2 title--uppercase title--small title--medium">
          PHU ELEKTRO Rafał Kostrzewa
        </h2>
        <!-- eslint-disable-next-line -->
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="">
        <!-- eslint-disable-next-line -->
        <h1 class="title title--h2 title--bold">Nasz skład</h1>
        <div class="underline underline--mb"></div>

        <div class="background-for-img">
          <img src="" alt="boss-image" />
        </div>
        <h3>Rafał Kostrzewa</h3>
        <!-- eslint-disable-next-line -->
        <p class="text text--mb-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div class="background-for-img">
          <img src="" alt="worker-image" />
        </div>
        <h class="title title--h2">Ryszard Kowalski</h>
        <!-- eslint-disable-next-line -->
        <p class="text text--mb-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="">
        <!-- eslint-disable-next-line -->
        <h1 class="title title--h2 title--bold">Nasza oś czasu</h1>
        <div class="underline underline--mb"></div>
      </div>
      <div class="timeline">
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
