<template>
  <div class="wrapper">
    <section>
      <h1>Grid 删格</h1>
      <p>24格栅格系统。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>快速实现响应式布局。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <div>
      <div class="demo">
        <h3>常规使用</h3>
        <div class="demo-component">
          <Grid1Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 gutter</h3>
        <div class="demo-component">
          <Grid2Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 offset</h3>
        <div class="demo-component">
         <Grid3Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 order</h3>
        <div class="demo-component">
          <Grid5Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 flex</h3>
        <div class="demo-component">
          <Grid4Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持响应式</h3>
        <div class="demo-component">
          <Grid6Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Col from '../lib/Col.vue';
import Row from '../lib/Row.vue';
import Grid1Demo from './grid/Grid1Demo.vue';
import Grid6Demo from './grid/Grid6Demo.vue';
import Grid5Demo from './grid/Grid5Demo.vue';
import Grid4Demo from './grid/Grid4Demo.vue';
import Grid3Demo from './grid/Grid3Demo.vue';
import Grid2Demo from './grid/Grid2Demo.vue';
export default {
  components: {Grid2Demo, Grid3Demo, Grid4Demo, Grid5Demo, Grid6Demo, Grid1Demo, Row, Col}
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
      max-width: 1200px;
      margin: 0 auto;
    }
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed #d9d9d9;
    }
  }
}
</style>
