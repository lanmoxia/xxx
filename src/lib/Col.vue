<template>
  <div class="xxx-col" :style="colStyle">
    <slot />
  </div>
</template>

<script>

import {computed, inject} from 'vue'

export default {
  props: {
    // 所占具体空间份数
    span: {
      type: [String, Number],
    },
    // 对应弹性布局汇中的order属性
    order: {
      type: [String, Number],
    },
    // 偏移量
    offset: {
      type: [String, Number],
    },
    // 对应弹性布局flex属性
    flex: {
      type: [String, Number],
    },
  },
  setup(props){
    const rowInstance = inject('rowInstance')
    const colStyle = computed(() => {
      const {flex, span, order, offset} = props
      return {
        flex: span ? `calc(100% / 24 * ${span})` : flex ? flex : "",
        maxWidth: span ? `calc(100% / 24 * ${span})` : "none",
        paddingLeft: rowInstance.gutter / 2 + "px",
        paddingRight: rowInstance.gutter / 2 + "px",
        order: order * 1,
        marginLeft: offset ? `calc(100% / 24 * ${offset})` : ""
      }
    })
    return {colStyle}
  }
}
</script>

<style lang="scss">
@for $i from 1 through 24 {
  .xxx-col-#{$i} {
    flex: calc(100% / 24 * #{$i});
    max-width: calc(100% / 24 * #{$i});
  }
}
</style>
