<template>
  <div>
    <the-nav></the-nav>
    <h1 class="mt-5 text-center text-4xl">Job Finder</h1>
    <focus-section></focus-section>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import FocusSection from "./components/FocusSection.vue";

export default {
  name: "App",
  components: { TheNav, FocusSection },
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
