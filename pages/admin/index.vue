<template>
        <main class="main-content">
            <div class="page-header">
                <div class="page-title">
                    <h1>Tableau de bord</h1>
                    <p>Bienvenue dans votre espace d'administration</p>
                </div>
            </div>
            
            <!-- Stats Cards -->
            <div class="card-grid">
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Utilisateurs</span>
                        <div class="card-icon blue">
                            <i class="fas fa-users"></i>
                        </div>
                    </div>
                    <div class="card-value">{{ usersCount }}</div>
                    <div class="card-footer">
                        <i class="fas fa-arrow-up positive"></i>
                        <span class="positive">12%</span> depuis le mois dernier
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Devis</span>
                        <div class="card-icon green">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                    </div>
                    <div class="card-value">4151</div>
                    <div class="card-footer">
                        <i class="fas fa-arrow-up positive"></i>
                        <span class="positive">8%</span> depuis le mois dernier
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Messages</span>
                        <div class="card-icon orange">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    <div class="card-value">{{ messageCount }}</div>
                    <div class="card-footer">
                        <i class="fas fa-arrow-down negative"></i>
                        <span class="negative">3%</span> depuis le mois dernier
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Taux de conversion</span>
                        <div class="card-icon red">
                            <i class="fas fa-percentage"></i>
                        </div>
                    </div>
                    <div class="card-value">0</div>
                    <div class="card-footer">
                        <i class="fas fa-arrow-up positive"></i>
                        <span class="positive">1.2%</span> depuis le mois dernier
                    </div>
                </div>
            </div>
            
            <!-- Recent Orders Table -->
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Devis</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="index">
                            <td>{{ user.id_utilisateur }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.created_at.slice(0, 10) }}</td>
                            <td>{{ user.devis }}</td>
                            <td><span class="status" :class="user.role">{{ user.role }}</span></td>
                            <td class="relative">
                                <div class="dropdown">
                                    <button class="dropdown-trigger" @click="toggleDropdown(index)">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu" v-show="activeDropdown === index">
                                        <a href="#" class="dropdown-item" @click.prevent="editItem(index)">
                                            <i class="fas fa-edit mr-2"></i> Modifier
                                        </a>
                                        <a href="#" class="dropdown-item" @click.prevent="viewDetails(index)">
                                            <i class="fas fa-eye mr-2"></i> Voir détails
                                        </a>
                                        <a href="#" class="dropdown-item text-red-600" @click.prevent="deleteItem(index)">
                                            <i class="fas fa-trash mr-2"></i> Supprimer
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="pagination mb-4">
                    <button 
                        class="pagination-btn" 
                        :disabled="currentPage === 1"
                        @click="currentPage--"
                    >
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="pagination-info">
                        Page {{ currentPage }} sur {{ totalPages }}
                    </span>
                    <button 
                        class="pagination-btn" 
                        :disabled="currentPage === totalPages"
                        @click="currentPage++"
                    >
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </main>
</template>
<script setup>
import { useAdminStore } from '~/store/adminStore'
definePageMeta({
  layout: 'admin'
})

const adminStore = useAdminStore()
adminStore.initializeStore()

const messages = ref([])
const error = ref(null)
const activeDropdown = ref(null)
const currentPage = ref(1)
const itemsPerPage = 5
const users = ref([])

// Computed properties pour la pagination
const totalPages = computed(() => Math.ceil(users.value.length / itemsPerPage))

const items = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return users.value.slice(start, end)
})

const toggleDropdown = (index) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
}

const editItem = (index) => {
  console.log('Édition de l\'item', index)
  activeDropdown.value = null
}

const viewDetails = (index) => {
  console.log('Voir détails de l\'item', index)
  activeDropdown.value = null
}

const deleteItem = (index) => {
    const userId = users.value[index].id_utilisateur
  console.log('Suppression de l\'utilisateur avec ID', userId);
  activeDropdown.value = null
}

// Fermer le dropdown si on clique en dehors
onMounted(() => {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      activeDropdown.value = null
    }
  })
})
const messageCount = ref(0)
async function fetchMessages () {
    try {
    const { data } = await useFetch('/api/message/count', {
      headers: {
        Authorization: `Bearer ${adminStore.token}`
      }
    })
    messageCount.value = data.value?.count ?? 0
  } catch (err) {
    error.value = err
  }
}

const usersCount = ref(0)
async function fetchUsers () {
    try {
    const { data } = await useFetch('/api/utilisateur/count', {
      headers: {
        Authorization: `Bearer ${adminStore.token}`
      }
    })
    usersCount.value = data.value?.count ?? 0
  } catch (err) {
    error.value = err
  }
}


async function fetchAllUsers () {
    try {
    const { data } = await useFetch('/api/utilisateur/getAll', {
      headers: {
        Authorization: `Bearer ${adminStore.token}`
      }
    })
    users.value = data.value
  } catch (err) {
    error.value = err
  }
}
onMounted(async () => {
  await nextTick() // ou un `watch` sur adminStore.token

  if (adminStore.token) {
    fetchMessages()
    fetchUsers()
    fetchAllUsers()  
  } else {
    console.warn("Token non disponible, fetchMessages annulé")
  }
})
</script>

<style scoped>
     /* Main content */
     .main-content {
            grid-area: main;
            padding: var(--spacing-lg);
            background-color: var(--bg-color);
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-lg);
        }

        .page-title h1 {
            font-size: 1.75rem;
            font-weight: 600;
        }

        .page-title p {
            opacity: 0.7;
            font-size: 0.9rem;
        }

        .btn {
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: var(--border-radius);
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-sm);
        }

        .btn-primary {
            background-color: var(--primary-color);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--secondary-color);
        }

        .btn-outline {
            background-color: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-color);
        }

        .btn-outline:hover {
            background-color: var(--border-color);
        }

        /* Cards */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-lg);
        }

        .card {
            background-color: var(--card-bg);
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-lg);
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-md);
        }

        .card-icon {
            width: 40px;
            height: 40px;
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

        .card-icon.blue {
            background-color: var(--primary-color);
        }

        .card-icon.green {
            background-color: var(--success-color);
        }

        .card-icon.orange {
            background-color: var(--warning-color);
        }

        .card-icon.red {
            background-color: var(--danger-color);
        }

        .card-title {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .card-value {
            font-size: 1.75rem;
            font-weight: 600;
            margin: var(--spacing-sm) 0;
        }

        .card-footer {
            font-size: 0.8rem;
            opacity: 0.7;
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
        }

        .positive {
            color: var(--success-color);
        }

        .negative {
            color: var(--danger-color);
        }

        /* Table */
        .table-container {
            background-color: var(--card-bg);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: var(--spacing-md) var(--spacing-lg);
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }

        th {
            font-weight: 600;
            background-color: rgba(var(--primary-color), 0.05);
        }

        tr:hover {
            background-color: rgba(var(--primary-color), 0.03);
        }

        .status {
            display: inline-block;
            padding: var(--spacing-sm) var(--spacing-md);
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 500;
        }

        .status.active {
            background-color: rgba(var(--success-color), 0.1);
            color: var(--success-color);
        }

        .status.inactive {
            background-color: rgba(var(--danger-color), 0.1);
            color: var(--danger-color);
        }

        .status.pending {
            background-color: rgba(var(--warning-color), 0.1);
            color: var(--warning-color);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .app-container {
                grid-template-columns: 1fr;
                grid-template-areas: 
                    "topbar"
                    "main";
            }

            .sidebar {
                transform: translateX(-100%);
            }

            .sidebar.active {
                transform: translateX(0);
            }

            .menu-toggle {
                display: block;
            }

            .search-bar {
                width: 200px;
            }
        }

        @media (max-width: 768px) {
            .card-grid {
                grid-template-columns: 1fr;
            }

            .search-bar {
                display: none;
            }
        }

        /* Dropdown */
        .dropdown {
            position: relative;
        }

        .dropdown-trigger {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
        }

        .dropdown-menu {
            position: absolute;
            right: 0;
            top: 100%;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 0.375rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            min-width: 160px;
            z-index: 50;
        }

        .dropdown-item {
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            color: #4a5568;
            text-decoration: none;
            transition: background-color 0.2s;
        }

        .dropdown-item:hover {
            background-color: #f7fafc;
        }

        .mr-2 {
            margin-right: 0.5rem;
        }

        .text-red-600 {
            color: #dc2626;
        }

        /* Pagination styles */
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            gap: 1rem;
        }

        .pagination-btn {
            background-color: #f3f4f6;
            border: 1px solid #e5e7eb;
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: all 0.2s;
        }

        .pagination-btn:hover:not(:disabled) {
            background-color: #e5e7eb;
        }

        .pagination-btn:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .pagination-info {
            font-size: 0.875rem;
            color: #4b5563;
        }
</style>