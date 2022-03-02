<template>
  <div class="left d-flex flex-column">
    <div class="top bg-hussle">hussle</div>

    <div class="d-flex flex-column justify-content-between flex-grow-1">
      <div class="top-menu">
        <menu-item />
        <menu-item />
        <menu-item />
        <menu-item />
        <menu-item />
      </div>
      <menu-item />
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/MunuItem";

export default {
  name: "LeftSiteBar",
  components: { MenuItem },
};
</script>

<style scoped></style>
