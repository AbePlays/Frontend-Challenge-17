<template>
  <div class="bg-gray-50">
    <the-header></the-header>
    <the-content></the-content>
    <about></about>
  </div>
</template>

<script>
import TheHeader from "./components/Header";
import TheContent from "./components/Content";
import About from "./components/About";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContent,
    About,
  },
};
</script>
