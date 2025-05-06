# 🗓️ Work of the Day – Jour 3 : Début du back-office (Admin)

---

## 🎯 Objectif

Mettre en place la structure de base du back-office pour permettre :
- L’authentification de l’admin
- L’accès sécurisé à l’espace d’administration
- Un dashboard simple comme point d’entrée

---

## 1️⃣ Partie Théorique – Organisation du back-office

### 📌 À réfléchir :

- Arborescence de l’espace admin :
  - `/admin/login` → page de connexion
  - `/admin/dashboard` → tableau de bord (accès protégé)
  - Composants `AdminLayout.vue`, `AdminSidebar.vue`, etc.

- Authentification :
  - Utilisation de `JWT`
  - Login POST → API Express → vérif en base de données → renvoi d’un token/session
  - Middleware côté backend pour sécuriser les routes
  - Middleware côté frontend pour rediriger si pas connecté

> 💡 On ne gère qu’un seul compte admin dans un premier temps

---

## 2️⃣ Partie Pratique – Mise en place du back-office

### 🛠️ À faire :

#### 📂 Backend (Express)

- Créer une route `POST /api/login` pour authentifier un utilisateur
- Stocker un utilisateur admin en base (ou en dur pour le test)
- Créer un middleware de protection (`authMiddleware.js`)
- Configurer JWT

#### 💻 Frontend (Nuxt)

- Créer une page `pages/admin/login.vue` avec formulaire (email + password)
- Créer une page `pages/admin/dashboard.vue` (vide pour le moment)
- Créer un `AdminLayout.vue` avec un menu latéral + contenu

#### 🧪 Bonus si le temps le permet :
- Afficher un message d’erreur si login incorrect
- Rediriger automatiquement si l’utilisateur est déjà connecté

---

### ✅ Livrable

- Accès sécurisé à `/admin/dashboard` après connexion réussie
- Logout possible (clear session/token)
- Composant layout admin fonctionnel
- Code versionné sur branche `admin-auth`

---

## 🧠 Ressources utiles

- [Nuxt middleware auth](https://nuxt.com/docs/guide/directory-structure/middleware)
- [JWT with Nuxt and Express](https://authjs.dev/)

---

## ✅ Checkpoints de fin de journée

- [ ] Login fonctionnel avec appel API
- [ ] Redirection vers dashboard si connecté
- [ ] Middleware de sécurité opérationnel
- [ ] Layout de l’admin prêt pour les prochaines pages

