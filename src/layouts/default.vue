<template>
  <NavigationBar/>
  <slot />
  <NavigationBottom/>
</template>
<script>
import NavigationBar from "../components/NavigationBar.vue"
import NavigationBottom from "../components/NavigationBottom.vue"
export default {
  components: {
    NavigationBar,
    NavigationBottom
  }
}
</script>