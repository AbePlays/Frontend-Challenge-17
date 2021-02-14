<template>
  <div class="my-8 border rounded-xl p-4">
    <div class="sm:flex sm:justify-between">
      <h1 class="font-bold">{{ productName }}</h1>
      <p class="text-moderate-cyan mt-1 sm:mt-0">
        Pledge ${{ pledgeMoney }} or more
      </p>
    </div>
    <p class="my-8 sm:my-6 text-dark-gray">{{ productDescription }}</p>
    <div class="sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center">
        <h1 class="font-bold text-3xl">
          {{ productQuantity }}
        </h1>
        <p class="font-normal text-xs text-dark-gray ml-1">left</p>
      </div>
      <button
        class="bg-moderate-cyan rounded-full px-8 py-2 text-white mt-4 sm:mt-0"
      >
        Select Reward
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "productName",
    "productDescription",
    "pledgeMoney",
    "productQuantity",
  ],
};
</script>
