<template>
  <div class="left-site-bar left-site-bar-menu-mobile d-flex flex-column">
    <div class="left-site-bar-header">
      <btn-header v-on:click="myFilter" />
    </div>

    <div class="left-site-bar-menu-group">
      <div class="left-site-bar-menu-group-top">
        <menu-item
          v-for="(item, index) in menuItems"
          :key="index"
          :icon="item.icon"
          :label="item.label"
          :class="{ active: item.active }"
        />
      </div>
      <menu-item icon="gear" label="Settings" />
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/MunuItem";
import BtnHeader from "@/components/BtnHeader";

export default {
  name: "LeftSiteBar",
  components: { BtnHeader, MenuItem },
  data: () => ({
    menuItems: [
      {
        icon: ["fas", "user-group"],
        label: "Manage",
      },
      {
        active: true,
        icon: "server",
        label: "Boards",
      },
      {
        icon: "calendar-days",
        label: "Schedule",
      },
      {
        icon: "square-poll-vertical",
        label: "Reports",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.left-site-bar {
  height: 100%;
  position: fixed;
  flex: 0 1 120px;
  @media screen and (max-width: 800px) {
    flex: 0 1 70px;
  }
  @media screen and (max-width: 540px) {
    flex: 0 1 70px;
    left: -70px;
  }
}

.left-site-bar-menu-mobile {
}

.left {
  &-site-bar-header {
    //transition: 0.5s !;
    background: #8690db;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 30px;
    min-height: 60px;
    max-height: 60px;
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
