# 🎬 MackerProd V2

> Application web moderne de gestion de production vidéo développée avec Nuxt 3

[![Nuxt](https://img.shields.io/badge/Nuxt-3.16-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🎯 Vue d'ensemble

**MackerProd V2** est une plateforme web destinée aux professionnels de la vidéo, offrant une interface moderne et intuitive pour gérer l'ensemble du workflow de production vidéo, de l'organisation des contenus à leur présentation client.

Cette application démontre une maîtrise complète de l'écosystème Vue.js moderne et des meilleures pratiques de développement front-end.

## ✨ Fonctionnalités principales

- 🎥 **Gestion de portfolio vidéo** : Organisation et présentation professionnelle des réalisations
- 🛠️ **Showcase de prestations** : Mise en valeur des services proposés
- 📱 **Design responsive** : Interface adaptative pour tous les appareils
- ⚡ **Performance optimale** : Transitions fluides et chargement optimisé
- 🎨 **UI/UX soignée** : Expérience utilisateur moderne avec animations personnalisées

## 🏗️ Architecture technique

### Stack technologique

```
Frontend Framework    → Nuxt 3 (Vue 3 + SSR)
State Management     → Pinia
Styling              → Tailwind CSS v4 + Nuxt UI
Image Optimization   → TinyPNG
Icons                → Font Awesome
Testing              → N/C
Security             → reCAPTCHA v3 + JWT
```

### Structure du projet

```
mackerprodV2/
├── assets/              # Ressources statiques (CSS, images)
├── components/          # Composants Vue réutilisables
│   ├── home/           # Composants de la page d'accueil
│   ├── PageRealisation/# Composants portfolio
│   └── PagePrestation/ # Composants services
├── content/            # Contenu structuré (Markdown/YAML)
├── layouts/            # Templates de mise en page
├── middleware/         # Guards de navigation
├── pages/              # Routing automatique basé sur les fichiers
├── plugins/            # Plugins Vue.js personnalisés
├── public/             # Fichiers statiques publics
├── server/             # API routes et logique serveur
└── store/              # Gestion d'état Pinia
```

## 🚀 Compétences démontrées

### Architecture & Patterns
- ✅ Architecture modulaire et scalable
- ✅ Séparation des responsabilités (SoC)
- ✅ Organisation par fonctionnalité
- ✅ Gestion d'état centralisée avec Pinia
- ✅ Routing avancé avec middleware

### Développement Vue.js
- ✅ Composition API et script setup
- ✅ Composants réactifs et performants
- ✅ Gestion du cycle de vie des composants
- ✅ Props, events et composables personnalisés
- ✅ Server-Side Rendering (SSR)

### Styling & UI/UX
- ✅ Tailwind CSS v4 avec configuration personnalisée
- ✅ Design system cohérent
- ✅ Animations et transitions CSS
- ✅ Responsive design mobile-first
- ✅ Accessibilité (a11y)

### Performance
- ✅ Optimisation des images avec Nuxt Image
- ✅ Lazy loading des composants
- ✅ Code splitting automatique
- ✅ Transitions fluides entre pages

### Sécurité & Bonnes pratiques
- ✅ Intégration reCAPTCHA v3
- ✅ Authentification JWT
- ✅ Variables d'environnement
- ✅ Validation des données
- ✅ Protection CSRF

## 📦 Installation et lancement

### Prérequis
- Node.js 18+ ou 20+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/tOCHSKa/mackerprodV2.git

# Installer les dépendances
cd mackerprodV2
npm install

# Lancer en développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Scripts disponibles

```bash
npm run dev        # Mode développement avec hot-reload
npm run build      # Build de production
npm run generate   # Génération statique (SSG)
npm run preview    # Preview du build de production
```

## 🔧 Configuration

### API Backend

L'application se connecte à une API REST. L'URL de base est configurable via variable d'environnement :

```env
API_BASE=http://localhost:3001/api
```

### Modules Nuxt intégrés

| Module | Utilité |
|--------|---------|
| `@nuxt/content` | Gestion de contenu basé sur des fichiers |
| `@nuxt/ui` | Composants UI pré-stylisés |
| `@nuxt/image` | Optimisation automatique des images |
| `@nuxt/icon` | Bibliothèque d'icônes unifiée |
| `@pinia/nuxt` | Gestion d'état moderne |

## 🎨 Fonctionnalités UI

- **Transitions de pages** : Effet de fade avec blur pour une navigation fluide
- **Scroll smooth** : Navigation interne douce
- **Font-Awesome** : Icônes professionnelles
- **Design moderne** : Interface épurée et intuitive
- **Thème cohérent** : Palette de couleurs harmonieuse

## 📊 Points forts du projet

### 🎯 Professionnalisme
- Code structuré et maintenable
- Conventions de nommage respectées
- Documentation en cours de développement
- Versioning avec Git

### ⚡ Performance
- Optimisation du bundle JavaScript
- Images responsive et optimisées
- Lazy loading stratégique
- Core Web Vitals optimisés

### 🔐 Sécurité
- Protection contre les bots (reCAPTCHA)
- Gestion sécurisée des tokens
- Validation des entrées utilisateur

### 🧪 Qualité
- Configuration TypeScript
- Tests unitaires prévus (Nuxt Test Utils)
- Linting et formatage du code

## 🚧 Développement en cours

Le projet est activement développé avec les priorités suivantes :

- [ ] Implémentation complète du système d'authentification
- [ ] Dashboard de gestion des contenus
- [ ] Upload et conversion de vidéos
- [ ] Système de tags et filtres
- [ ] Optimisation SEO avancée
- [ ] Tests unitaires et e2e
- [ ] Documentation API complète

## 🎓 Apprentissages et défis relevés

Ce projet m'a permis de :

- Maîtriser **Nuxt 3** et ses nouveautés (auto-imports, server routes, composables)
- Approfondir **Vue 3** avec la Composition API
- Implémenter une architecture **scalable** et **maintenable**
- Gérer un **state management** complexe avec Pinia
- Optimiser les **performances** d'une SPA
- Intégrer des **API externes** (reCAPTCHA, API REST)
- Utiliser **Tailwind v4** avec ses nouvelles fonctionnalités

## 📬 Contact

**Développeur** : [UbedaKevin](https://github.com/UbedaKevin/)

Pour toute question technique ou opportunité de collaboration :
- 📧 Via GitHub
- 💼 [Profil LinkedIn](https://www.linkedin.com/in/kevin-ubeda-400045292/)
- 🌐 [Portfolio](https://kevinubeda.netlify.app/)

---

**⭐ Si ce projet vous intéresse, n'hésitez pas à le star !**

Made with ❤️ and ☕ by UbedaKevin
