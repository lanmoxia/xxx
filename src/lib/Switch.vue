<template>
  <button
      class="xxx-switch"
      @click="toggle"
      :class="{'xxx-checked': value}"
      :style="{background:switchBackground, zoom}"
      :disabled="disabled">
    <span class="pellet"></span>
    <span class="text" :style="{background: textBackground}">{{toggleText}}</span>
  </button>
</template>

<script lang="ts">

import {computed} from 'vue';
import Button from './Button.vue'
export default {
  components: {Button},
  props: {
    value:  Boolean,
    zoom: {
      type: String,
      default: ''
    },
    onBackground: {
      type: String,
      default: ''
    },
    offBackground: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onText: {
      type: String,
      default: ''
    },
    offText: {
      type: String,
      default: ''
    },
    onTextBackground: {
      type: String,
      default: ''
    },
    offTextBackground: {
      type: String,
      default: ''
    }
  },
  setup(props:any, context:any){
    const {onBackground, offBackground, onText, offText, onTextBackground, offTextBackground} = props
    const setBackground = () => {
      if(onBackground.length && offBackground.length){
        return props.value ? onBackground : offBackground
      }else {return props.value ? '#243D54FF' : '#bfbfbf'}
    }
    const setText = () => {
      if(onText && offText) {
        return props.value ? onText : offText
      }
    }
    const setTextBackground = () => {
      if(onTextBackground && offTextBackground){
        return props.value ? onTextBackground : offBackground
      }else{
        return props.value ? '#243D54FF' : '#bfbfbf'
      }
    }
    const switchBackground = computed(() => {return setBackground()})
    const toggleText = computed(() => {return setText()})
    const textBackground = computed(() => {return setTextBackground()})
    const toggle = () => {context.emit('update:value', !props.value)}
    return{toggle, switchBackground, toggleText, textBackground}
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.xxx-switch {
  width: calc(#{$h}*2); height: $h;
  border: none; border-radius: calc(#{$h}/2); position: relative;
  &[disabled]{
    cursor: not-allowed; opacity: 0.48;
  }
  & + & {margin-left: 8px;}
  > .text{
    width: 30px; line-height: 20px; border-radius: 4px; color: white;
    margin-left: calc(100% + 10px);outline: none;
    display: flex; justify-content: center;align-items: center;
  }
  > .pellet {
    width: $h2; height: $h2; background: white;
    position: absolute;top: 2px;left: 2px;
    border-radius: calc(#{$h2}/2);transition: all 250ms;}
  &.xxx-checked {
    > .pellet {left: calc(100% - #{$h2} - 2px);}
  }
  &:focus {outline: none;}
  &:active{ > .pellet {width: calc(#{$h2} + 4px);}}
  &.xxx-checked:active{
    > .pellet {width: calc(#{$h2} + 4px); margin-left: -4px;}
  }
}
</style>
