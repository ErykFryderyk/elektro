<script setup>
import { ref, onMounted } from "vue";

const cookiesAccepted = ref(false);

onMounted(() => {
  cookiesAccepted.value = localStorage.getItem("cookiesAccepted") === "true";
});

const acceptCookies = () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookiesAccepted.value = true;
};
</script>
<template>
  <div v-if="!cookiesAccepted" class="cookie-banner">
    <p>⚡ Ta strona używa plików cookies. Korzystając z niej, wyrażasz na to zgodę.🍪</p>
    <button @click="acceptCookies">OK</button>
  </div>
</template>

<style lang="scss">
.cookie-banner {
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: #001a25;
  padding: 10px;
  text-align: center;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  
  p {
    color: #0082ba;
  }
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background: #f1c40f;
  border: none;
  cursor: pointer;
}
</style>