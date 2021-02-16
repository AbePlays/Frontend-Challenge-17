<template>
  <div class="max-w-screen-md mx-auto transform -translate-y-24 px-4 mt-6">
    <div class="bg-white font-commissioner p-8 rounded-lg shadow">
      <div>
        <h1 class="font-bold text-xl">About this project</h1>
        <p class="mt-4 text-dark-gray leading-loose">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.<br /><br />
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <product
        v-for="item in products"
        :key="item.id"
        :productName="item.name"
        :productDescription="item.description"
        :pledgeMoney="item.amount"
        :productQuantity="item.quantity"
      ></product>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  inject: ["products"],
};
</script>

