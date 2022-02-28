<template>
  <div id="app">
    <t-modal header="Title of the modal" v-model="show">
      Content of the modal.
      <template v-slot:footer>
        <div class="flex justify-between">
          <t-button type="button"> Cancel </t-button>
          <t-button type="button"> Ok </t-button>
        </div>
      </template>
    </t-modal>
  </div>
</template>

<script>
import { TModal, TButton } from "vue-tailwind/dist/components";

export default {
  name: "App",
  data: () => ({
    show: true,
  }),
  components: {
    TModal,
    TButton,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
