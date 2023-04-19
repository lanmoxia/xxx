<template>
  <Radio :options="options"></Radio>
</template>

<script lang="ts">
import {reactive} from 'vue';
import Radio from '../../lib/Radio.vue'
export default {
  components: {Radio},
  setup(){
    const state = reactive({
      options: [
        {label: "Apple", value: 1},
        {label: "Orange", value: 2},
        {label: "Pear", value: 3},
        {label: "Disabled", value: 4, disabled: true}
      ],
    })
    const {options} = state
    return {options}
  }
}
</script>

<style lang="scss" scoped>

</style>
