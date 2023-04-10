<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import { openDialog } from '../../lib/openDialog'

export default {
  components: {Button},
  setup(){
    const showDialog = () => {
      openDialog({
        title: "Title",
        content: "This is the test text content",
        okFn(){console.log('ok')},
        cancelFn(){console.log('cancel')}
      })
    }
    return {showDialog}
  }
}
</script>
