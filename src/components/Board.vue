<template>
  <div class="board">
    <div class="border-gradient" :class="statusClass"></div>
    <div class="board-title">{{ title }}</div>
    <draggable
      :list="cards"
      group="people"
      class="board-cards"
      @add="add"
      @remove="remove"
    >
      <transition-group name="list" tag="div">
        <card
          v-for="card in cards"
          :key="card.id"
          :text="card.text"
          :users="card.users"
          :count-of-comments="card.countOfComments"
          :count-of-files="card.countOfFiles"
          :priority="card.priority"
        />
      </transition-group>
    </draggable>
    <div class="add-btn d-flex align-self-center">
      <button>
        Add task
        <font-awesome-icon icon="circle-plus" />
      </button>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Draggable from "vuedraggable";

export default {
  name: "Board",
  components: { Card, Draggable },
  data: () => ({
    statuses: { 1: "backlog", 2: "in_progress", 3: "review", 4: "complete" },
  }),
  props: {
    title: {},
    cards: {},
    status: {},
  },
  computed: {
    statusClass() {
      return `border-gradient-${this.statuses[this.status]}`;
    },
  },
  methods: {
    getCardByIndex(index) {
      return this.cards[index];
    },

    add({ oldIndex, newIndex }) {
      // console.log("add", this.title);
      const card = this.getCardByIndex(oldIndex);
      this.$emit("add-card", { card, newIndex });
    },
    remove({ oldIndex }) {
      // console.log("remove", this.title);
      this.$emit("remove-card", oldIndex);
    },
    clone(el) {
      return {
        name: el.name + " cloned",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.add-btn {
  margin: 20px;
}

.add-btn button {
  border-radius: 20px;
  padding: 5px 30px;
  border: none;
  background: none;
  color: #dadada;

  &:hover {
    color: #32325d;
  }
}

.board-title {
  color: #707090;
  font-size: 20px;
  padding: 14px;
}

.board {
  position: relative;
  padding-left: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 280px;
  max-height: 100%;
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 4px 2px #d2d7e0;
  border-radius: 5px;
}

.board-cards {
  flex-grow: 1;
  overflow-y: scroll !important;
  padding-right: 10px;
}

.border-gradient {
  height: 5px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.border-gradient-backlog {
  background: linear-gradient(133.98deg, #c781ff -18.23%, #e57373 125.36%);
}

.border-gradient-in_progress {
  background: linear-gradient(135deg, #ff9784 0%, #ffb74d 100%);
}

.border-gradient-review {
  background: linear-gradient(134.34deg, #9ea7fc 0%, #65b6f7 114.98%);
}

.border-gradient-complete {
  background: linear-gradient(315.14deg, #81d5ee 0%, #7ed492 133.97%);
}
</style>
