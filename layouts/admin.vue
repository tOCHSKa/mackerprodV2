<template>
    <div class="app-container">
      <div class="sidebar">
        <Sidebar />
      </div>
  
      <div class="topbar">
        <Topbar />
      </div>
  
      <div class="main">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '@/components/admin/Sidebar.vue'
  import Topbar from '@/components/admin/Topbar.vue'
  </script>
  
  <style scoped>
  .app-container {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas:
      "sidebar topbar"
      "sidebar main";
    min-height: 100vh;
  }
  
  .sidebar {
    grid-area: sidebar;
  }
  
  .topbar {
    grid-area: topbar;
  }
  
  .main {
    grid-area: main;
    padding: 1rem;
    overflow-y: auto;
  }
  </style>
  