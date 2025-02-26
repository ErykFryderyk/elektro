<script setup>
import { computed } from 'vue';

const props = defineProps({
  img:  {
    type: String,
    // default: 'https://picsum.photos/600/200',
    default: 'bass.webp',
  }
});

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.img})`,
}));
</script>

<template>
  <div class="section-image" :style="backgroundStyle">
  </div>
</template>

<style lang="scss" scoped>
.section-image {
  margin-left: 12px;
  min-height: 377px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 13px 0px black;

  @media (min-width: 922px) {
    min-height: 477px;
  }

  &::before {
    content: "";
    position: absolute;
    background: #f0c85e;
    bottom: 0;
    height: 330px;
    width: 12px;
    left: -12px;

    @media (min-width: 922px) {
      height: 400px;
    }
  }
}
</style>
