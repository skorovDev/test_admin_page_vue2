<template>
  <div class="left-site-bar d-flex flex-column ">
    <div class="left-site-bar-header">hussle</div>

    <div class="left-site-bar-menu-group ">
      <div class="left-site-bar-menu-group-top">
        <menu-item v-for="(item,index) in menuItems " :key="index" :icon="item.icon" :label="item.label" />
      </div>
      <menu-item icon="gear" label="Settings" />
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
        icon: ["fas", "user-group"],
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

<style scoped lang="scss">

.left-site-bar {
  flex: 0 1 120px;
}

.left {
  &-site-bar-header {
    background: #8690DB;
    font-size: 20px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
  }

  &-site-bar-menu-group {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-direction: column;
    &-top {

    }

  }

}


</style>
