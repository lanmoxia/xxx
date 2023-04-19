<template>
  <Radio :options="options" v-bind:radio-index="radioIndex"></Radio>
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
        {label: "Pear", value: 3},
        {label: "Disabled", value: 4, disabled: true}
      ],
      radioIndex: ref(1)
    })
    const {options, radioIndex} = state
    return {options, radioIndex}
  }
}
</script>
