<template>
  <div id="app" class="d-flex">
    <left-site-bar />

    <div class="right">
      <v-header />

      <div class="d-flex flex-column right-content">
        <div class="right-content-header d-flex justify-content-between">
          <div class="d-flex">
            <div>
              Studio Board
            </div>
            <div class="btn-arrow">
              <button>
                <font-awesome-icon icon="angle-down" />
              </button>
            </div>

          </div>
          <div class="d-flex">
            <div class="user">
              <font-awesome-icon icon="user-large" />
            </div>
            <div class="user">
              <font-awesome-icon icon="user-large" />
            </div>
            <div class="user">
              <font-awesome-icon icon="user-large" />
            </div>
            <div class="user">
              <font-awesome-icon icon="user-large" />
            </div>
            <div class="plus">
              +
            </div>
          </div>
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

.plus {
  color:#9898AE;;
  display: flex;
  line-height: 16px;
  font-size:16px ;
  align-items: center;
  justify-content: center;
  border: 1px dashed #9898AE;
  border-radius: 50%;
  height: 30px;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
}

.user {
  margin-right: 10px;

  color: #FFFFFF;
  text-align: center;
  padding-top: 2px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #D8D8E4;

  &:hover {
    cursor: pointer;
  }
}

.btn-arrow {
  margin-left: 10px;
}

.btn-arrow button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #32325D;
  border: none;
  padding: 5px;
  text-align: center;
  text-decoration: none;
}

.right-content-header {
  padding: 35px 0;
}

.content {
  column-gap: 40px;
  flex: 1 1 100%;
  overflow-x: auto;
  padding-bottom: 40px;
}

.right {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  max-width: calc(100% - 120px);
}

.right-content {
  flex: 1 1 100%;
  max-height: calc(100% - 60px);
  background: #EEF2F9;
  padding: 0 40px;
}
</style>
