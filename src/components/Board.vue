<template>
  <div class="board">
    <div>{{ title }}</div>
    <div class="board-cards">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deleniti deserunt dicta enim et
      facere incidunt ipsam, iusto laborum magni nemo porro quaerat quasi, quos repellat repellendus similique ut?
    </div>
    <button>Add task +</button>
  </div>
</template>

<script>
export default {
  name: "Board",
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
}

.board-cards {
  flex-grow: 1;
  overflow-y: scroll;
}
</style>
