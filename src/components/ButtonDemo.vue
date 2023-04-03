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
    <div>
      <div class="demo">
        <h3>常规用法</h3>
        <div class="demo-component">
          <Button>Button</Button>
          <Button theme="link">Link</Button>
          <Button theme="text">Text</Button>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 size</h3>
        <div class="demo-component">
          <div>
            <Button size="big">大大大</Button>
            <Button>普普通通</Button>
            <Button size="small">小小小小</Button>
          </div>
          <div>
            <Button theme="link" size="big">大大大</Button>
            <Button theme="link">普普通通</Button>
            <Button theme="link" size="small">小小小小</Button>
          </div>
          <div>
            <Button theme="text" size="big">大大大</Button>
            <Button theme="text">普普通通</Button>
            <Button theme="text" size="small">小小小小</Button>
          </div>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 level</h3>
        <div class="demo-component">
          <div>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
          </div>
          <div>
            <Button theme="link" level="main">主要链接</Button>
            <Button theme="link">普通链接</Button>
            <Button theme="link" level="danger">危险链接</Button>
          </div>
          <div>
            <Button theme="text" level="main">主要链接</Button>
            <Button theme="text">普通链接</Button>
            <Button theme="text" level="danger">危险链接</Button>
          </div>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 disabled</h3>
        <div class="demo-component">
          <div>
            <Button disabled>禁用按钮</Button>
            <Button theme="link" disabled>禁用链接按钮</Button>
            <Button theme="text" disabled>禁用按钮</Button>
          </div>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 loading</h3>
        <div class="demo-component">
          <div>
            <Button loading>加载中</Button>
            <Button>加载完成</Button>
          </div>
        </div>
        <div class="demo-actions">查看代码</div>
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
