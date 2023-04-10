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
          <Button1Demo/>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 size</h3>
        <div class="demo-component">
          <Button2Demo/>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 level</h3>
        <div class="demo-component">
          <Button3Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 disabled</h3>
        <div class="demo-component">
          <Button4Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 loading</h3>
        <div class="demo-component">
          <Button5Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Button1Demo from './buttonDemo/Button1Demo.vue';
import Button2Demo from './buttonDemo/Button2Demo.vue';
import Button3Demo from './buttonDemo/Button3Demo.vue';
import Button4Demo from './buttonDemo/Button4Demo.vue';
import Button5Demo from './buttonDemo/Button5Demo.vue';
export default {
  components: {Button5Demo, Button4Demo, Button3Demo, Button2Demo, Button1Demo, Button}
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
