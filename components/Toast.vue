<template>
    <transition name="fade">
      <div
        v-if="visible"
        class="fixed bottom-6 right-6 bg-[#941E28] text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-2"
        role="alert"
      >
        <i class="fas fa-check-circle text-xl"></i>
        <span>{{ message }}</span>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const props = defineProps({
    message: String,
    duration: {
      type: Number,
      default: 3000, // 3 seconds
    },
  })
  
  const visible = ref(true)
  
  onMounted(() => {
    setTimeout(() => {
      visible.value = false
    }, props.duration)
  })
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  