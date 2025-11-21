<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-green-700">SmartDiet Dashboard</h1>
    <p class="text-gray-600 mb-6">Quick overview of your daily meals and calorie summary</p>

    <!-- Calorie Summary -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold text-gray-700 mb-2">Calories Consumed</h2>
        <p class="text-green-600 text-2xl font-bold">450 kcal</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold text-gray-700 mb-2">Calories Remaining</h2>
        <p class="text-green-600 text-2xl font-bold">1550 kcal</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold text-gray-700 mb-2">Meals Today</h2>
        <p class="text-green-600 text-2xl font-bold">3</p>
      </div>
    </div>

    <!-- Meal Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h3 class="font-semibold text-lg mb-2">Breakfast</h3>
        <p class="text-gray-600">Oatmeal, Banana</p>
        <p class="text-gray-700 mt-1">Calories: 150 kcal</p>
      </div>
      <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h3 class="font-semibold text-lg mb-2">Lunch</h3>
        <p class="text-gray-600">Grilled Chicken Salad</p>
        <p class="text-gray-700 mt-1">Calories: 350 kcal</p>
      </div>
      <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h3 class="font-semibold text-lg mb-2">Dinner</h3>
        <p class="text-gray-600">Steamed Vegetables, Rice</p>
        <p class="text-gray-700 mt-1">Calories: 200 kcal</p>
      </div>
    </div>
  </div>
</template>
