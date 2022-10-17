<template>
  <main>
    <section class="flex flex-col pt-10 pb-20 bg-#ccc">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline></headline>
          <search-form></search-form>
        </div>
        <div class="col-start-7 col-span-5"></div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "./Headline.vue";
import SearchForm from "./SearchForm.vue";
export default {
  components: {
    Headline,
    SearchForm,
  },
};
</script>
<style></style>
