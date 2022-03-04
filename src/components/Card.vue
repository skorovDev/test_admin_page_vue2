<template>
  <div class="card">
    <div class="card-priority">
      <span class="card-priority-label" :class="priorityClass">
        {{ priorityLabel }}</span
      >
    </div>
    <div class="card-text">
      {{ text }}
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <div class="card-footer-addition d-flex">
        <div class="card-footer-addition-paperclip">
          <font-awesome-icon icon="paperclip" />
          {{ countOfComments }}
        </div>
        <div class="card-footer-addition-message">
          <font-awesome-icon icon="message" />
          {{ countOfFiles }}
        </div>
      </div>
      <div class="card-footer-users">
        <div class="d-flex">
          <div class="plus">+</div>
          <div class="user" v-for="(user, index) in users" :key="index">
            <font-awesome-icon icon="user-large" />
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

<style scoped lang="scss">
.card {
  background: #ffffff;
  border-radius: 5px;
  margin: 10px;

  .card-priority {
    &-label {
      padding: 5px;
      border-radius: 5px;
    }
  }

  .user {
    margin-left: -28px;
    margin-top: 10px;
    color: #ffffff;
    text-align: center;
    padding-top: 2px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #d8d8e4;

    &:hover {
      cursor: pointer;
    }
  }

  .plus {
    margin-top: 10px;
    margin-right: 30px;
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

  .card-footer {
    &-addition {
      &-paperclip {
        margin: 10px;
      }

      &-message {
        margin: 10px;
      }

      color: #ccccd7;
    }
  }
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
