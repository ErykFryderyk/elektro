<template>
  <button class="hamburger-button">
    <span class="hamburger-icon"></span>
  </button>
</template>

<style lang="scss" scoped>
.hamburger-button {
  margin-left: 16px;
  width: 60px;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.hamburger-icon {
  position: relative;
  width: 54px;
  height: 5px;
  background-color: #d9d9d9;

  &::before,
  &::after {
    content: "";
    left: 0;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: #d9d9d9;
    transition: all 0.1s ease-in-out;
  }

  &::before {
    transform: translateY(10px);
  }

  &::after {
    transform: translateY(-10px);
  }
}

.hamburger-active {
  .hamburger-icon {
    background-color: transparent;
  }

  .hamburger-icon::before {
    transform: rotate(45deg) translateY(0);
  }

  .hamburger-icon::after {
    transform: rotate(-45deg) translateY(0);
  }
}
</style>
