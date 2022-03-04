<template>
  <div class="board">
    <div :class="`border-gradient-${status}`"></div>
    <div class="board-title">{{ title }}</div>
    <div class="board-cards">
      <card
        v-for="(card, index) in cards"
        :key="index"
        :text="card.text"
        :users="card.users"
        :count-of-comments="card.countOfComments"
        :count-of-files="card.countOfFiles"
        :priority="card.priority"
      />
    </div>
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

export default {
  name: "Board",
  components: { Card },
  props: {
    title: {},
    cards: {},
    status: {},
  },
};
</script>

<style scoped lang="scss">
.add-btn {
  margin: 20px;
}

.add-btn button {
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 280px;
  max-height: 100%;
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px #d2d7e0;
  border-radius: 5px;
}

.board-cards {
  flex-grow: 1;
  overflow-y: scroll;
}

.border-gradient-1 {
  height: 10px;
  background: linear-gradient(133.98deg, #c781ff -18.23%, #e57373 125.36%);
}

.border-gradient-in_progress {
  height: 10px;
  background: linear-gradient(135deg, #ff9784 0%, #ffb74d 100%);
}

.border-gradient-review {
  height: 10px;
  background: linear-gradient(133.98deg, #c781ff -18.23%, #e57373 125.36%);
}

.border-gradient-complete {
  height: 10px;
  background: linear-gradient(315.14deg, #81d5ee 0%, #7ed492 133.97%);
}
</style>
