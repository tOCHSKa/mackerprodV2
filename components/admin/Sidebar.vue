<template>
    <aside class="sidebar">
    <div class="sidebar-header">
        <h2><i class="fas fa-rocket"></i> AdminPro</h2>
    </div>
    
    <div class="sidebar-menu">
        <p class="menu-title">Principal</p>
        <a href="#" class="menu-item active">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
        </a>
        
        <p class="menu-title">Gestion</p>
        <a href="#" class="menu-item">
            <i class="fas fa-users"></i>
            <span>Utilisateurs</span>
        </a>
        <a href="#" class="menu-item">
            <i class="fas fa-box"></i>
            <span>Produits</span>
        </a>
        <a href="#" class="menu-item">
            <i class="fas fa-shopping-cart"></i>
            <span>Commandes</span>
        </a>
        
        <p class="menu-title">Paramètres</p>
        <a href="#" class="menu-item">
            <i class="fas fa-cog"></i>
            <span>Paramètres</span>
        </a>
        <a href="#" class="menu-item">
            <i class="fas fa-bell"></i>
            <span>Notifications</span>
        </a>
    </div>
    
    <div class="sidebar-footer">
        <div class="user-profile">
            <div class="user-avatar">JD</div>
            <div class="user-info">
                <div class="user-name">John Doe</div>
                <div class="user-role">Administrateur</div>
            </div>
        </div>
    </div>
</aside>
</template>

<script setup>
</script>

<style scoped>
        .sidebar {
            grid-area: sidebar;
            background-color: var(--sidebar-bg);
            border-right: 1px solid var(--border-color);
            padding: var(--spacing-lg) 0;
            position: fixed;
            width: 240px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
            z-index: 100;
        }

        .sidebar-header {
            padding: 0 var(--spacing-lg) var(--spacing-lg);
            margin-bottom: var(--spacing-lg);
            border-bottom: 1px solid var(--border-color);
        }

        .sidebar-header h2 {
            font-size: 1.25rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
        }

        .sidebar-header h2 i {
            color: var(--primary-color);
        }

        .sidebar-menu {
            flex: 1;
            overflow-y: auto;
            padding: 0 var(--spacing-lg);
        }

        .menu-title {
            font-size: 0.75rem;
            text-transform: uppercase;
            color: var(--text-color);
            opacity: 0.7;
            margin: var(--spacing-lg) 0 var(--spacing-sm);
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        .menu-item {
            display: flex;
            align-items: center;
            padding: var(--spacing-sm) var(--spacing-md);
            margin-bottom: var(--spacing-sm);
            border-radius: var(--border-radius);
            transition: all 0.2s ease;
            font-weight: 500;
        }

        .menu-item:hover {
            background-color: rgba(var(--primary-color), 0.1);
            color: var(--primary-color);
        }

        .menu-item.active {
            background-color: rgba(var(--primary-color), 0.2);
            color: var(--primary-color);
        }

        .menu-item i {
            margin-right: var(--spacing-sm);
            width: 20px;
            text-align: center;
        }

        .sidebar-footer {
            padding: var(--spacing-lg);
            border-top: 1px solid var(--border-color);
            margin-top: auto;
        }
        .user-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
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
</style>
