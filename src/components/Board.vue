<template>
  <div class="board">
    <div>{{ title }}</div>
    <div class="board-cards">
      <card v-for="(card,index) in cards" :key="index" :text="card.text" :users="card.users"
            :count-of-comments="card.countOfComments" :count-of-files="card.countOfFiles" :priority="card.priority" />
    </div>
    <button>Add task +</button>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Board",
  components: { Card },
  props: {
    title: {},
    cards: {}
  }
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 280px;
  max-height: 100%;
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px #D2D7E0;
  border-radius: 5px;
}

.board-cards {
  flex-grow: 1;
  overflow-y: scroll;
}
</style>
