<template>
  <div class="bg-white rounded-lg py-2" ref="dropdown">
    <a href="#" class="block my-3 w-max px-4" @click="toggleMenu">About</a>
    <div class="w-full h-px bg-gray-200"></div>
    <a href="#" class="block my-3 w-max px-4" @click="toggleMenu">Discover</a>
    <div class="w-full h-px bg-gray-200"></div>
    <a href="#" class="block my-3 w-max px-4" @click="toggleMenu"
      >Get Started</a
    >
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: ["toggleMenu"],
  mounted() {
    gsap.from(this.$refs.dropdown, {
      height: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  },
};
</script>

