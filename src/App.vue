<template>
  <div id="app" class="d-flex">
    <left-site-bar />

    <div class="right">
      <v-header @change-search-text="filterTasks" />

      <div class="d-flex flex-column right-content">
        <div class="right-content-header d-flex justify-content-between">
          <div class="d-flex">
            <div>Studio Board</div>
            <div class="btn-arrow">
              <button>
                <font-awesome-icon icon="angle-down" />
              </button>
            </div>
          </div>
          <div class="d-flex">
            <template v-for="user in shortUserList">
              <user-icon
                :avatar="user.avatar"
                :key="user.id"
                :first_name="user.first_name"
                :last_name="user.last_name"
                :phone="user.phone"
              >
                <div>
                  <b> {{ user.first_name }} {{ user.last_name }} </b>
                </div>
                <div>{{ user.phone }}</div>
                <div>{{ user.email }}</div>
              </user-icon>
            </template>
            <span class="count-user-header"
              >+ {{ countOverShortUserList }}</span
            >
            <button class="plus">+</button>
          </div>
        </div>
        <div class="content d-flex">
          <board
            @add-card="addCard(index, $event)"
            @remove-card="removeCard(index, $event)"
            v-for="(board, index) in filteredBoards"
            :key="index"
            v-bind="board"
          />
        </div>
        <button class="btn-add-board">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSiteBar from "@/components/LeftSiteBar";
import VHeader from "@/components/VHeader";
import Board from "@/components/Board";
// import boards from "@/data/boards.json";
import fakeBoards from "@/data/generate-data.js";
import { makeUser } from "@/data/generate-data.js";
import UserIcon from "@/components/UserIcon";

export default {
  name: "App",
  components: { UserIcon, Board, VHeader, LeftSiteBar },
  data: () => ({
    filterText: "",
    boards: fakeBoards(8, 10, 10),
  }),
  computed: {
    users() {
      return Array(10)
        .fill(0)
        .map(() => makeUser());
    },
    shortUserList() {
      return this.users.slice(0, 3);
    },
    countOverShortUserList() {
      const count = this.users.length - 4;
      return count > 0 ? count : false;
    },
    filteredBoards() {
      return this.boards.map((board) => {
        const newBoard = { ...board };
        newBoard.cards = board.cards.filter((card) =>
          card.text.includes(this.filterText)
        );
        return newBoard;
      });
    },
  },
  beforeMount() {},
  methods: {
    //TODO: add method for adding boards
    filterTasks(text) {
      this.filterText = text;
    },
    addCard(bordIndex, { card = {}, newIndex }) {
      const board = this.boards[bordIndex];
      if (!board.cards.find((c) => c.id === card.id))
        board.cards.splice(newIndex, 0, card);
    },
    removeCard(bordIndex, cardIndex) {
      const board = this.boards[bordIndex];
      board.cards.splice(cardIndex, 1);
    },
  },

  // beforeMount() {

  // }
};
</script>

<style lang="scss">
.plus {
  color: #9898ae;
  display: flex;
  line-height: 16px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border: 1px dashed #9898ae;
  border-radius: 50%;
  height: 30px;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
}
.count-user-header {
  display: flex;
  align-self: center;
  color: #7a838f;
  margin-right: 10px;
}
.user {
  margin-right: 10px;
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
  color: #32325d;
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
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  min-width: 100%;
  transition: 0.5s;
  @media screen and (max-width: 800px) {
    padding-left: 70px;
  }
  @media screen and (max-width: 540px) {
    padding-left: 0;
  }
}

.right-content {
  flex: 1 1 100%;
  max-height: calc(100% - 60px);
  background: #eef2f9;
  padding: 0 40px;
}

button.btn-add-board {
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 2;
  border: none;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  color: #ffffff;
  font-size: 20px;
  background: #65b6f7;
  filter: drop-shadow(0px 10px 10px rgba(74, 144, 226, 0.25));
}
</style>
