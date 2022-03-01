<template>
  <div id="app">
    <div class="container"></div>
    <div class="d-flex">
      <div class="flex-column">
        <div class="bg-hussle">hussle</div>
        <div class="d-flex flex-column">
          <div>Manage</div>
          <div>Boards</div>
          <div>Schedule</div>
          <div>Reports</div>
          <div>Settings</div>
        </div>
      </div>
      <div class="bg-hussle row">
        <div>Search for tasks…</div>
        <div>M. Thompson</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
.bg-hussle {
  background: linear-gradient(90deg, #9ea7fc 0%, #65b6f7 124.87%);
}
</style>
