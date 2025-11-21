<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-green-600">Meal Planning Board</h1>
    <p class="text-gray-600 mb-6">Organize your meals for the week</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h2 class="font-semibold text-xl mb-2">To-Do</h2>
        <ul class="space-y-2">
          <li class="bg-green-50 p-2 rounded">Breakfast: Oatmeal</li>
          <li class="bg-green-50 p-2 rounded">Lunch: Salad</li>
        </ul>
      </div>
      <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h2 class="font-semibold text-xl mb-2">In Progress</h2>
        <ul class="space-y-2">
          <li class="bg-yellow-50 p-2 rounded">Dinner: Rice & Veggies</li>
        </ul>
      </div>
      <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h2 class="font-semibold text-xl mb-2">Done</h2>
        <ul class="space-y-2">
          <li class="bg-gray-100 p-2 rounded">Snack: Fruits</li>
        </ul>
      </div>
    </div>
  </div>
</template>
