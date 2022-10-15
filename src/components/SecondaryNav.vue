<template>
  <div class="w-full h-16 bg-white border-b border-solid border-job-grey-1">
    <div class="flex h-full px-8">
      <div class="flex ml-auto items-center h-full">
        <font-awesome-icon :icon="['fas', 'search-dollar']" class="mr-3" />
        <span><span class="text-job-green-1">1542</span> job results</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SecondaryNav",
  data() {
    return {
      onJobsPage: true,
    };
  },
};
</script>
<style></style>
