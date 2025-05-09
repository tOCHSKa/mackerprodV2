<template>
    <header class="topbar">
        <div class="topbar-left">
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Rechercher...">
            </div>
        </div>
        
        <div class="topbar-right">
            <div class="theme-toggle" id="themeToggle"></div>
            
            <div class="notification-bell">
                <i class="fas fa-bell"></i>
                <span class="notification-badge">3</span>
            </div>
            
            <div class="user-profile">
                <div class="user-avatar">JD</div>
            </div>
        </div>
    </header>    
</template>

<script setup>
</script>

<style scoped>
 /* Topbar */
 .topbar {
            grid-area: topbar;
            background-color: var(--sidebar-bg);
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.12rem var(--spacing-lg);
            position: sticky;
            top: 0;
            z-index: 90;
        }

        .topbar-left {
            display: flex;
            align-items: center;
        }

        .menu-toggle {
            display: none;
            margin-right: var(--spacing-md);
            cursor: pointer;
        }

        .search-bar {
            position: relative;
            width: 300px;
        }

        .search-bar input {
            width: 100%;
            padding: var(--spacing-sm) var(--spacing-md);
            padding-left: 2.5rem;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background-color: var(--card-bg);
            color: var(--text-color);
            transition: all 0.3s ease;
        }

        .search-bar i {
            position: absolute;
            left: var(--spacing-md);
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.7;
        }

        .topbar-right {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
        }

        .notification-bell, .user-profile {
            position: relative;
            cursor: pointer;
        }

        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: var(--danger-color);
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.65rem;
            font-weight: bold;
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

        /* Dark mode toggle */
        .theme-toggle {
            position: relative;
            width: 44px;
            height: 24px;
            border-radius: 12px;
            background-color: var(--border-color);
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .theme-toggle::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
            transition: transform 0.3s ease;
        }

        [data-theme="dark"] .theme-toggle::after {
            transform: translateX(20px);
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
