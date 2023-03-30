<template>
  <RouterView />
</template>

<script lang="ts">
import  {provide, ref} from 'vue';

export default {
  name: 'App',

  setup(){
    // 获取页面宽度
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500)
    provide('menuVisible', menuVisible)
  }
}
</script>
