<template>
  <button class="xxx-button"
          :class="classes" :disabled="disabled">
    <slot/>
  </button>
</template>

<script lang="ts">
import{computed} from 'vue';

export default {
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level:{
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
  setup(props:any){
    const {theme, size, level, disabled} = props
    const classes = computed(() => {
      return {
        [`xxx-theme-${theme}`]: theme,
        [`xxx-size-${size}`]: size,
        [`xxx-level-${level}`]: level,
        [`xxx-disabled-${disabled}`]: disabled
      }
    })
    return {classes}
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: rgba(0, 0, 0, 0.15);
$color: rgba(0, 0, 0, 0.65);
$blue: rgb(36, 61, 84);
$radius: 4px;
$red: red;
$grey: gray;
.xxx-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.xxx-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue, 50%);
    }
    &.xxx-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.xxx-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: $color;
    &:hover,&:focus{
      background: darken(#f3f8fd, 2%);
    }
    &.xxx-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.xxx-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.xxx-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.xxx-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.xxx-theme-button {
    &.xxx-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.xxx-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.xxx-theme-link {
    &.xxx-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.xxx-theme-text {
    &.xxx-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.xxx-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.xxx-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.xxx-theme-link, &.xxx-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}
</style>
