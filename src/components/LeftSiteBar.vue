<template>
  <div class="left-site-bar d-flex flex-column">
    <div class="top bg-header">hussle</div>

    <div class="d-flex flex-column justify-content-between flex-grow-1">
      <div class="top-menu">
        <menu-item v-for="(item,index) in menuItems " :key="index" :icon="item.icon" :label="item.label" />

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
  data: () => ({
    menuItems: [
      {
        icon: ['fas',"user-group"],
        label: "Manage"
      },
      {
        icon: "server",
        label: "Boards"
      },
      {
        icon: "calendar-days",
        label: "Schedule"
      },
      {
        icon: "square-poll-vertical",
        label: "Reports"
      }
    ]
  })
};
</script>

<style scoped>
.top-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left-site-bar {
  flex: 0 1 120px;
}

.bg-header {
  background: #8690DB;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
