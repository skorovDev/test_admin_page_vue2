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
      <div class="card-footer-addition d-flex align-items-center">
        <div class="card-footer-addition-message">
          <font-awesome-icon icon="message" />
          {{ countOfFiles }}
        </div>
        <div class="card-footer-addition-paperclip">
          <font-awesome-icon icon="paperclip" />
          {{ countOfComments }}
        </div>
      </div>
      <div class="card-footer-users d-flex align-items-center">
        <button class="plus">+</button>

        <div class="users d-flex">
          <button
            class="user"
            v-for="(user, index) in shortUserList"
            :key="index"
            :style="userZIndex(index)"
          >
            <font-awesome-icon icon="user-large" />
          </button>
        </div>
        <div class="counts-user" v-if="countOverShortUserList">
          + {{ countOverShortUserList }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const baseMarginRight = 15;

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
    shortUserList() {
      return this.users.slice(0, 4);
    },
    countOverShortUserList() {
      const count = this.users.length - 4;
      return count > 0 ? count : false;
    },
  },
  methods: {
    userZIndex(index) {
      const marginRight =
        this.users.length <= 4
          ? `-${baseMarginRight}px`
          : `-${baseMarginRight + ((this.shortUserList.length - 4) / 2) * 3}px`;

      return {
        zIndex: this.users.length - index,
        marginRight,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 10px;
  background: #ffffff;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .card-text {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .counts-user {
    font-size: 12px;
    margin-left: 10px;
  }

  .card-priority {
    &-label {
      color: #ffffff;
      padding: 5px;
      border-radius: 5px;
      display: inline-block;
    }
  }

  .card-footer {
    color: #ccccd7;

    &-addition-message {
      margin-right: 10px;
    }

    .user {
      color: #ffffff;
      //text-align: center;
      padding-top: 2px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: #d8d8e4;
      border: none;

      &:hover {
        cursor: pointer;
      }

      &:last-child {
        margin-right: 0 !important;
      }
    }

    .plus {
      margin-right: 10px;
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
      background: transparent;

      &:hover {
        cursor: pointer;
      }
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
