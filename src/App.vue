<script setup>
import { ref, onMounted } from "vue";
import DesktopNavigation from "./components/DesktopNavigation.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import CookieConsent from "./components/CookieConsent.vue";

const isMobile = ref(Boolean); //condtional mobile/desktop navigation
const isSticky = ref(true); //variable for nav-bar , sticky to top or not
const widthBreakpoint = ref(768); //pixels value

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
    <router-view></router-view>
    <CookieConsent />
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import "./style/style.scss"
</style>
