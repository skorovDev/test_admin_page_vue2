<template>
  <a href="#">
    <div>
      <font-awesome-icon v-if="icon" :icon="icon" />
    </div>
    <div>{{ label }}</div>
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

<style scoped></style>
