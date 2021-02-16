<template>
  <header class="relative font-commissioner">
    <div class="h-80 sm:h-96 w-screen">
      <img
        src="../../assets/image-hero-desktop.jpg"
        alt="Header"
        class="hidden sm:block h-full w-full object-cover"
      />
      <img
        src="../../assets/image-hero-mobile.jpg"
        alt="Header"
        class="block sm:hidden h-full w-full object-cover"
      />
    </div>
    <div
      class="absolute top-4 left-0 right-0 max-w-screen-lg mx-auto h-12 px-4 flex justify-between text-white items-center"
    >
      <img src="../../assets/logo.svg" class="h-6" alt="logo" />
      <div>
        <ul class="hidden sm:flex">
          <li class="mr-4"><a href="#">About</a></li>
          <li class="mr-4"><a href="#">Discover</a></li>
          <li class=""><a href="#">Get Started</a></li>
        </ul>
        <img
          v-if="!isDropdownOpen"
          class="sm:hidden cursor-pointer relative z-20"
          src="../../assets/icon-hamburger.svg"
          alt="menu"
          @click="toggleMenu"
        />
        <img
          v-else
          class="sm:hidden cursor-pointer relative z-20"
          src="../../assets/icon-close-menu.svg"
          alt="menu"
          @click="toggleMenu"
        />
      </div>
    </div>
    <div
      v-if="isDropdownOpen"
      class="absolute top-20 left-0 right-0 max-w-screen-lg mx-auto px-4 shadow z-20"
    >
      <dropdown :toggleMenu="toggleMenu"></dropdown>
    </div>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.toggleBackdrop();
    },
  },
  inject: ["toggleBackdrop"],
};
</script>