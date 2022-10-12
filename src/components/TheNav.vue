<template>
  <header class="w-full text-base font-roboto">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-job-grey-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{ site }}</a>
        <nav class="space-x-4 ml-10 h-full">
          <ul class="flex list-none h-full">
            <li
              v-for="link in links"
              :key="link"
              class="flex h-full items-center mx-2 first:ml-0 last: mr-0"
            >
              <a
                href="/dashboard"
                class="p-5 font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                >{{ link }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      site: "Job Finder",
      url: "https://carrers.google.com",
      links: ["Locations", "Application process", "Available jobs"],
    };
  },
};
</script>
<style scoped></style>
