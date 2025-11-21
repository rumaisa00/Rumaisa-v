# SmartDiet — Personalized Meal & Calorie Planner Web App

## 1. Project Description
SmartDiet is a Vue 3 web application that helps users plan their daily meals based on calorie goals, dietary preferences, and health objectives. Users can track meals, manage a daily/weekly meal plan, view nutritional information, and follow progress through charts. Admin users manage the food database and categories. The system includes user authentication, smart filtering, and a calendar-based meal planner.

---

## 2. Problem Statement
Many people struggle to plan balanced meals and track calorie intake daily. Existing apps are either too complex, not customizable, or lack simple visualization of progress. SmartDiet helps users plan their meals based on personal goals, track calories, and maintain a healthy diet effortlessly.

---

## 3. Target Users
- Individuals who want to maintain a healthy lifestyle
- Fitness enthusiasts tracking macros and calories
- Users with dietary restrictions or specific health goals
- Admins (nutritionists or diet planners) who manage the food database

---

## 4. Success Criteria
- Users can register/login and set dietary goals
- Users can plan meals (breakfast, lunch, dinner) per day/week
- CRUD operations on foods and meals work as expected
- Meal calendar and analytics pages show progress
- Responsive design works on desktop and mobile
- CI/CD with linting and unit tests passes

---

## 5. User Stories
1. As a **user**, I want to register and log in so that my data is secure and personalized.
2. As a **user**, I want to add meals to a daily plan so I can track my diet.
3. As a **user**, I want to add custom foods with nutritional info so I can track them accurately.
4. As a **user**, I want to see a weekly meal calendar so I can plan ahead.
5. As a **user**, I want to view my daily/weekly calorie summary so I can monitor progress.
6. As an **admin**, I want to manage the food database so that users have accurate options.
7. As a **user**, I want to filter foods by type/calories so I can choose meals easily.
8. As a **user**, I want to view analytics charts showing calorie trends so I can see my improvement.
9. As a **user**, I want to receive alerts if my daily calorie exceeds the goal.
10. As a **user**, I want a responsive UI so I can use the app on my phone or desktop.

---

## 6. Non-Goals
- AI-based meal recommendations
- Integration with wearable devices
- Online payment or subscription system
- Realtime social features or messaging

---

## 7. Low-Fidelity Wireframes
- **Home/Dashboard** – shows today’s meals, calorie progress, summary chart
- **Food List** – browse/search/filter foods
- **Meal Planner/Calendar** – drag-drop meals into daily planner
- **Meal Detail** – view/edit individual meals and ingredients
- **Analytics** – charts of daily/weekly calorie intake

*(Create simple PNGs or PDFs for each page and add them in a `wireframes` folder)*

---

## 8. Tech Setup
- Vue 3 + Vite
- Vue Router for navigation
- Pinia for state management
- Axios for API calls
- ESLint + Prettier for code formatting

**Suggested folder structure:**

---

## 9. Base Layout
- **Header:** logo, navigation links, profile/logout
- **Nav:** sidebar or topbar for quick links (Home, Planner, Foods, Analytics)
- **Content:** page-specific views
- **Footer:** copyright/info
- Responsive shell for desktop & mobile

---

## 10. Routes (3+)
- `/login` – Login page
- `/dashboard` – Home/Dashboard
- `/planner` – Daily/weekly meal planner
- `/foods` – Food list
- `/analytics` – Progress charts

---

## 11. Acceptance Checklist
- [x] Runs locally
- [x] 3+ routes implemented
- [x] Pinia store exists
- [x] README includes problem, target users, success criteria, user stories, non-goals
- [x] Wireframes added in `wireframes` folder
