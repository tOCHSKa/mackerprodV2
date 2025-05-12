<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md flex flex-col">
      <!-- Header -->
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
          <i class="fas fa-rocket text-indigo-500"></i> Espace Admin
        </h2>
      </div>

      <!-- Menu -->
      <nav class="flex-1 overflow-y-auto p-4">
        <!-- Principal -->
        <p class="text-xs uppercase text-gray-500 mb-2">Principal</p>
        <a href="#" class="flex items-center gap-3 p-2 rounded-lg bg-indigo-100 text-indigo-700 font-medium">
          <i class="fas fa-home"></i>
          <span>Dashboard</span>
        </a>

        <!-- Gestion -->
        <p class="text-xs uppercase text-gray-500 mt-6 mb-2">Gestion</p>
        <a href="#" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <i class="fas fa-users"></i>
          <span>Utilisateurs</span>
        </a>
        <a href="#" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <i class="fas fa-box"></i>
          <span>Produits</span>
        </a>
        <a href="#" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <i class="fas fa-shopping-cart"></i>
          <span>Commandes</span>
        </a>

        <!-- Paramètres -->
        <p class="text-xs uppercase text-gray-500 mt-6 mb-2">Paramètres</p>
        <a href="#" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <i class="fas fa-cog"></i>
          <span>Paramètres</span>
        </a>
        <a href="#" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <i class="fas fa-bell"></i>
          <span>Notifications</span>
        </a>
      </nav>

      <!-- Footer -->
      <div class="p-4 border-t border-gray-200 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold">JD</div>
        <div>
          <div class="text-sm font-medium text-gray-900">John Doe</div>
          <div class="text-xs text-gray-500">Administrateur</div>
        </div>
      </div>
    </aside>
  </div>
</template>