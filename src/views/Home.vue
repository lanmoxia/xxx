<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>XXX-ui</h1>
      <h2>XXX-ui 框 架</h2>
      <p class="actions">
        <a href="#">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
  components: {TopNav}
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc(#{$h}/2);
      padding: 0 8px;
    }
  }
}
</style>
