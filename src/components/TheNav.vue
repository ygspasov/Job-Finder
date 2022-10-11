<template>
  <header class="w-full text-base">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-job-grey-1"
      >
        <a href="/" class="flex items-center h-full text-xl">{{ company }}</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      company: "Job Finder",
    };
  },
};
</script>
