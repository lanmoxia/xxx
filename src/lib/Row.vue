<template>
  <div class="xxx-row" :style="rowStyle">
    <slot />
  </div>
</template>

<script>

import {computed, getCurrentInstance, provide} from 'vue'

export default {
  props: {
    // 间隙
    gutter: {
      type: [String, Number],
    },
    // 对应弹性布局justify-content
    justify: {
      type: String,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return [
          "start",
          "end",
          "center",
          "space-around",
          "space-between",
        ].includes(value);
      },
    },
    // 对应弹性布局中align-items
    align: {
      type: String,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["flex-start", "center", "flex-end", "stretch"].includes(value);
      }
    }
  },
  setup(props){
    const {justify, align, gutter} = props
    const rowStyle = computed(() => {
      return {
        marginLeft: gutter / 2 + "px",
        marginRight: gutter / 2 + "px",
        justifyContent: justify,
        alignItems: align
      }
    })
    const instance = getCurrentInstance()
    provide('rowInstance', instance.proxy)
    return {rowStyle}
  }
}
</script>

<style lang="scss">
  .xxx-row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
