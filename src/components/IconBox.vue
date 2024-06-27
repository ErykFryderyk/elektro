<script setup>
import CableIcon from "@/assets/svg/CableIcon.vue";
</script>

<template>
  <div class="icon-box">
    <CableIcon style='"margin-bottom: 31px; z-index: 3;"' />
    <div class="devider"></div>
    <h3 class="title">
      <slot name="icon-box-title">Instalacje</slot>
    </h3>
    <slot name="icon-box-list">
      <ul class="icon-box__list">
        <li>asdasdasdasd</li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          labore.
        </li>
      </ul>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.title {
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
  text-transform: uppercase;
  color: #00405b;
}

.devider {
  width: 100%;
  height: 24px;
  background-color: #f9cb53;
  margin-bottom: 24px;
  transform: translateY(-17px);
  z-index: 0;
}
.icon-box__list li {
  line-height: normal;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 10px;
  color: #002332;
  list-style-type: disc;
  margin-left: 20px;
}
</style>
