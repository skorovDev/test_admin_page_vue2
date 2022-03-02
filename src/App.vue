<template>
  <div id="app" class="d-flex">
    <left-site-bar />

    <div class="right flex-grow-1">
      <v-header />

      <div class="d-flex flex-column h-100">
        <div class="d-flex justify-content-between">
          <div>Studio Board</div>
          <div>icone</div>
        </div>
        <div class="bg-hussle content d-flex">
          <board />
          <board />
          <board />
          <board />
          <board />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSiteBar from "@/components/LeftSiteBar";
import VHeader from "@/components/VHeader";
import Board from "@/components/Board";

export default {
  name: "App",
  components: { Board, VHeader, LeftSiteBar },
};
</script>

<style lang="scss">
div {
  border: 1px solid;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}

#app {
  max-width: 100%;
  height: 100vw;
}

.h-100 {
  height: 100%;
}

.left {
}

.bg-hussle {
  background: linear-gradient(90deg, #9ea7fc 0%, #65b6f7 124.87%);
}

.content {
  flex: 1 1 100%;
  max-width: 1300px;
  overflow: scroll;
}
</style>
