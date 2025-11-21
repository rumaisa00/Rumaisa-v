<template>
  <div class="container meals-list">
    <h1>All Meals</h1>
    <p>Browse your meal database</p>

    <div class="meals-grid">
      <div v-for="meal in meals" :key="meal.id" class="card">
        <h2>{{ meal.name }}</h2>
        <p>{{ meal.category }}</p>
        <p>Calories: {{ meal.calories }}</p>
        <button class="btn-view">View</button>
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
