<template>
  <section class="dynamic-grid" :style="gridStyles">
    <div
      v-for="(slotContent, index) in slots"
      :key="index"
      class="dynamic-grid__column"
    >
      <slot :name="slotContent" />
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const { columns } = defineProps({
  columns: {
    type: Number,
    default: 2, // Default to 2 columns
    validator: (value) => value > 0, // Must be a positive number
  },
});

// const gridStyles = computed(() => ({
//   display: "grid",
//   gridTemplateColumns: `repeat(${columns}, 1fr)`, // Create equal-width columns
//   gap: "20px", // Space between columns
// }));

// Generate dynamic slot names based on the number of columns
const slots = computed(() =>
  Array.from({ length: columns }, (_, i) => `column-${i + 1}`)
);
</script>


<style scoped>
.dynamic-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}



/* Responsiveness */
@media (min-width: 768px) {
  .dynamic-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .dynamic-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
