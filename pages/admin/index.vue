<template>
        <main class="main-content">
            <div class="page-header">
                <div class="page-title">
                    <h1>Tableau de bord</h1>
                    <p>Bienvenue dans votre espace d'administration</p>
                </div>
                <button class="btn btn-primary">
                    <i class="fas fa-plus"></i>
                    Nouvel élément
                </button>
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
                    <div class="card-value">1,248</div>
                    <div class="card-footer">
                        <i class="fas fa-arrow-up positive"></i>
                        <span class="positive">12%</span> depuis le mois dernier
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Revenus</span>
                        <div class="card-icon green">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                    </div>
                    <div class="card-value">$24,890</div>
                    <div class="card-footer">
                        <i class="fas fa-arrow-up positive"></i>
                        <span class="positive">8%</span> depuis le mois dernier
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Commandes</span>
                        <div class="card-icon orange">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    <div class="card-value">356</div>
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
                    <div class="card-value">3.6%</div>
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
                            <th>Montant</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#4567</td>
                            <td>Jean Dupont</td>
                            <td>12/05/2023</td>
                            <td>$128.90</td>
                            <td><span class="status active">Complété</span></td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                            <td>#4566</td>
                            <td>Marie Martin</td>
                            <td>11/05/2023</td>
                            <td>$245.50</td>
                            <td><span class="status pending">En cours</span></td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                            <td>#4565</td>
                            <td>Pierre Bernard</td>
                            <td>10/05/2023</td>
                            <td>$89.99</td>
                            <td><span class="status active">Complété</span></td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                            <td>#4564</td>
                            <td>Sophie Leroy</td>
                            <td>09/05/2023</td>
                            <td>$156.75</td>
                            <td><span class="status inactive">Annulé</span></td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                        <tr>
                            <td>#4563</td>
                            <td>Thomas Moreau</td>
                            <td>08/05/2023</td>
                            <td>$210.00</td>
                            <td><span class="status active">Complété</span></td>
                            <td><i class="fas fa-ellipsis-v"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
</template>
<script setup>
definePageMeta({
  layout: 'admin'
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
</style>