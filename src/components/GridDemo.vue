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
          <Row>
            <Col span="12"><div class="content light">Col-12</div></Col>
            <Col span="12"><div class="content dark">Col-12</div></Col>
          </Row>
          <Row>
            <Col span="8"><div class="content dark">Col-8</div></Col>
            <Col span="8"><div class="content light">Col-8</div></Col>
            <Col span="8"><div class="content dark">Col-8</div></Col>
          </Row>
          <Row>
            <Col span="6"><div class="content light">Col-6</div></Col>
            <Col span="6"><div class="content dark">Col-6</div></Col>
            <Col span="6"><div class="content light">Col-6</div></Col>
            <Col span="6"><div class="content dark">Col-6</div></Col>
          </Row>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 gutter</h3>
        <div class="demo-component">
          <Row gutter="10">
            <Col span="6"><div class="content light">Col-6</div></Col>
            <Col span="6"><div class="content dark">Col-6</div></Col>
            <Col span="6"><div class="content light">Col-6</div></Col>
            <Col span="6"><div class="content dark">Col-6</div></Col>
          </Row>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 offset</h3>
        <div class="demo-component">
          <Row>
            <Col span="4"><div class="content dark">Col-4</div></Col>
            <Col span="4" offset="1"><div class="content light">Col-4</div></Col>
            <Col span="4" offset="2"><div class="content dark">Col-4</div></Col>
            <Col span="4" offset="3"><div class="content light">Col-4</div></Col>
          </Row>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 flex</h3>
        <div class="demo-component">
          <Row justify="space-around">
            <Col span="5"><div class="content dark">Col-5</div></Col>
            <Col span="5"><div class="content light">Col-5</div></Col>
            <Col span="5"><div class="content dark">Col-5</div></Col>
          </Row>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 order</h3>
        <div class="demo-component">
          <Row>
            <Col span="6" order="1"><div class="content light">Col-6(1)</div></Col>
            <Col span="6" order="3"><div class="content light">Col-6(2)</div></Col>
            <Col span="6" order="2"><div class="content dark">Col-6(3)</div></Col>
            <Col span="6" order="4"><div class="content dark">Col-6(4)</div></Col>
          </Row>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Col from '../lib/Col.vue';
import Row from '../lib/Row.vue';
export default {
  components: {Row, Col}
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
      max-width: 1000px;
      margin: 0 auto;
      .xxx-row {
        margin-bottom: 18px;
        &:last-child {margin-bottom: 0;}
        .content {height: 40px; color: white; line-height: 40px; text-align: center;}
        .light {background: #d7e5f1}
        .dark {background: darken(#d7e5f1, 8%);}
      }

    }
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed #d9d9d9;
    }
  }
}
</style>
