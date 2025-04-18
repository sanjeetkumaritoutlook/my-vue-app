<template>
    <button @click="count++">Clicked {{ count }} times</button>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const count = ref(0)
  </script>
  <!-- .ce for custome element, this is web component created in vue 3
   Ensures compatibility and auto-handling for Web Component build
   even with.ce works, but you must manually handle some internals -->
