# Synexus 50-Day Challenge — Day 7

# Membership Application Form UI & Interactive States

A responsive and accessible membership application form built using HTML5 and CSS3. This project focuses on form architecture, custom input styling, and interactive states such as `:focus`, `:hover`, and `:disabled`.

---

## 📖 About

This challenge demonstrates how to build a clean, standardized form interface by overriding browser default styles and providing clear visual feedback when users interact with form fields.

The form includes:

* Full Name input
* Email Address input
* Motivation textarea
* Submit button with hover and disabled states

---

## 🛠️ Technologies Used

* HTML5
* CSS3

---

## 🎯 Concepts Practiced

### HTML5 Form Architecture

* `<form>`
* `<label>`
* `<input>`
* `<textarea>`
* `<button>`

### Accessibility

* Linked every `label` using the `for` attribute
* Matched each `for` value with the corresponding `id`
* Clicking a label automatically focuses the related input field

### CSS Interactive States

* `:focus`
* `:hover`
* `:disabled`

---

## ✨ Features Implemented

### Custom Input Styling

* Removed browser default appearance
* Added consistent padding
* Added subtle borders
* Added rounded corners

### Focus State

When a user clicks inside a field:

* The border color changes to the primary blue color
* The default outline is replaced with a custom focus style

### Button States

#### Normal

* Blue background
* White text
* Rounded corners

#### Hover

* Darker blue background

#### Disabled

* Gray background
* `not-allowed` cursor

---

## 📂 Project Structure

```text
Synexus-50-Day-Challenge/
│
├── index.html
├── style.css
├── README.md
├── Synexus.png
└── member 1.png
```

---

## 🧠 Key Learnings

* How labels and inputs are connected for accessibility
* Why visual feedback is important in forms
* How to create reusable form styles
* How pseudo-classes improve user experience
* How to debug CSS selector mismatches

---

## 🐛 Bug Fixed

### CSS class mismatch

Initially, the HTML used:

```html
class="membership-application"
```

while the CSS targeted:

```css
.membership-form
```

Because the class names did not match, none of the form styles were applied.

### Solution

Updated the HTML section to:

```html
<section class="membership-form">
```

and targeted the form correctly in CSS:

```css
.membership-form form
```

---

## 🚀 Outcome

Built a fully functional and accessible membership application form with professional input styling and interactive feedback states, making the Synexus landing page feel much closer to a real production-ready application.

---

## 📅 Challenge Progress

* [x] Day 1 — Semantic HTML
* [x] Day 2 — CSS Foundations
* [x] Day 3 — Flexbox Architecture
* [x] Day 4 — Component Design
* [x] Day 5 — CSS Grid Architecture
* [x] Day 6 — Responsive Engineering
* [x] Day 7 — Form UI & Interactive States

---

## 👨‍💻 Author

**Mohammed Shaik Mustafa**


