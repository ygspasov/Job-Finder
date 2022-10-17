<template>
  <section class="mb-14">
    <h1 class="font-bold text-8xl mb-12">
      <span :class="applyClasses">{{ action }}</span> for every job seeker
    </h1>
    <h2 class="text-3xl font-light">Find your next dream job.</h2>
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
  computed: {
    //Used to apply different classes for color styling of the action text
    applyClasses() {
      return this.action.toLowerCase();
    },
  },
  created() {
    this.switchHeadline();
  },
  unmounted() {
    clearInterval(this.interval);
  },
  methods: {
    //Changes headline text in seconds
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
<style scoped>
.built {
  color: blue;
}
.created {
  color: green;
}
.designed {
  color: orange;
}
.coded {
  color: red;
}
</style>
