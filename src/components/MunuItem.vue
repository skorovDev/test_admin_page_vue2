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
    label: {}
  }
};
</script>

<style scoped lang="scss">

.menu-item {
  padding: 5px 0;
  color: #DADADA;
  min-width: 120px;
  border-left: 4px solid #DADADA;

  &:hover {
    color: #7A838F;
    text-decoration: none;
    border-left: 4px solid;
  }

  &icon {

  }

  &-label {
    margin-top: 10px;
    margin-bottom: 55px
  }
}
</style>
