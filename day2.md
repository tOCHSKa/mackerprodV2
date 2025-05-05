# 🗓️ Work of the Day – Jour 2 : Diagrammes Gantt + Séquence & Footer / Mise en page de base

---

## 🎯 Objectifs pédagogiques

- Décomposer le Header, extraire la barre de navigation dans une autre composant et l'ajouter a index.vue

- Comprendre la planification d’un projet web via un **diagramme de Gantt**

- Identifier les **interactions frontend/backend** avec un **diagramme de séquence**

- Intégrer le **Footer** à la page index

---

## 1️⃣ Partie Théorique – Diagrammes

### 📊 À faire :

- Créer un **diagramme de Gantt simplifié** :

  - Afficher la répartition des tâches par jour ou par semaine

  - Visualiser les dépendances (ex. : le backend ne peut commencer qu’après la base de données)

- Créer un **diagramme de séquence** :

  - Décrire l'interaction pour une action précise, par exemple : **envoi du formulaire de contact**

  - Participants : Visiteur → Frontend → API → Base de données → API → Frontend

### 📝 À produire :

- Un fichier `.png` pour chaque diagramme

- Un court texte explicatif : choix des tâches, logique d’interaction

> ✅ **Livrable 1** : Gantt + Séquence (image + explication dans `/docs/jour2.md`)

---

## 2️⃣ Partie Pratique – Footer + Mise en page globale

### 🛠️ À faire :

- Créer un composant `Footer.vue` dans `components/`

  - Contenu : liens de navigation, mentions légales, copyright

  - Design sobre, clair, responsive

- Créer un layout global `default.vue` dans `layouts/`

  - Structure de base :

    - `NavBar`

    - `Header`

    - `slot` pour le contenu

    - `Footer`

- Intégrer ce layout dans les pages existantes

### ✅ Livrable 2 :

- `Footer.vue` fonctionnel

---

## 🧠 Ressources utiles

- [Diagramme de Gantt rapide (GanttProject ou draw.io)](https://app.diagrams.net/)

- [Diagramme de séquence UML](https://lucid.co/templates/sequence-diagram)

- [Tailwind Footer examples](https://tailwindcomponents.com/component/footer)

---

## ✅ Checkpoint de fin de journée

- [ ] Gantt clair et logique

- [ ] Diagramme de séquence compréhensible

- [ ] `Footer.vue` responsive et élégant

- [ ] `default.vue` structuré proprement
