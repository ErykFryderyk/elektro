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
          <span class="mobile_nav__item">
            {{ item.string }}
          </span>
        </router-link>
      </ul>
    </nav>
    <div class="logo">
      <LogoElectro class="footer-logo" />
    </div>
  </div>
  <div class="discription">
    <!-- eslint-disable-next-line -->
    <p>
      All rights reserved © 2024
      <a href="https://github.com/ErykFryderyk">Eryk Fryderyk</a>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  padding-top: 40px;
  background-color: #002332;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    position: relative;
    min-height: 200px;
    display: grid;
    grid-template-columns: 0.25fr 0.75fr;
    grid-template-rows: 1fr;

  }
}

.mobile-nav {
  @media (min-width: 768px) {
    width: 100%;
    grid-column: 2;
    grid-row: 1;
    position: absolute;
    bottom: 0;
  }
  &__items {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }
  }
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
  width: 160px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: auto;
    margin-right: 2.5rem;
  }
}
.logo {
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    justify-self: start;
    grid-column: 1;
    grid-row: 1;
  }

  .footer-logo {
    transform: scale(2.5);

    @media (min-width: 768px) {
      transform: none;
    }
  }
}

.discription {
  padding-top: 50px;
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
