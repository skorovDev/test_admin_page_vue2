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
      <div class="header-item-bell border-left-header">
        <font-awesome-icon :icon="['far','bell']" />
      </div>
      <div class="header-item-name border-left-header"> M. Thompson</div>
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

.border-left-header {
  border-left: 1px solid #ffffff;
  padding: 20px;
}

.right-site-header {
  color: #FFFFFF;
  min-height: 60px;
  max-height: 60px;
  background: linear-gradient(90deg, #9ea7fc 0%, #65b6f7 124.87%);

  .header-search {
    display: flex;
    align-self: center;
    max-height: 100%;

    &-icon {
      margin: 0 10px 0 20px;
    }

    &-input {


      display: flex;
      align-items: center;
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
      text-align: center;
      padding-top: 2px;
      margin: 0 40px 0 20px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: #D8D8E4;

      &:hover {
        cursor: pointer;
      }
    }
  }
}


</style>
