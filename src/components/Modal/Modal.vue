<template>
  <div
    class="flex justify-center items-center absolute top-4 left-4 right-4 min-h-screen max-w-screen-md mx-auto z-20"
  >
    <div class="bg-white rounded-lg w-full p-6 font-commissioner shadow">
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
        :title="'Pledge with no reward'"
        :description="'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'"
        :price="null"
        :quantity="null"
      ></pledge>
      <pledge
        v-for="item in items"
        :key="item.id"
        :title="item.name"
        :description="item.description"
        :price="item.amount"
        :quantity="item.quantity"
      ></pledge>
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
    };
  },
  inject: ["toggleModal"],
};
</script>

