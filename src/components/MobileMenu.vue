<script setup>
import { ref } from "vue";

const menuItems = ref([
  { string: "Strona główna", path: "/" },
  { string: "Nasza oferta", path: "/services" },
  { string: "O nas", path: "/about" },
  { string: "Kontakt", path: "/contact" },
]);
</script>

<template>
  <div class="mobile-menu">
    <div class="mobile-menu">
      <div class="mobile-menu__logo-wrapper">
        <router-link to="/">
          <span>Logo</span>
        </router-link>
      </div>
      <nav class="mobile-nav">
        <ul class="mobile-nav__items">
          <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            @click="handleClick"
            :to="item.path"
          >
            <li class="mobile_nav__item">
              {{ item.string }}
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
    <div class="menu-overlay" @click="handleClick"></div>
  </div>
</template>

<style lang="scss">
.mobile-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  width: 100vw;
  height: 100vh;
  background: #dcdcdc41;
  backdrop-filter: blur(4.5px);
  transition: transform 0.3s ease;

  &--hide {
    transform: translateX(-100%);
  }
}
</style>
