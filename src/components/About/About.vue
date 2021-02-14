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
        v-for="item in items"
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
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Bamboo Stand",
          quantity: 101,
          description:
            "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
          amount: 25,
        },
        {
          id: 2,
          name: "Black Edition Stand",
          quantity: 64,
          description:
            "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          amount: 75,
        },
        {
          id: 3,
          name: "Mahogany Special Edition",
          quantity: 0,
          description:
            "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          amount: 200,
        },
      ],
    };
  },
};
</script>

