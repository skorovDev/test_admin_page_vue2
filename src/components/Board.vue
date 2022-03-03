<template>
  <div class="board">
    <div class="border-gradient"></div>
    <div class="board-title">{{ title }}</div>
    <div class="board-cards">
      <card v-for="(card,index) in cards" :key="index" :text="card.text" :users="card.users"
            :count-of-comments="card.countOfComments" :count-of-files="card.countOfFiles" :priority="card.priority" />
    </div>
    <div class="add-btn d-flex align-self-center">
      <button>Add task

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
    cards: {}
  }
};
</script>

<style scoped lang="scss">
.add-btn {
  margin: 20px;
}

.add-btn button {
  border: none;
  background: none;
  color: #DADADA;

  &:hover {
    color: #32325D;
  }
}

.board-title {
  color: #707090;
  font-size: 20px;
  padding: 14px;
}

.border-gradient {
  height: 10px;
  background: linear-gradient(133.98deg, #C781FF -18.23%, #E57373 125.36%);

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
  box-shadow: 0 0 10px #D2D7E0;
  border-radius: 5px;
}

.board-cards {
  flex-grow: 1;
  overflow-y: scroll;
}
</style>
