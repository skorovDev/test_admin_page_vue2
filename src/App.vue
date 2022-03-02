<template>
  <div id="app" class="d-flex">
    <left-site-bar />

    <div class="right">
      <v-header />

      <div class="d-flex flex-column right-content">
        <div class="d-flex justify-content-between">
          <div>Studio Board</div>
          <div>icone</div>
        </div>
        <div class="bg-hussle content d-flex">
          <board v-for="board in boards" :key="board.title" :title="board.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSiteBar from "@/components/LeftSiteBar";
import VHeader from "@/components/VHeader";
import Board from "@/components/Board";
import boards from "@/data/boards.json";

export default {
  name: "App",
  components: { Board, VHeader, LeftSiteBar },
  data: () => ({
    boards
  })
  // beforeMount() {

  // }
};
</script>

<style lang="scss">
div {
  border: 1px solid;
  //padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}

#app {
  max-width: 100%;
  height: 100vw;
  max-height: 100%;
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
  overflow-x: auto;
}

.right {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  max-width: calc(100% - 200px);
}

.right-content {
  flex: 1 1 100%;
  max-height: calc(100% - 28px);
}
</style>
