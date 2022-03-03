<template>
  <div id="app" class="d-flex">
    <left-site-bar />

    <div class="right">
      <v-header />

      <div class="d-flex flex-column right-content">
        <div class="right-content-header d-flex justify-content-between">
          <div>Studio Board</div>
          <div>icone</div>
        </div>
        <div class=" content d-flex">
          <board v-for="(board,index) in boards" :key="index" :title="board.title" :cards="board.cards" />
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
#app {
  max-width: 100%;
  max-height: 100%;
}

.right-content-header {
  padding: 35px 0;
}

.content {
  column-gap: 40px;
  flex: 1 1 100%;
  overflow-x: auto;
}

.right {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  max-width: calc(100% - 120px);
}

.right-content {
  flex: 1 1 100%;
  max-height: calc(100% - 28px);
  background: #EEF2F9;
  padding: 0 40px;
}
</style>
