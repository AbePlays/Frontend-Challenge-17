<template>
  <div class="max-w-screen-md mx-auto transform -translate-y-24 px-4 mt-8">
    <div class="bg-white font-commissioner p-8 rounded-lg text-center shadow">
      <div class="block sm:flex sm:justify-between sm:items-center">
        <div>
          <h1 class="font-bold text-xl">${{ moneyRaised }}</h1>
          <p class="text-dark-gray mt-1">of ${{ goal }} backed</p>
        </div>
        <div
          class="h-px w-1/3 mx-auto bg-gray-200 sm:w-px sm:h-10 my-4 sm:my-0"
        ></div>
        <div>
          <h1 class="font-bold text-xl">56</h1>
          <p class="text-dark-gray mt-1">days left</p>
        </div>
        <div
          class="h-px w-1/3 mx-auto bg-gray-200 sm:w-px sm:h-10 my-4 sm:my-0"
        ></div>
        <div>
          <h1 class="font-bold text-xl">{{ totalBackers }}</h1>
          <p class="text-dark-gray mt-1">total backers</p>
        </div>
      </div>

      <div
        class="w-full h-3 rounded-full bg-gray-100 mt-8 mb-4 overflow-hidden"
      >
        <div
          class="h-3 rounded-full bg-moderate-cyan"
          :style="{
            width: (moneyRaised * 100) / goal + '%',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["moneyRaised", "totalBackers", "goal"],
};
</script>

