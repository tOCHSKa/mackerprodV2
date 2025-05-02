<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <h1 class="text-2xl font-bold mb-6">Inscription</h1>

    <form @submit.prevent="register" class="flex flex-col gap-4 w-full max-w-sm">
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="border p-2 rounded"
        required
      />

      <input
        v-model="form.password"
        type="password"
        placeholder="Mot de passe"
        class="border p-2 rounded"
        required
      />

      <input
        v-model="form.confirmedpassword"
        type="password"
        placeholder="Confirmez le mot de passe"
        class="border p-2 rounded"
        required
      />

      <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        S'inscrire
      </button>
    </form>

    <NuxtLink to="/" class="mt-4 text-blue-400 underline">Retour à l'accueil</NuxtLink>
  </div>
</template>

<script setup>
const form = reactive({
  email: '',
  password: '',
  confirmedpassword: ''
});

async function register() {
  try {
    const response = await $fetch('/server/api/users/register', {
  method: 'POST',
  body: {
    email: form.email,
    password: form.password,
    confirmedpassword: form.confirmedpassword
  }
});

    console.log('Inscription réussie', response);
    alert('Inscription réussie !');
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error.data.message);
    alert(`Erreur : ${error.data.message}`);
  }
}
</script>
