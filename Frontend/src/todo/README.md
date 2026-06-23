Todo App
========

This is a self-contained Todo application built with React and plain CSS.

Files
- `components/` - `Header.jsx`, `TodoForm.jsx`, `TodoList.jsx`, `TodoItem.jsx`, `FilterButtons.jsx`
- `App.jsx` - main app component
- `App.css` - styles
- `main.jsx` - standalone entry

Usage

1. To run this app inside the existing Vite project, update `index.html` to import `src/todo/main.jsx` instead of the default `src/main.jsx`, or replace the app's root import.

2. Alternatively, import the `App` component from `src/todo/App.jsx` into your existing `src/App.jsx` and render it.

Local Storage: tasks are persisted to `localStorage` under key `todo-app:tasks`.
