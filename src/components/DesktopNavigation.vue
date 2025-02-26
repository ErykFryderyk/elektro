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
    <div class="desktop-menu container">
      <router-link :to="'/'">
        <!-- <LogoElectro /> -->
        <img src="../assets//img/logo-electro.png" alt="" srcset="" :to="'/'">
      </router-link>
      <nav class="navigation-links">
        <ul class="navigation-links__items">
          <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            active-class="custom-active"
          >
            <p class="navigation-links__item">{{ item.string }}</p>
          </router-link>
        </ul>
      </nav>
      <a href="tel:+48513587427">
        <CustomButton class="bg-orange custom-font-size">+48 513 587 427</CustomButton>
      </a>
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
  justify-content: center;
  padding: 0 15px 0 15px;
  box-shadow: 0px 0px 10px 1px #17171769;

  @media (min-width: 1200px) {
    padding: 0 50px;
  }
}
.desktop-menu {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  a {
    display: flex;
    align-items: center;
  }
}

.navigation-links {
  display: flex;
  width: 100%;
  align-items: center;

  &__items {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
  }
  &__item {
    display: flex;
    position: relative;
    align-items: center;
    color: #f2f2f2;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 12px;
    }
    
    @media (min-width: 992px) {
      font-size: 14px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    } 
  }
}

/* Styl dla aktywnego linka */
.custom-active{
  p::after {
    content: '';
    position: absolute;
    bottom: -6px;
    width: 100%;
    height: 5px;
    background-color: #E0B545;
  }
}

.custom-font-size {
  font-size: 12px;

  @media (min-width: 992px) {
      font-size: 14px;
    }
    
    @media (min-width: 1200px) {
      font-size: 18px;
    }
}
</style>
