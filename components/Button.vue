<template>
  <v-btn :disabled="disabled" @click="disabled = true">
    {{ label }}
  </v-btn>
</template>

<script lang="ts">
import { Ref } from '@nuxt/bridge/dist/runtime'

export interface ButtonProps {
  label: string
}

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup() {
    const disabled: Ref<boolean> = ref(false)
    return { disabled }
  },
})
</script>
