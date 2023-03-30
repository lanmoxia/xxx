<template>
  <RouterView />
</template>

<script lang="ts">
import  {provide, ref} from 'vue';

export default {
  name: 'App',

  setup(){
    const menuVisible = ref(true)
    provide('menuVisible', menuVisible)
  }
}
</script>
