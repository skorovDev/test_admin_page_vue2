<template>
  <div class="left-site-bar d-flex flex-column">
    <div class="left-site-bar-header">
      <logo-btn />
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
import LogoBtn from "@/components/LogoBtn";

export default {
  name: "LeftSiteBar",
  components: { LogoBtn, MenuItem },
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
  methods: {
    myFilter() {},
  },
};
</script>

<style scoped lang="scss">
.left-site-bar {
  height: 100%;
  position: fixed;
  flex: 0 1 120px;
  left: 0;
  transition: left 0.5s;
  z-index: 2;
  background-color: #fff;
  bottom: 0;

  $_this: &;

  @media screen and (max-width: 800px) {
    flex: 0 1 70px;
  }
  @media screen and (max-width: 540px) {
    flex: 0 1 70px;
    left: -70px;
    height: calc(100% - 60px);

    #{$_this}-header {
      display: none;
    }
  }

  &-menu-show {
    left: 0;
  }

  &-header {
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

  &-menu-group {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-direction: column;

    &-top {
    }
  }
}
</style>
