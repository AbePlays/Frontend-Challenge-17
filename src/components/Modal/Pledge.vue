<template>
  <div
    class="border rounded-lg my-4 font-commissioner"
    :class="{ 'border-dark-cyan': isSelected }"
  >
    <div class="p-6">
      <div class="flex justify-between items-baseline">
        <input type="radio" id="select" value="select" v-model="picked" />
        <div class="ml-4">
          <div class="flex justify-between">
            <div class="flex flex-wrap">
              <h1 class="font-bold">{{ title }}</h1>
              <p v-if="price" class="sm:ml-4 text-moderate-cyan">
                Pledge ${{ price }} or more
              </p>
            </div>
            <div
              v-if="quantity !== null"
              class="hidden sm:flex sm:items-center"
            >
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
    </div>
    <div v-if="isSelected && quantity" class="w-full h-px shadow-inner"></div>
    <div
      v-if="isSelected && quantity"
      class="sm:flex sm:justify-between px-6 py-4 sm:items-center"
    >
      <p class="text-dark-gray text-center sm:text-left w-full">
        Enter your pledge
      </p>
      <div class="flex justify-center mt-4 sm:mt-0">
        <div class="rounded-full border flex py-2 px-4">
          <p class="text-dark-gray">$</p>
          <input
            type="text"
            name="amount-input"
            id="amount-input"
            class="ml-2 w-12"
          />
        </div>
        <button class="bg-moderate-cyan rounded-full px-8 text-white ml-4">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "quantity", "price"],
  data() {
    return {
      isSelected: false,
      picked: "",
    };
  },
};
</script>
