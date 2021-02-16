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
  },
  provide() {
    return {
      toggleModal: this.toggleModal,
      toggleBackdrop: this.toggleBackdrop,
      toggleConfirmModal: this.toggleConfirmModal,
    };
  },
};
</script>
