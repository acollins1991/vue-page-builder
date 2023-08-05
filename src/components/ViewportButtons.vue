<template>
  <div data-vitest-id="ViewportButtons" class="flex">
    <ViewportButton v-for="size in sizes" :key="size" :size="size" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewportButton, { type ViewportButtonSize } from './ViewportButton.vue'

export default defineComponent({
  name: 'ViewportButtons',
  components: {
    ViewportButton
  },
  setup() {
    const sizes: ViewportButtonSize[] = ['lg', 'md', 'sm']
    return {
      sizes
    }
  }
})
</script>
