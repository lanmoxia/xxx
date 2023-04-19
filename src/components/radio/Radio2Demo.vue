<template>
  <Radio :options="options" portrait></Radio>
</template>

<script lang="ts">
import {reactive, ref} from 'vue';
import Radio from '../../lib/Radio.vue'
export default {
  components: {Radio},
  setup(){
    const state = reactive({
      options: [
        {label: "Apple", value: 1},
        {label: "Orange", value: 2},
        {label: "Pear", value: 3, disabled: true},
        {label: "Disabled", value: 4}
      ],
    })
    const {options} = state
    return {options}
  }
}
</script>
