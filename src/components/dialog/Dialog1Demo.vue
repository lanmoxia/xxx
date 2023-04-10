<template>
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
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import {ref} from 'vue';
import Button from '../../lib/Button.vue';

export default {
  components: {Button, Dialog},
  setup(){
    const visible = ref(false)
    const toggle = () => {visible.value = !visible.value}
    const fn1 = () => {return false}
    const fn2 = () => {}

    return {visible, toggle, fn1, fn2}
  }
}
</script>
