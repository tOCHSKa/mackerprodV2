<template>
  <header class="w-full bg-white dark:bg-gray-800 shadow px-4 py-2 flex justify-between items-center">
    <!-- Left -->
    <div class="flex items-center space-x-4">
      <div class="cursor-pointer text-xl text-gray-700 dark:text-white">
        <i class="fas fa-bars"></i>
      </div>
      <div class="relative">
        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          placeholder="Rechercher..."
          class="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <!-- Right -->
    <div class="flex items-center space-x-4">
      <div class="cursor-pointer text-xl text-gray-700 dark:text-white">
        <i class="fas fa-moon"></i> <!-- Placeholder pour ton toggle dark mode -->
      </div>

      <div class="relative cursor-pointer text-xl text-gray-700 dark:text-white">
        <i class="fas fa-bell"></i>
        <span
          class="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
        >
          3
        </span>
      </div>

      <div class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
        JD
      </div>
    </div>
  </header>
</template>

<script setup>
// Ajouter ici un event pour le toggle du thème si nécessaire
</script>