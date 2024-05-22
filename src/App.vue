<script setup>
import { ref, onMounted } from "vue";
import DesktopNavigation from "./components/DesktopNavigation.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import MobileMenu from "./components/MobileMenu.vue";

let isMobile = ref(Boolean);
let isSticky = ref(false);
const widthBreakpoint = ref(768); //value in pixels

const checkWindowSize = () => {
  //Responsive for checking size of the browser window
  isMobile.value = window.innerWidth < widthBreakpoint.value;
};

onMounted(() => {
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});
</script>

<template>
  <div id="app">
    <nav>
      <header :class="{ sticky: isSticky }">
        <component :is="isMobile ? MobileNavigation : DesktopNavigation" />
      </header>
    </nav>
    <MobileMenu />
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-top-highlight-color: transparent;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #b0b0b0;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  line-height: normal;
  color: #fff;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 34px;
}

h3 {
  font-size: 26px;
}

h4 {
  font-size: 20px;
}

ul li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

p {
  font-size: 16px;
  color: #fff;
  letter-spacing: 1;
  line-height: 2;
}

img {
  max-width: 100%;
}
</style>
