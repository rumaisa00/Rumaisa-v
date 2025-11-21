<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-4xl font-bold mb-6 text-green-600">Weekly Meal Calendar</h1>
    <p class="text-gray-600 mb-6">Track your meals throughout the week</p>

    <div class="grid grid-cols-7 gap-4">
      <div v-for="day in days" :key="day.name" class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition text-center">
        <h3 class="font-semibold text-lg mb-2">{{ day.name }}</h3>
        <p class="text-gray-500">{{ day.meals.join(', ') || 'No meals' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        { name: 'Mon', meals: ['Oatmeal'] },
        { name: 'Tue', meals: [] },
        { name: 'Wed', meals: ['Grilled Chicken Salad'] },
        { name: 'Thu', meals: [] },
        { name: 'Fri', meals: [] },
        { name: 'Sat', meals: ['Steamed Vegetables'] },
        { name: 'Sun', meals: [] },
      ],
    };
  },
};
</script>
