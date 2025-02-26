<template>
  <section class="split-section" :class="reverse ? 'reverse' : ''">
    <!-- Left side -->
    <div class="split-section__left">
      <slot name="left" />
    </div>

    <!-- Right side -->
    <div class="split-section__right">
      <slot name="right" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  reverse: {
    type: Boolean,
    default: false,// If you wanna have reverse sections set "default: true"
  },
});
</script>

<style scoped>
/* Main style of the section */
.split-section {
  display: flex;
  gap: 20px; /* Odstęp między sekcjami */
  /* padding: 0px 20px; */

  @media (min-width: 992px) {
    gap: 50px;
  }
}

.split-section__left {
  align-items: center;
}

/* Każda z połówek */
.split-section__left,
.split-section__right {
  flex: 1;
}

/* Obracanie stron (reverse layout) */
.split-section.reverse {
  flex-direction: row-reverse;
}

@media (max-width: 762px) {
  .split-section {
    flex-direction: column; 
  }
}

@media (max-width: 992px) {
  .split-section {
    flex-direction: column; 
  }
}
</style>