<template>
  <header class="w-full text-base font-roboto">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-job-grey-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{ site }}</a>
        <nav class="flex space-x-4 ml-10 h-full">
          <ul class="flex list-none h-full">
            <li
              v-for="link in links"
              :key="link"
              class="flex h-full items-center mx-2 first:ml-0 last: mr-0"
              nav-test="thenav-list-item"
            >
              <a
                href="/dashboard"
                class="p-5 font-medium text-slate-700 rounded-lg hover:bg-sky-700 hover:text-white"
                >{{ link }}</a
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <user-image v-if="isLoggedIn"></user-image>
          <user-button v-else class="primary" @click="logIn"></user-button>
        </div>
      </div>
      <secondary-nav></secondary-nav>
    </div>
  </header>
</template>
<script>
import UserButton from "./UserButton.vue";
import UserImage from "@/components/UserImage.vue";
import SecondaryNav from "@/components/SecondaryNav.vue";
export default {
  components: {
    UserButton,
    UserImage,
    SecondaryNav,
  },
  data() {
    return {
      site: "Job Finder",
      url: "https://carrers.google.com",
      links: ["Locations", "Application process", "Available jobs"],
      isLoggedIn: false,
    };
  },
  methods: {
    logIn() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
<style scoped>
button {
  @apply py-3 px-4 font-bold text-white  hover:bg-job-shadow-blue rounded-lg;
}

.primary {
  @apply bg-job-blue-1;
}
.secondary {
  @apply bg-job-blue-2;
}
</style>
