<template>
  <div class="h-screen w-screen absolute top-0 left-0 z-20 p-4">
    <div class="h-full max-w-screen-md mx-auto overflow-y-scroll">
      <div class="bg-white p-6 font-commissioner shadow rounded-lg">
        <div class="flex justify-between items-center">
          <h1 class="font-bold">Back this project</h1>
          <img
            src="../../assets/icon-close-modal.svg"
            alt="close-modal"
            class="cursor-pointer"
            @click="toggleModal"
          />
        </div>
        <p class="text-dark-gray my-6">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <pledge
          :id="0"
          :title="'Pledge with no reward'"
          :description="'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'"
          :price="null"
          :quantity="null"
          :isSelected="selectedIndex === 0"
          @selected="handleSelection"
        ></pledge>
        <pledge
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :description="item.description"
          :price="item.amount"
          :quantity="item.quantity"
          :isSelected="selectedIndex === item.id"
          @selected="handleSelection"
        ></pledge>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../data";
import Pledge from "./Pledge.vue";

export default {
  components: {
    Pledge,
  },
  data() {
    return {
      items: products,
      selectedIndex: -1,
    };
  },
  methods: {
    handleSelection(index) {
      this.selectedIndex = index;
    },
  },

  inject: ["toggleModal"],
};
</script>

