<template>
  <div class="card">
    <div class="card-priority">
      <span :class="priorityClass">{{ priorityLabel }}</span>
    </div>
    <div class="card-text">
      {{ text }}
    </div>
    <div class="card-footer">
      <div class="card-footer-addition">
        <div>comments:{{ countOfComments }}</div>
        <div>files:{{ countOfFiles }}</div>
      </div>
      <div class="card-footer-users">
        <div>+</div>
        <div>
          <div v-for="(user, index) in users" :key="index">
            <img src="#" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    text: {},
    users: {},
    countOfComments: {},
    countOfFiles: {},
    priority: {},
  },
  data: () => ({
    priorityText: ["Low Priority", "Med Priority", "High Priority"],
  }),
  computed: {
    priorityLabel() {
      return this.priorityText[this.priority - 1];
    },
    priorityClass() {
      return this.priorityLabel.replace(" ", "-").toLowerCase();
    },
  },
};
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 5px;
  margin: 10px;
}
.low-priority {
  background: linear-gradient(134.34deg, #9ea7fc 0%, #65b6f7 114.98%);
}

.med-priority {
  background: linear-gradient(315.14deg, #81d5ee 0%, #7ed492 133.97%);
}

.high-priority {
  background: linear-gradient(133.98deg, #c781ff -18.23%, #e57373 125.36%);
}
</style>
