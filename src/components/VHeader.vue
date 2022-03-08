<template>
  <div class="right-site-header d-flex justify-content-between">
    <div class="header-search">
      <div class="header-search-h">
        <logo-btn @click="toggleLeftSiteBar" />
      </div>
      <div class="header-search-icon">
        <font-awesome-icon icon="magnifying-glass" />
      </div>
      <div class="header-search-input">
        <input
          @input="changeSearchText"
          placeholder="Search for tasks…"
          type="text"
        />
        <span class="header-search-input-border"></span>
      </div>
    </div>

    <div class="header-item">
      <div class="header-item-envelope">
        <font-awesome-icon :icon="['far', 'envelope']" />
      </div>
      <div class="header-item-bell border-left-header">
        <font-awesome-icon :icon="['far', 'bell']" />
      </div>
      <div class="header-item-name border-left-header">M. Thompson</div>
      <div class="header-item-user">
        <font-awesome-icon icon="user-large" />
      </div>
    </div>
  </div>
</template>

<script>
import LogoBtn from "@/components/LogoBtn";

export default {
  name: "VHeader",
  components: { LogoBtn },
  methods: {
    toggleLeftSiteBar() {
      document
        .querySelector(".left-site-bar")
        .classList.toggle("left-site-bar-menu-show");
    },
    changeSearchText(event) {
      //TODO: change window url without reload page
      const value = event.target.value;
      const url = window.location.href;
      const windowUrl = new URL(url);

      windowUrl.searchParams.delete("filter-text");

      if (value) {
        windowUrl.searchParams.append("filter-text", value);
      }

      window.history.replaceState(null, null, windowUrl);

      this.$emit("change-search-text", value);
    },
  },
};
</script>

<style scoped lang="scss">
.border-left-header {
  border-left: 1px solid #ffffff;
  padding: 20px;
}

.right-site-header {
  color: #ffffff;
  min-height: 60px;
  max-height: 60px;
  background: linear-gradient(90deg, #9ea7fc 0%, #65b6f7 124.87%);

  .header-search {
    display: flex;
    align-items: center;
    max-height: 100%;

    &-h {
      background: #8690db;
      font-size: 20px;
      color: #ffffff;
      flex-direction: column;
      align-items: center;
      padding: 15px 30px;
      min-height: 60px;
      max-height: 60px;
      display: none;
      @media screen and (max-width: 540px) {
        display: flex;
      }
    }

    &-icon {
      margin: 0 10px 0 20px;
    }

    &-input {
      display: flex;
      align-items: center;
      position: relative;
      color: #ffffff;

      .header-search-input-border {
        position: absolute;
        bottom: 0;
        left: 0;
        background: currentColor;
        width: 0;
        height: 1px;
        transition: 1s;
      }

      input {
        width: 250px;
        background: transparent;
        border: none;
        color: currentColor;

        &::placeholder {
          color: #ffffff;
        }

        &:focus {
          outline: none;
        }

        @media screen and (max-width: 800px) {
          width: 100%;
        }
      }

      input:focus + .header-search-input-border {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .header-item-name {
      display: none;
    }
  }

  .header-item {
    display: flex;
    align-items: center;

    &-envelope {
      margin: 0 20px;
    }

    //&-bell {
    //
    //}

    //&-name {
    //
    //}

    &-user {
      padding: 0;
      margin: 0 40px 0 20px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: #d8d8e4;

      svg {
        padding: 0 7px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
