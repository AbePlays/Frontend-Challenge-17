<template>
  <div
    class="bg-gray-50 relative"
    :class="{ 'overflow-hidden h-screen': isBackdropOpen }"
  >
    <the-header></the-header>
    <the-content></the-content>
    <about></about>
    <modal v-if="showModal"></modal>
    <confirm-modal v-if="showConfirmModal"></confirm-modal>
    <div
      v-if="isBackdropOpen"
      class="absolute top-0 left-0 right-0 h-screen bg-black opacity-50 z-10"
    ></div>
  </div>
</template>

<script>
import TheHeader from "./components/Header";
import TheContent from "./components/Content";
import About from "./components/About";
import Modal from "./components/Modal";
import ConfirmModal from "./components/Modal/Confirm.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContent,
    About,
    Modal,
    ConfirmModal,
  },
  data() {
    return {
      isBackdropOpen: false,
      showModal: false,
      showConfirmModal: false,
      goal: 1000,
      moneyRaised: 0,
      totalBackers: 0,
      products: [
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
  methods: {
    toggleBackdrop() {
      this.isBackdropOpen = !this.isBackdropOpen;
    },
    toggleModal() {
      this.toggleBackdrop();
      this.showModal = !this.showModal;
    },
    toggleConfirmModal() {
      this.toggleBackdrop();
      this.showConfirmModal = !this.showConfirmModal;
    },
    incrementBackers() {
      this.totalBackers = this.totalBackers + 1;
    },
  },
  provide() {
    return {
      toggleModal: this.toggleModal,
      toggleBackdrop: this.toggleBackdrop,
      toggleConfirmModal: this.toggleConfirmModal,
      moneyRaised: this.moneyRaised,
      totalBackers: this.totalBackers,
      goal: this.goal,
      products: this.products,
      incrementBackers: this.incrementBackers,
    };
  },
};
</script>
