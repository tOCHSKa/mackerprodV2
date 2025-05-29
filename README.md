# Documentation technique — mackerprodV2

## 1. Présentation

**mackerprodV2** est une application web développée avec **Nuxt.js 3**, sans TypeScript.  
Elle est conçue pour un vidéaste souhaitant convertir et organiser ses contenus vidéo à travers une interface web moderne.  
Le projet est actuellement en cours de développement.

---

## 2. Objectifs du projet

- Permettre à un vidéaste de convertir des fichiers vidéos
- Offrir une interface de gestion simple et ergonomique pour ses contenus
- Créer une architecture modulaire, maintenable et extensible

---

## 3. Structure du projet

Voici les répertoires et fichiers principaux du projet :

### Répertoires

- `assets`  
  Contient les fichiers statiques liés au style ou aux images.

- `components`  
  Contient les composants Vue.js utilisés à travers l’application (ex. : éléments UI).

- `content`  
  Prévu pour le contenu structuré si le module `@nuxt/content` est utilisé.

- `diagramme`  
  Répertoire spécifique pour stocker des diagrammes de flux, d’architecture ou de navigation.

- `layouts`  
  Gabarits de mise en page réutilisables par les différentes pages de l’application.

- `middleware`  
  Fonctions exécutées avant le rendu des pages (par exemple, vérification d’authentification).

- `pages`  
  Pages de l'application. Chaque fichier correspond à une route accessible via l’URL.

- `plugins`  
  Plugins personnalisés pour enrichir les fonctionnalités globales de Nuxt.

- `public`  
  Contient des fichiers accessibles directement via le navigateur (images, favicon, etc).

- `server`  
  Contient la logique côté serveur, notamment les API endpoints.

- `store`  
  Gestion de l’état global de l’application, généralement avec Pinia.

### Fichiers

- `app.vue`  
  Composant racine de l’application.

- `nuxt.config.js`  
  Fichier de configuration principal du projet Nuxt.

- `package.json`  
  Liste des dépendances, scripts et métadonnées du projet.

---

## 4. Fonctionnalités prévues

- Interface de conversion de fichiers vidéo
- Gestion d'une bibliothèque de contenus
- Possibilité de trier, supprimer et consulter des vidéos
- Intégration potentielle avec un service de traitement vidéo (ex. : backend REST)

---

## 5. Développement en cours

Le projet est actuellement en phase de structuration. Les priorités de développement incluent :

- Définition de l’architecture de pages et composants
- Mise en place du système de navigation
- Développement des premières interfaces utilisateur
- Connexion à l’API backend pour le traitement vidéo

---

## 6. Déploiement

Le projet est prévu pour être déployé sur une plateforme compatible avec Nuxt 3, que ce soit sur un serveur Node.js ou un hébergement type Static Hosting (avec génération statique).

---

## 7. Prochaine documentation à prévoir

- Détail des composants
- Documentation des routes et vues
- Intégration avec le backend
- Interface d’administration du contenu
- Guide utilisateur pour le vidéaste

---

## 8. Auteur et contact

Projet développé par [tOCHSKa](https://github.com/tOCHSKa).  
Pour toute question technique ou besoin de collaboration, consulter directement le dépôt GitHub ou ouvrir une issue.

