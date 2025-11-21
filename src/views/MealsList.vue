<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-green-600">All Meals</h1>
    <p class="text-gray-600 mb-6">Browse your meal database</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="meal in meals" :key="meal.id" class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold mb-1">{{ meal.name }}</h2>
        <p class="text-gray-500 mb-1">{{ meal.category }}</p>
        <p class="text-gray-700 mb-2">Calories: {{ meal.calories }}</p>
        <button class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">View</button>
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
