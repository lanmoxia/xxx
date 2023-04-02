<template>
  <div class="wrapper">
    <section>
      <h1>Button 按钮</h1>
      <p>点击以开始即时操作。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>响应用户点击行为，触发相应业务逻辑。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <div class="button-example">
      <div class="example">
        <Button>你好</Button>
      </div>
      <div class="code-example-box">
        <div class="code-title">按钮类型</div>
        <div class="code-description">
          <p>按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。</p>
          <div class="icon-wrapper">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button}
}
</script>

<style lang="scss" scoped>
.wrapper {
  p {color: rgba(0, 0, 0, 0.65); font-size: 14px;}
  h1, h2 {color: #0d1a26; margin-bottom: 10px;}
  section {
    padding: 20px 20px 0 25px;
    max-width: 1000px;
    > h1 {font-size: 30px; line-height: 38px;}
    > h2 {font-size: 24px; line-height: 32px;}
  }
  .button-example {
    max-width: 1000px;
    margin: 0 auto;
    .example {
      padding: 35px 30px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-bottom: none;
      .content {height: 40px;}
    }
    .code-example-box {
      position: relative;
      .code-title {
        font-size: 16px;
        line-height: 28px;
        color: rgba(0, 0, 0, 0.85);
        background-color: #fff;
        padding: 0 8px;
        position: absolute;
        top: -12px;
        left: 32px;
        z-index: 1;
        border-radius: 4px;
      }
      .code-description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 32px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        .icon-wrapper { font-size: 30px;}
      }
    }
  }
}
</style>
