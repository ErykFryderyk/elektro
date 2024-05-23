<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const menuItems = ref([
  { string: "Strona główna", path: "/" },
  { string: "Nasza oferta", path: "/services" },
  { string: "O nas", path: "/about" },
  { string: "Kontakt", path: "/contact" },
]);
const isHamburgerClicked = computed(() => store.state.isHamburgerClicked);
</script>

<template>
  <div class="mobile-menu" :class="{ active: !isHamburgerClicked }">
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
          :to="item.path"
        >
          <li class="mobile_nav__item">
            {{ item.string }}
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
  <div class="menu-overlay"></div>
</template>

<style lang="scss">
.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: column;
  z-index: 990;
  background: transparent;
  backdrop-filter: blur(4.5px);
  transition: transform 0.3s ease;
}

.active {
  transform: translateX(100%);
}

.menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 97;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4.5px);
}
</style>
