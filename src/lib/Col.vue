<template>
  <div class="xxx-col" :class="'xxx-col-' + span">
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    span: {
      type: Number,
      default: 24
    }
  }
}
</script>

<style lang="scss">
@for $i from 1 through 24 {
  .xxx-col{color: white;}
  .xxx-col-#{$i} {
    flex: calc(100% / 24 * #{$i});
    max-width: calc(100% / 24 * #{$i});
  }
}
</style>
