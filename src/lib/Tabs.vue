<template>
  <div class="xxx-tabs">
    <div class="xxx-tabs-nav">
      <div class="xxx-tabs-nav-item"
           :class="{selected: t === selected}"
           v-for="(t, index) in titles" :key="index" @click="select(t)">{{t}}</div>
      </div>
    <div class="xxx-tabs-content">
      <component
          class="xxx-tabs-content-item"
          :class="{selected: c.props.title === selected}"
          v-for="c in defaults" :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context){
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if(tag.type !== Tab){throw new Error("Tabs 的子标签必须是 Tab")}
    })
    const titles = defaults.map((tag) => {return tag.props.title})

    const select= (title: string) => {
      context.emit("update:selected", title)
    }
    return {defaults, titles, select}
  }
}
</script>

<style lang="scss">
$blue: rgb(80, 131, 185);
$color: #333;
$border-color: #d9d9d9;
.xxx-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
      display: none;
      &.selected{
        display: block;
      }
    }
  }
}
</style>
