<template>
  <section>
    <h1>{{ action }} for every job seeker</h1>
    <h2>Find your next dream job</h2>
  </section>
</template>
<script>
export default {
  name: "FirstHeadline",
  data() {
    return {
      action: "Built",
      interval: null,
    };
  },
  created() {
    this.switchHeadline();
  },
  unmounted() {
    clearInterval(this.interval);
  },
  methods: {
    switchHeadline() {
      this.interval = setInterval(() => {
        const actions = ["Built", "Created", "Designed", "Coded"];
        const currentIndex = actions.indexOf(this.action);
        const nextIndex = (currentIndex + 1) % 4; //returns the first index after reaching the last one (4%4==0)
        const nextAction = actions[nextIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>
<style></style>
