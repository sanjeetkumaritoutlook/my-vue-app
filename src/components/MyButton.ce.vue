<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({
  label: String
})

const emit = defineEmits(['clicked'])

function handleClick() {
  emit('clicked')
}
</script>

  <!-- .ce for custome element, this is web component created in vue 3
   Ensures compatibility and auto-handling for Web Component build
   even with.ce works, but you must manually handle some internals -->
