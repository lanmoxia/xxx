<template>
  <button class="xxx-button"
          :class="{[`xxx-theme-${theme}`]: theme}">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
    props: {
      theme: {
        type: String,
        default: 'button'
      }
    }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: rgba(0, 0, 0, 0.15);
$color: rgba(0, 0, 0, 0.65);
$blue: rgb(36, 61, 84);
$radius: 4px;
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
  }
  &.xxx-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: $color;
    &:hover,&:focus{
      background: darken(#f3f8fd, 2%);
    }
  }
}
</style>
