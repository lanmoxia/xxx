<template>
  <RouterView />
</template>

<script lang="ts">
import  {provide, ref} from 'vue';
import { router } from './router';

export default {
  name: 'App',

  setup(){
    // 获取页面宽度
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500)
    provide('menuVisible', menuVisible)

    // 移动端路由改变 menuVisible 的值
    router.afterEach(() => {
      if(width <= 500){
        console.log(menuVisible.value)
        menuVisible.value = false
      }
    })
  }
}
</script>
