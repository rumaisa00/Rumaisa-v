<template>
  <div>
    <!-- Header / Navigation -->
    <header class="bg-green-600 text-white p-4">
      <nav class="max-w-5xl mx-auto flex gap-4">
        <router-link to="/">Home</router-link>
        <router-link to="/calendar">Calendar</router-link>
        <router-link to="/kanban">Kanban</router-link>
        <router-link to="/meals">Meals</router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="p-6">
      <router-view /> <!-- this renders the current page -->
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-gray-700 p-4 text-center">
      SmartDiet © 2025
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* optional global styles */
</style>
