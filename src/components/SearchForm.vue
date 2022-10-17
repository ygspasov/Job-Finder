<template>
  <div>
    <form
      action=""
      class="flex items-center w-full h-12 mt-14 bg-white border border-solid border-job-gray-3 rounded-3xl"
    >
      <font-awesome-icon :icon="['fa', 'search']" class="ml-4 mr-3" />
      <div class="flex flex-nowrap flex-1 h-full text-base font-light">
        <div class="relative flex items-center flex-1 h-full pr-2">
          <label for="" class="absolute left-2 -top-10">Position</label>
          <input
            type="text"
            placeholder="Programmer"
            class="w-full text-xl font-normal focus:outline-none pl-2"
          />
        </div>
        <span
          class="flex text-xl items-center h-full px-3 border-l border-r border-job-grey-3 bg-job-grey-2"
          >in</span
        >
        <div class="relative flex items-center flex-1 h-full pr-2">
          <label for="" class="absolute left-2 -top-10">City</label>
          <input
            type="text"
            placeholder="Sofia"
            class="w-full text-lg font-normal focus:outline-none pl-2"
          />
        </div>
      </div>
      <user-button
        button-text="Find"
        class="rounded-r-3xl h-full hover:bg-job-blue-2 hover:text-white px-3"
      ></user-button>
    </form>
  </div>
</template>
<script>
import UserButton from "./UserButton.vue";
export default {
  components: {
    UserButton,
  },
};
</script>
<style></style>
