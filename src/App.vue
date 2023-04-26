<script>
import AppHeader from "./components/AppHeader.vue";


export default {
  data() {
    return {
      title: "App",
    }
  },

  components: {
    AppHeader
  },

  
};
</script>

<template>
  <AppHeader/>

  <router-view></router-view>
</template>

<style lang="scss">
li{
  list-style: none;
  padding: 0;
}
</style>