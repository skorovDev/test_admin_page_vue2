<template>
  <button class="user" :title="`${first_name} ${last_name} ${phone}`">
    <img :src="avatar" alt="" />
    <div v-if="!!$slots.default" class="user-info">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: "UserIcon",
  props: {
    first_name: {},
    last_name: {},
    phone: {},
    avatar: {},
  },
};
</script>

<style scoped lang="scss">
.user {
  z-index: 1;
  border: solid 1px #7a838f;
  color: #ffffff;
  padding: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #d8d8e4;

  img {
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0 !important;
  }

  &-info {
    border-radius: 5px;
    box-shadow: 0 2px 3px 0px #999;
    right: 0;
    margin-top: 10px;
    position: absolute;
    padding: 5px;
    display: none;
    background: #ffffff;
    font-size: 14px;
    color: #7a838f;
  }

  &:hover {
    .user-info {
      display: block;
    }
  }
}

button {
}
</style>
