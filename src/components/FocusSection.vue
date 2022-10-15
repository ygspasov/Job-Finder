<template>
  <main>
    <section class="flex flex-col pt-10 pb-20 bg-#ccc">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          <first-headline></first-headline>
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">
          5 columns
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import FirstHeadline from "./FirstHeadline.vue";
export default {
  components: {
    FirstHeadline,
  },
};
</script>
<style></style>
