<template>
  <the-header></the-header>
  <the-content></the-content>
</template>

<script>
import TheHeader from "./components/Header";
import TheContent from "./components/Content";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContent,
  },
};
</script>
