<template>
  <button data-vitest-id="ViewportButton">{{ size }}</button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export type ViewportButtonSize = 'lg' | 'md' | 'sm'

export default defineComponent({
  name: 'ViewportButton',
  props: {
    size: {
      type: String as PropType<ViewportButtonSize>,
      required: true
    }
  }
})
</script>
