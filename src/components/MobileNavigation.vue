<script setup>
// import { ref, mapState, mapActions } from "vue";
import { useStore } from "vuex";

const store = useStore();

const handleClick = () => {
  store.dispatch("clickHamburger");
};
</script>
<template>
  <div class="mobile-navigation">
    <button @click="handleClick">|||</button>
    <!-- <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Contact</a></li>
    </ul> -->
  </div>
</template>

<style lang="scss" scoped>
.mobile-navigation {
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #585858;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
}

.mobile-navigation {
  @media (max-width: 769px) {
    display: none;
  }
}
button {
  transform: rotate(90deg);
}
</style>
