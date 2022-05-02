<template>
  <div id="app">
    <TabBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue';

export default {
  components: {
    TabBar,
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 375px;
  height: 100px;
}
</style>
