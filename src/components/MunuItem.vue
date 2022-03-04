<template>
  <a class="menu-item" href="#">
    <div class="menu-item-icon">
      <font-awesome-icon v-if="icon" :icon="icon" />
    </div>
    <div class="menu-item-label">{{ label }}</div>
  </a>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    icon: {},
    label: {},
  },
};
</script>

<style scoped lang="scss">
.menu-item {
  padding: 27px 0;
  color: #dadada;
  min-width: 120px;
  border-left: 4px solid #dadada;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:hover,
  &.active {
    color: #7a838f;
    text-decoration: none;
    border-left: 4px solid;
  }

  //&icon {
  //
  //}
  //
  //&-label {
  //
  //}
}
</style>
