<template>
  <div class="right-site-header d-flex justify-content-between">
    <div class="header-search">
      <div class="header-search-icon">
        <font-awesome-icon icon="magnifying-glass" />
      </div>
      <div class="header-search-input">
        <input placeholder="Search for tasks…" type="text" name="" id="">
        <span class="header-search-input-border"></span>
      </div>
    </div>

    <div class="header-item ">
      <div class="header-item-envelope">
        <font-awesome-icon :icon="['far','envelope']" />
      </div>
      <div class="header-item-bell">
        <font-awesome-icon :icon="['far','bell']" />
      </div>
      <div class="header-item-name"> M. Thompson</div>
      <div class="header-item-user">
        <font-awesome-icon icon="user-large" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader"
};
</script>

<style scoped lang="scss">
.right-site-header {
  color: #FFFFFF;
  padding: 15px;
  min-height: 60px;
  max-height: 60px;
  background: linear-gradient(90deg, #9ea7fc 0%, #65b6f7 124.87%);

  .header-search {
    display: flex;

    &-icon {
      display: flex;
      align-self: center;
      margin-right: 10px;
    }

    &-input {
      position: relative;
      color: #FFFFFF;

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
          color: #FFFFFF;
        }

        &:focus {
          outline: none;
        }
      }

      input:focus + .header-search-input-border {
        width: 100%;
      }
    }
  }

  .header-item {
    display: flex;

    &-envelope {
      margin: 0 20px;
    }

    &-bell {
      margin: 0 20px;

    }

    &-name {
      margin: 0 20px;

    }

    &-user {
      text-align: center;
      padding-top: 2px;
      margin: 0 20px;
      height: 30px;
      width: 30px;
      border-radius: 50px;
      background: #D8D8E4;

      :hover {
        cursor: pointer;
      }
    }
  }
}


</style>
