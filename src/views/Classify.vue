<template>
  <div class="classify-wrapper">
    <!-- 搜索框 -->
    <div class="search-btn">
      <van-icon name="search" />
      <div>苹果特价1元</div>
    </div>
    <!-- 一级导航 -->
    <OneTab />
  </div>
</template>

<script>
import OneTab from '../components/OneTab.vue';

export default {
  components: {
    OneTab,
  },
};
</script>

<style lang="less" scoped>
.classify-wrapper {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background: #eee;
    border-radius: 10px;
    font-size: 14px;
    margin: 11px auto 0;
    text-align: center;
    color: #a1a1a1;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
