<template>
  <Switch v-model:value="bool" on-text="on" off-text="off"/>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../../lib/Switch.vue'
export default {
  components: {Switch},
  setup(){
    const bool = ref(true)
    return{bool}
  }
}
</script>

<style lang="scss" scoped>

</style>
