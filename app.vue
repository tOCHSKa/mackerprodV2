<template>
  <div class="open">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html {
  scroll-behavior: smooth;
}
.open {
  font-family: "Open Sans", sans-serif;
}
</style>