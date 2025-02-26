<template>
  <button>
    <slot>Click Me!</slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: inline-flex;
  padding: 18px 20px;
  width: auto;
  max-width: 240px;
  height: 56px;
  justify-content: center;
  align-items: center;
  color: #002332;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.bg-orange {
  background: #fcbc53;
}
.bg-granat {
  background-color: #002332;
  color: #fff;
}
</style>
