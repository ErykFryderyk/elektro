<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import MobileMenu from "./MobileMenu.vue";
import CustomButton from "./CustomButton.vue";
import HamburgerButton from "./HamburgerButton.vue";

const store = useStore();
// let isMobileMenuOpen = ref(false); //variable for mobile menu

//action when the user clicked the humburger
const handleClick = () => {
  //emit to the action in store
  store.dispatch("clickHamburger");
};
//computing the state of "isHamburgerClicked" variable
const isHamburgerClicked = computed(() => store.state.isHamburgerClicked);
</script>
<template>
  <div class="mobile-navigation">
    <HamburgerButton
      @click="handleClick"
      :class="{ 'hamburger-active': isHamburgerClicked }"
    />
    <CustomButton class="bg-orange phone-number-button">+48 513 587 427</CustomButton>
    <MobileMenu />
  </div>
</template>

<style lang="scss" scoped>
.mobile-navigation {
  position: fixed;
  width: 100%;
  height: 87px;
  padding: 0 16px;
  background-color: #5858587d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
}

.mobile-navigation {
  background: #002332;
  @media (min-width: 769px) {
    display: none;
  }
}
.hamburger {
  transform: rotate(90deg);

  &--active {
    transform: rotate(0);
  }
}
</style>
