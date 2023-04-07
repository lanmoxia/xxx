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
          <Switch v-model:value="bool1"/>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持文字切换</h3>
        <div class="demo-component">
          <Switch v-model:value="bool5" on-text="on" off-text="off"/>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 disabled</h3>
        <div class="demo-component">
          <Switch v-model:value="bool8" disabled/>
          <Switch v-model:value="bool9" disabled/>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持 zoom</h3>
        <div class="demo-component">
          <Switch v-model:value="bool2" zoom="1.2"/>
          <Switch v-model:value="bool4" zoom="0.8"/>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>支持背景色</h3>
        <div class="demo-component">
          <Switch v-model:value="bool5" on-background="#77c88d" off-background="#c0e5ca"/>
          <Switch v-model:value="bool6" on-background="#77b0c8" off-background="#c0dae5"/>
          <Switch v-model:value="bool7" on-background="#ff6b89" off-background="#ffd1da"/>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  components: {Switch},
  setup(){
    const bool1 = ref(false)
    const bool2 = ref(false)
    const bool3 = ref(true)
    const bool4 = ref(true)
    const bool5 = ref(true)
    const bool6 = ref(true)
    const bool7 = ref(true)
    const bool8 = ref(true)
    const bool9 = ref(false)
    return {bool1, bool2, bool3, bool4, bool5, bool6, bool7, bool8, bool9}
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
