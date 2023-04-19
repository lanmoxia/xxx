<template>
  <div class="wrapper">
    <section>
      <h1>Radio 单选框</h1>
      <p>单选框。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>需要在多个备选项中选择单个状态时。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <div>
      <div class="demo">
        <h3>常规使用</h3>
        <div class="demo-component">
          <Radio1Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>纵向布局</h3>
        <div class="demo-component">
          <Radio2Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>自定义默认值</h3>
        <div class="demo-component">
          <Radio3Demo />
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Radio1Demo from './radio/Radio1Demo.vue'
import Radio2Demo from './radio/Radio1Demo.vue'
import Radio3Demo from './radio/Radio1Demo.vue'
export default {
  components: {Radio1Demo, Radio2Demo, Radio3Demo}
}
</script>

<style lang="scss" scoped>
.wrapper {
  p {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }

  h1, h2 {
    color: #0d1a26;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid #d9d9d9;
  }

  section {
    padding-bottom: 20px;

    > h1 {
      font-size: 30px;
      line-height: 38px;
    }

    > h2 {
      font-size: 24px;
      line-height: 32px;
    }
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
