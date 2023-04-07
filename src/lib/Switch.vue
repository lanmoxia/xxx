<template>
  <button
      class="xxx-switch"
      @click="toggle"
      :class="{'xxx-checked': value}"
      :style="{background, zoom}"
      :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">

import {computed} from 'vue';

export default {
  props: {
    value:  Boolean,
    zoom: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props:any, context:any){
    const {activeColor, inactiveColor} = props
    const setBackground = () => {
      if((activeColor.length > 0) && (inactiveColor.length > 0)){
        return props.value ? activeColor : inactiveColor
      }else {return props.value ? '#1890ff' : '#bfbfbf'}
    }
    const background = computed(() => {return setBackground()})
    const toggle = () => {context.emit('update:value', !props.value)}
    return{toggle, background}
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.xxx-switch {height: $h;width: $h*2;border: none;border-radius: $h/2;position: relative;
  &[disabled]{cursor: not-allowed; opacity: 0.48;}
  & + & {margin-left: 8px;}
  > span {position: absolute;top: 2px;left: 2px;height: $h2;width: $h2;
    background: white;border-radius: $h2 / 2;transition: all 250ms;}
  &.xxx-checked { > span {left: calc(100% - #{$h2} - 2px);} }
  &:focus {outline: none;}
  &:active{ > span {width: $h2 + 4px;} }
}
</style>
