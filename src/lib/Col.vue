<template>
  <div :class="colClass" :style="colStyle">
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
    // 下面为响应式布局属性
    xs: {
      // <576px
      type: [String, Number],
    },
    sm: {
      // ≥576px
      type: [String, Number],
    },
    md: {
      // 	≥768px
      type: [String, Number],
    },
    lg: {
      // 	≥992px
      type: [String, Number],
    },
    xl: {
      // ≥1200px
      type: [String, Number],
    }
  },
  setup(props){
    const rowInstance = inject('rowInstance')
    const {
      xs, sm, md, lg, xl,
      flex, span, order, offset
    } = props
    const colClass = computed(() => {
      return [
        'x-col',
        xs ? `x-col-xs-${xs}` : '',
        sm ? `x-col-sm-${sm}` : '',
        md ? `x-col-md-${md}` : '',
        lg ? `x-col-lg-${lg}` : '',
        xl ? `x-col-xl-${xl}` : ''
      ]
    })
    const colStyle = computed(() => {
      return {
        flex: span ? `calc(100% / 24 * ${span})` : flex ? flex : "",
        maxWidth: span ? `calc(100% / 24 * ${span})` : "none",
        paddingLeft: rowInstance.gutter / 2 + "px",
        paddingRight: rowInstance.gutter / 2 + "px",
        order: order * 1,
        marginLeft: offset ? `calc(100% / 24 * ${offset})` : ""
      }
    })
    return {colStyle, colClass}
  }
}
</script>

<style lang="scss">
@media (max-width: 576px) {
  @for $i from 1 through 24 {
    .x-col-xs-#{$i} {
      flex: calc(100% / 24 * #{$i});
      max-width: calc(100% / 24 * #{$i});
    }
  }
}
@media (min-width: 577px) {
  @for $i from 1 through 24 {
    .x-col-sm-#{$i} {
      flex: calc(100% / 24 * #{$i});
      max-width: calc(100% / 24 * #{$i});
    }
  }
}
@media (min-width: 768px) {
  @for $i from 1 through 24 {
    .x-col-md-#{$i} {
      flex: calc(100% / 24 * #{$i});
      max-width: calc(100% / 24 * #{$i});
    }
  }
}
@media (min-width: 992px) {
  @for $i from 1 through 24 {
    .x-col-lg-#{$i} {
      flex: calc(100% / 24 * #{$i});
      max-width: calc(100% / 24 * #{$i});
    }
  }
}
@media (min-width: 1200px) {
  @for $i from 1 through 24 {
    .x-col-xl-#{$i} {
      flex: calc(100% / 24 * #{$i});
      max-width: calc(100% / 24 * #{$i});
    }
  }
}
</style>
