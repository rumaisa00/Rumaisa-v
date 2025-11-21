<!-- src/components/Header.vue -->
<template>
  <header class="bg-green-500 text-white p-4 shadow-md">
    <nav class="flex justify-center gap-6 font-semibold">
      <router-link class="hover:text-yellow-200" to="/">Home</router-link>
      <router-link class="hover:text-yellow-200" to="/meals">Meals</router-link>
      <router-link class="hover:text-yellow-200" to="/kanban">Kanban</router-link>
      <router-link class="hover:text-yellow-200" to="/calendar">Calendar</router-link>
    </nav>
  </header>
</template>
