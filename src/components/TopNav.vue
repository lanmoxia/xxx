<template>
  <div class="topNav">
    <div class="logo">
      <router-link to="/">首页</router-link>
    </div>
    <ul class="menu">
      <vi><router-link to="/doc">文档</router-link></vi>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
    setup(){
      const menuVisible = inject<Ref<Boolean>>('menuVisible')
      const toggleMenu = () => {menuVisible.value = !menuVisible.value}
      return {toggleMenu}
    }
  }
</script>

<style lang="scss" scoped>
.topNav {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #243d54;
  background-image: linear-gradient(to top,#f3f8fd 0,#fff 100%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  >.toggleAside {
    padding: 12px;
    background: deeppink;
    position: absolute;
    left: 16px;
    top: 20px;
    border-radius: 50%;
    display: none;
  }
  @media (max-width: 500px){
    >.menu{display: none}
    >.logo{margin: 0 auto}
    >.toggleAside {display: inline-block}
  }
}
</style>
