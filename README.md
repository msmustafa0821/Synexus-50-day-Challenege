# 🗓️ Day 20 – Stateful UI Architecture & CRUD Logic (Task Tracker)

## 🎯 Objective

Built a fully functional **Task Tracker** using **Vanilla JavaScript** by implementing a complete CRUD (Create, Read, Update, Delete) workflow. This project introduced state-driven UI architecture, where the application state controls what is displayed on the screen.

---

## 🚀 Features Implemented

* ✅ Created a task input field and add task button.
* ✅ Managed tasks using a JavaScript state array.
* ✅ Added new tasks dynamically.
* ✅ Rendered tasks from the application state.
* ✅ Marked tasks as completed using checkboxes.
* ✅ Deleted tasks using Event Delegation.
* ✅ Re-rendered the UI after every state change.
* ✅ Stored tasks in LocalStorage.
* ✅ Restored saved tasks automatically after page refresh.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* DOM Manipulation
* LocalStorage API

---

## 🧠 JavaScript Concepts Learned

* State Management
* CRUD Operations
* Dynamic DOM Rendering
* Event Delegation
* Array Manipulation

  * `push()`
  * `find()`
  * `filter()`
* Template Literals
* LocalStorage Persistence
* Conditional Rendering

---

## 📂 Project Workflow

### 🟢 Create

* Accepted user input.
* Generated a unique task object using `Date.now()`.
* Added the object to the application state.

### 🔵 Read

* Rendered every task from the `taskState` array.
* Generated task elements dynamically using JavaScript.

### 🟡 Update

* Toggled a task's completed status.
* Applied visual styling to completed tasks.

### 🔴 Delete

* Removed tasks from the state using `Array.filter()`.
* Automatically refreshed the UI after deletion.

---

## 💾 LocalStorage Integration

To provide persistence:

* Saved the task list after every add, update, or delete operation.
* Loaded previously saved tasks when the page was refreshed.

This ensures the task tracker maintains its state even after closing or reloading the browser.

---

## 🎯 Outcome

This project strengthened my understanding of **state-driven programming** and demonstrated how modern frontend applications keep the user interface synchronized with application data. By implementing a complete CRUD system with LocalStorage, I gained practical experience building interactive web applications using only Vanilla JavaScript.

---

## 📌 Challenge Status

✅ **Day 20 Completed Successfully**
