<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import {inject} from 'vue'

export default {
    setup(){
      const menuVisible = inject('menuVisible')
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value
      }
      return {toggleMenu}
    }
  }
</script>

<style lang="scss" scoped>
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
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
    top: 50%;
    transform: translate(-50%);
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
