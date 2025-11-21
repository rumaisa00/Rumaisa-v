<template>
  <div>
    <header class="bg-green-600 text-white p-4">
      <nav class="max-w-5xl mx-auto flex gap-4">
        <router-link class="hover:underline" to="/">Home</router-link>
        <router-link class="hover:underline" to="/calendar">Calendar</router-link>
        <router-link class="hover:underline" to="/kanban">Kanban</router-link>
        <router-link class="hover:underline" to="/meals">Meals</router-link>
      </nav>
    </header>

    <main class="p-6">
      <router-view />
    </main>

    <footer class="bg-gray-100 text-gray-700 p-4 text-center">
      SmartDiet © 2025
    </footer>
  </div>
</template>

<script>
export default { name: "App" };
</script>
