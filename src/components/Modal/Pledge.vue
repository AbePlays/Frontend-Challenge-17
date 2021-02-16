<template>
  <div
    class="border rounded-lg my-4 font-commissioner"
    :class="{
      'border-dark-cyan': isSelected,
      'opacity-40': quantity === 0,
    }"
  >
    <div class="p-6">
      <div
        class="w-5 h-5 rounded-full border flex justify-center items-center cursor-pointer"
        @click="toggleSelected"
      >
        <div
          v-if="isSelected"
          class="w-3 h-3 rounded-full bg-moderate-cyan"
        ></div>
      </div>
      <div class="ml-10 -mt-6">
        <div class="flex justify-between">
          <div class="flex flex-wrap">
            <h1
              class="font-bold"
              :class="{
                'hover:text-moderate-cyan cursor-pointer': quantity !== 0,
              }"
              @click="toggleSelected"
            >
              {{ title }}
            </h1>
            <p v-if="price" class="sm:ml-4 text-moderate-cyan">
              Pledge ${{ price }} or more
            </p>
          </div>
          <div v-if="quantity !== null" class="hidden sm:flex sm:items-center">
            <p class="font-bold text-xl">{{ quantity }}</p>
            <span class="ml-1 font-light text-dark-gray text-sm">left</span>
          </div>
        </div>
        <p class="my-4 text-dark-gray">{{ description }}</p>
        <div
          v-if="quantity !== null"
          class="sm:hidden mt-4 sm:mt-0 flex items-center"
        >
          <p class="font-bold text-xl">{{ quantity }}</p>
          <span class="ml-1 font-light text-dark-gray text-sm">left</span>
        </div>
      </div>
    </div>
    <div v-if="isSelected" class="w-full h-px shadow-inner"></div>
    <div
      v-if="isSelected"
      :class="{ 'sm:justify-end': !quantity, 'sm:justify-between': quantity }"
      class="sm:flex px-6 py-4 sm:items-center"
    >
      <p
        v-if="!error && quantity"
        class="text-dark-gray text-center sm:text-left w-full"
      >
        Enter your pledge
      </p>
      <p
        v-else-if="error && quantity"
        class="text-red-600 text-center sm:text-left w-full"
      >
        Enter ${{ price }} or more
      </p>

      <div class="flex justify-center mt-4 sm:mt-0 relative">
        <div v-if="quantity" class="rounded-full border flex py-2 px-4">
          <p class="text-dark-gray">$</p>
          <input
            type="text"
            name="amount-input"
            id="amount-input"
            class="ml-2 w-12"
            v-model="amount"
            :placeholder="price"
          />
        </div>
        <button
          class="bg-moderate-cyan rounded-full px-8 text-white ml-4 hover:bg-dark-cyan transition-colors duration-300"
          :class="{ 'py-2': !quantity }"
          @click="onSubmitHandler"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "quantity", "price", "id", "isSelected"],
  data() {
    return {
      amount: "",
      picked: "",
      error: false,
    };
  },
  methods: {
    toggleSelected() {
      if (this.quantity || this.id === 0) {
        this.error = false;
        this.$emit("selected", this.id);
      }
    },
    onSubmitHandler() {
      if (this.quantity !== 0 && this.amount < this.price) {
        this.error = true;
      } else {
        this.incrementBackers();
        this.toggleModal();
        this.toggleConfirmModal();
      }
    },
  },
  inject: ["toggleConfirmModal", "toggleModal", "incrementBackers"],
  emits: ["selected"],
};
</script>
