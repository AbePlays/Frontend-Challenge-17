<template>
  <div
    class="flex justify-center items-center absolute top-4 left-4 right-4 min-h-screen max-w-screen-sm mx-auto z-30"
  >
    <div class="bg-white rounded-lg text-center p-8" ref="confirmModal">
      <img src="../../assets/icon-check.svg" alt="check" class="mx-auto mt-4" />
      <h1 class="font-bold text-xl mt-4">Thanks for your support!</h1>
      <p class="text-dark-gray mt-4">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        class="bg-moderate-cyan rounded-full px-8 py-3 text-white mt-4 hover:bg-dark-cyan transition-colors duration-300"
        @click="closeModal"
      >
        Got it
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  inject: ["toggleConfirmModal"],
  methods: {
    closeModal() {
      gsap.to(this.$refs.confirmModal, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        onComplete: this.toggleConfirmModal,
      });
    },
  },
  mounted() {
    gsap.from(this.$refs.confirmModal, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
    });
  },
};
</script>

