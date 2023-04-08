<template>
  <Switch v-model:value="bool1" zoom="1.2"/>
  <Switch v-model:value="bool2" zoom="0.8"/>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'
export default {
  components: {Switch},
  setup(){
    const bool1 = ref(false)
    const bool2 = ref(true)
    return{bool1, bool2}
  }
}
</script>

<style lang="scss" scoped>

</style>
