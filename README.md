# 🚀 Dev Stack Builder

> A modern, interactive web application built to help developers explore technologies, compare options side-by-side, and assemble their ideal development stack.

---

## 🛠️ Technologies Used
* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Icons**
* **React Toastify**

---

## ✨ Key Features
1. **Explore & Filter:** Browse a responsive grid of frontend, backend, database, and tooling options complete with ratings, difficulties, and badges.
2. **Interactive Stack Management:** Add technologies to your custom stack sidebar, prevent duplicate entries with alerts, and easily remove items individually or clear the whole stack.
3. **Smooth UI & Toast Notifications:** Enjoy responsive design across mobile and desktop, enhanced card hover effects, and instant visual feedback using Toastify alerts.

---

# Q&A

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension that lets us write HTML-like code inside JavaScript. It makes writing and reading UI components much easier and cleaner.

### 2. What is the difference between props and state?
Props are read-only data passed down from a parent component to a child. State is data managed inside a component that can change and trigger a re-render.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` lets a component remember and update data over time. We used it in `ExploreTech.tsx` to track the user's selected `stack` items.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects like data fetching after rendering. However, we didn't use it here; we used React 19’s modern `Suspense` and `use()` promise architecture instead.

### 5. Why does every item in a `.map()` list need a unique key prop?
Keys help React efficiently track which items in a list have changed, been added, or been removed, optimizing performance.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering displays different UI based on a condition. We used it in the sidebar to show either an "empty stack" message or the list of selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent-to-child data is passed using **props**. A child sends information or triggers an action back to the parent by calling a **callback function** passed down from the parent.