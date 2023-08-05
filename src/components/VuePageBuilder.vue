<template>
  <div data-vitest-id="VuePageBuilder" class="vpb-w-screen vpb-h-screen vpb-text-blue-500">
    <VuePageBuilderTopToolbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VuePageBuilderTopToolbar from './VuePageBuilderTopToolbar.vue'

export default defineComponent({
  name: 'VuePageBuilder',
  components: {
    VuePageBuilderTopToolbar
  }
})
</script>
