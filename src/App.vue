<template>
  <div class="bg-gray-50 relative">
    <the-header></the-header>
    <the-content></the-content>
    <about></about>
    <modal></modal>
  </div>
</template>

<script>
import TheHeader from "./components/Header";
import TheContent from "./components/Content";
import About from "./components/About";
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContent,
    About,
    Modal,
  },
};
</script>
