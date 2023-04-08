<template>
  <div class="wrapper">
    <section>
      <h1>Switch 按钮</h1>
      <p>开关选择器。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>需要在两种状态之间切换时。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <div>
      <div class="demo">
        <h3>常规用法</h3>
        <div class="demo-component">
          <Switch1Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持文字切换</h3>
        <div class="demo-component">
          <Switch2Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 disabled</h3>
        <div class="demo-component">
         <Switch3Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 zoom</h3>
        <div class="demo-component">
          <Switch4Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持背景色</h3>
        <div class="demo-component">
          <Switch5Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Switch1Demo from './switchDemo/Switch1.demo.vue'
import Switch2Demo from './switchDemo/Switch2.demo.vue'
import Switch3Demo from './switchDemo/Switch3.demo.vue'
import Switch4Demo from './switchDemo/Switch4.demo.vue'
import Switch5Demo from './switchDemo/Switch5.demo.vue'
export default {
  components: {Switch1Demo, Switch2Demo, Switch3Demo, Switch4Demo, Switch5Demo},
  setup(){

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
