<template>
  <div class="wrapper">
    <section>
      <h1>Dialog 对话框</h1>
      <p>点击以开始即时操作。</p>
    </section>
    <section>
      <h2>应用场景</h2>
      <p>需要与用户交互，同时避免中断用户的操作流程时。</p>
    </section>
    <section>
      <h2>代码示例</h2>
    </section>
    <div>
      <div class="demo">
        <h3>组件式使用</h3>
        <div class="demo-component">
          <Button @click="toggle">打开对话框</Button>
          <Dialog v-model:visible="visible" :okFn="fn1" :cancelFn="fn2" :close-on-click-overlay="false">
            <template v-slot:content>
              <strong>Bold text</strong>
              <div><p>Normal text content</p></div>
            </template>
            <template v-slot:title>
              <strong>Title</strong>
            </template>
          </Dialog>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
      <div class="demo">
        <h3>命令式使用</h3>
        <div class="demo-component">
          <Button @click="showDialog">打开对话框</Button>
        </div>
        <div class="demo-actions">查看代码</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import {openDialog} from '../lib/openDialog.ts'

export default {
  components: {Button, Dialog},
  setup(){
    const visible = ref(false)
    const toggle = () => {visible.value = !visible.value}
    const fn1 = () => {return false}
    const fn2 = () => {}

    const showDialog = () => {
      openDialog({
        title: "Title",
        content: "This is the test text content",
        okFn(){console.log('ok')},
        cancelFn(){console.log('cancel')}
      })
    }
    return {visible, toggle, fn1, fn2, showDialog}
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
