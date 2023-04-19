<template>
  <div class="xxx-radio">
    {{portrait}}
    <label
        class="xxx-radio-item"
        v-for="(item, index) in options" :key="item.value"
        @click="changeChecked(item,index)"
        :class="{'xxx-radio-disabled': item.disabled}"
        :style="{display: portrait ? 'inline-flex' : 'flex'}">
      <span class="xxx-radio-icon" :class="{'xxx-radio-checked': radioIndex === index}"></span>
      <span class="xxx-radio-text">{{item.label}}</span>
    </label>
  </div>
</template>

<script lang="ts">

import {ref} from 'vue'
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    radioIndex: {
      type: Number,
      default: 0
    },
    portrait: {
      type: Boolean,
      default: false
    }
  },
  setup(props: any){
    const radioIndex = ref(props.radioIndex)
    const flexStyle = ref('inline-flex')
    const changeChecked = (e:any, index:any) => {
      if(!e.disabled){radioIndex.value = index}
    }
    return {changeChecked, flexStyle, radioIndex}
  }
}
</script>

<style lang="scss">
.xxx-radio {
  color: rgba(0, 0, 0, 0.65);
  &-item {
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    &:hover{
      .xxx-radio-icon {border-color: #243D54FF;}
    }
  }

  &-icon {
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    position: relative;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    &::after {
      position: absolute;
      top: 3px;
      left: 3px;
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background-color: #243D54FF;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0);
      transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
  }
  &-text {padding: 0 8px; font-size: 14px; line-height: 24px;}
  &-checked {
    &.xxx-radio-icon {
      border-color: #243D54FF;
      &::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  &-disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    .xxx-radio-icon {
      cursor: not-allowed;
      border-color: #d9d9d9;
      background-color: #e6e6e6;
      &::after {
        background-color: #e6e6e6;
      }
    }
    &:hover {
      .xxx-radio-icon {border-color: #d9d9d9;}
    }
  }
}
</style>
