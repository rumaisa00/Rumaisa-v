import { defineStore } from 'pinia';

export const useMealsStore = defineStore('meals', {
  state: () => ({
    meals: [
      { id: 1, name: "Oatmeal", category: "Breakfast", calories: 150 },
      { id: 2, name: "Grilled Chicken Salad", category: "Lunch", calories: 350 },
      { id: 3, name: "Steamed Vegetables", category: "Dinner", calories: 200 },
    ],
  }),
  getters: {
    totalCalories: (state) => state.meals.reduce((sum, meal) => sum + meal.calories, 0),
  },
  actions: {
    addMeal(meal) {
      this.meals.push(meal);
    },
  },
});
