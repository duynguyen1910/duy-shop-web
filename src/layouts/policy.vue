<template>
  <div>
    <NavigationHeader />
    <slot/>
    <NavigationBottom />
  </div>
</template>

<script>
import NavigationBottom from "../components/NavigationBottom.vue";
import NavigationHeader from "../components/NavigationHeader.vue";
export default {
  components: {
    NavigationBottom,
    NavigationHeader,
  },
};
</script>

<style>
</style>