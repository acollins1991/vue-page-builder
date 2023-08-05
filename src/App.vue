<template>
  <VuePageBuilder />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VuePageBuilder } from './build'

export default defineComponent({
  components: {
    VuePageBuilder
  }
})
</script>

<style lang="scss">
@import '@/assets/main.scss';
</style>
