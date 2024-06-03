<script setup>
import { ref } from "vue";
import LogoElectro from "@/assets/svg/LogoElectro.vue";

const menuItems = ref([
  { string: "Strona główna", path: "/" },
  { string: "Nasza oferta", path: "/services" },
  { string: "O nas", path: "/about" },
  { string: "Kontakt", path: "/contact" },
]);
</script>

<template>
  <div class="footer">
    <div class="container">
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
      <LogoElectro />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background-color: #002332;
}
</style>
