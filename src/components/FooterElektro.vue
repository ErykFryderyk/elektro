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
    <div class="logo">
      <LogoElectro />
    </div>
  </div>
  <div class="discription">
    <!-- eslint-disable-next-line -->
    <p>All rights reserved © 2024 <a href="https://github.com/ErykFryderyk">Eryk Fryderyk</a></p>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background-color: #002332;
}
.mobile-nav {
  padding: 40px 0 40px 33px;
}
a {
  display: flex;
  flex-direction: column;
  color: #ebebeb;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  .mobile_nav__item {
    margin-bottom: 24px;
  }
}
.logo {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}
.discription {
  text-align: center;
  background: #002332;
  p {
    color: #003d57;
  }
  a {
    display: inline;
    color: #005377;
    &:hover {
      color: #003d57;
    }
  }
}
</style>
