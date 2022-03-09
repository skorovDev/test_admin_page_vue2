<template>
  <div>
    <button class="user" :title="`${first_name} ${last_name} ${phone}`">
      <img :src="avatar" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    first_name: {},
    last_name: {},
    phone: {},
    avatar: {},
  },
};
</script>

<style scoped></style>
