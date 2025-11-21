<template>
  <div class="container calendar">
    <h1>Weekly Meal Calendar</h1>
    <p>Track your meals throughout the week</p>

    <div class="calendar">
      <div v-for="day in days" :key="day.name" class="calendar-day">
        <h3>{{ day.name }}</h3>
        <p>{{ day.meals.join(', ') || 'No meals' }}</p>
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
