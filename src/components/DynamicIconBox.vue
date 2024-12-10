<template>
  <div class="icon-box">
    <!-- Dynamiczna ikona przekazywana przez slot lub prop -->
    <div class="icon-box__icon" :style="{ zIndex: 3 }">
      <slot name="icon">
        <component :is="icon" />
      </slot>
    </div>

    <div class="devider"></div>

    <!-- Dynamiczny tytuł -->
    <h3 class="icon-box__title">
      <slot name="title">
        {{ title }}
      </slot>
    </h3>

    <!-- Dynamiczna zawartość listy -->
    <slot name="list">
      <ul class="icon-box__list">
        <li v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </slot>
  </div>
</template>

<script setup>
// Props dla dynamicznej ikony, tytułu i listy
defineProps({
  icon: {
    type: [String, Object], // Nazwa ikony lub obiekt komponentu
    default: null, // Brak domyślnej ikony
  },
  title: {
    type: String,
    default: "Instalacje", // Domyślny tytuł
  },
  list: {
    type: Array,
    default: () => [
      "Przykładowa pozycja 1",
      "Przykładowa pozycja 2",
    ], // Domyślne elementy listy
  },
});
</script>

<style lang="scss" scoped>
.icon-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.icon-box__icon{
  text-align: center;
}

.icon-box__title {
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
  text-transform: uppercase;
  color: #00405b;
  margin-bottom: 20px;
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