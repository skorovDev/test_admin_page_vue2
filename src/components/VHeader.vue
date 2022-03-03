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

    <div>M. Thompson</div>
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
}


</style>
