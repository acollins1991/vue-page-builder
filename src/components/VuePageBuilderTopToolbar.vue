<template>
  <div data-vitest-id="VuePageBuilderTopToolbar" class="vpb-w-screen vpb-bg-black vpb-p-3">
    <div>
      <ViewportButtons />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewportButtons from './ViewportButtons.vue'

export default defineComponent({
  name: 'VuePageBuilderTopToolbar',
  components: {
    ViewportButtons
  }
})
</script>
