<script setup>
import { ref } from "vue";
import LogoElectro from "../assets/svg/LogoElectro.vue";
import CustomButton from "./CustomButton.vue";

const menuItems = ref([
  { string: "Strona główna", path: "/" },
  { string: "Nasza oferta", path: "/services" },
  { string: "O nas", path: "/about" },
  { string: "Kontakt", path: "/contact" },
]);
</script>
<template>
  <div class="desktop-navigation">
    <div class="container container--inline desktop-menu">
      <router-link :to="'/'">
        <LogoElectro style="width: 203px" />
      </router-link>
      <nav class="navigation-links">
        <ul class="navigation-links__items">
          <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
          >
            <li class="navigation-links__item">{{ item.string }}</li>
          </router-link>
        </ul>
      </nav>
      <CustomButton class="bg-orange">+48 513 587 427</CustomButton>
    </div>
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
.desktop-menu {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

.navigation-links {
  display: flex;
  align-items: center;
  justify-content: center;

  &__items {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__item {
    color: #f2f2f2;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
}
</style>
