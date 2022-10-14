<template>
  <img :src="profileLink" alt="" class="w-8 h-8 object-contain rounded-3xl" />
</template>
<script>
export default {
  name: "UserImage",
  data() {
    return {
      profileLink: require(`@/assets/me.jpg`),
    };
  },
};
</script>
<style></style>
