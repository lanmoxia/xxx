<template>
  <div class="wrapper">
    <section>
      <h1>Tabs 标签页</h1>
      <p>选项卡切换组件。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>平级区域大块内容的的收纳和展现。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <div>
      <div class="demo">
        <h3>常规用法</h3>
        <div class="demo-component">
          <Tabs v-model:selected="defaultTitle">
            <Tab title="Tab1">内容1</Tab>
            <Tab title="Tab2">内容2</Tab>
            <Tab title="Tab3">内容2</Tab>
          </Tabs>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';
export default {
  components: {Tab, Tabs},
  setup(){
    const defaultTitle = ref('Tab2')
    return {defaultTitle}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  p {color: rgba(0, 0, 0, 0.65); font-size: 14px;}
  h1, h2 {color: #0d1a26; margin-bottom: 20px;}
  h3 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid #d9d9d9;
  }
  section {
    padding-bottom: 20px;
    > h1 {font-size: 30px; line-height: 38px;}
    > h2 {font-size: 24px; line-height: 32px;}
  }
  .demo {
    border: 1px solid #d9d9d9;
    margin-bottom: 32px;
    &-component {
      padding: 16px;
    }
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed #d9d9d9;
    }
  }
}
</style>
