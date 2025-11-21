<!-- src/views/MealsList.vue -->
<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4 text-green-600">Meals List</h1>
    <p class="text-gray-600 mb-6">Browse all available foods and categories.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="meal in meals" :key="meal.id" class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold mb-2">{{ meal.name }}</h2>
        <p class="text-gray-500 mb-2">{{ meal.category }}</p>
        <p class="text-gray-700">Calories: {{ meal.calories }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meals: [
        { id: 1, name: "Oatmeal", category: "Breakfast", calories: 150 },
        { id: 2, name: "Grilled Chicken Salad", category: "Lunch", calories: 350 },
        { id: 3, name: "Steamed Vegetables", category: "Dinner", calories: 200 },
      ],
    };
  },
};
</script>
