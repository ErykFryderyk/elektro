<script setup>
import { ref } from "vue";
import LogoElectro from "../assets/svg/LogoElectro.vue";

const menuItems = ref([
  { string: "Strona główna", path: "/" },
  { string: "Nasza oferta", path: "/services" },
  { string: "O nas", path: "/about" },
  { string: "Kontakt", path: "/contact" },
]);
</script>
<template>
  <div class="desktop-navigation">
    <LogoElectro />
    <ul>
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
      >
        <li class="mobile_nav__item">{{ item.string }}</li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.desktop-navigation {
  position: sticky;
  width: 100%;
  height: 80px;
  background: #002332;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  box-shadow: 0px 0px 10px 1px #17171769;

  @media (min-width: 1000px) {
    padding: 0 50px;
  }
}
</style>
