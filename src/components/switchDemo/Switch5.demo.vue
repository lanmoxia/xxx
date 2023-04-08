<template>
  <Switch v-model:value="bool1" on-background="#77c88d" off-background="#c0e5ca"/>
  <Switch v-model:value="bool2" on-background="#77b0c8" off-background="#c0dae5"/>
  <Switch v-model:value="bool3" on-background="#ff6b89" off-background="#ffd1da"/>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'
export default {
  components: {Switch},
  setup(){
    const bool1 = ref(true)
    const bool2 = ref(true)
    const bool3 = ref(true)
    return{bool1, bool2, bool3}
  }
}
</script>

<style lang="scss" scoped>

</style>
