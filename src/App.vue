<template>
  <the-nav></the-nav>
  <h1 class="mt-5 text-center text-4xl">Job Finder</h1>
</template>

<script>
import TheNav from "./components/TheNav.vue";

export default {
  name: "App",
  components: { TheNav },
};
</script>

<style>
body {
  background: #ccc;
}
h1 {
  font-family: roboto;
}
</style>
