# Day 06 – Responsive Engineering & Media Queries

## 📅 Date
Day 06 of the Synexus 50-Day Web Development Challenge

## 🎯 Objective

The goal of Day 6 was to make the website responsive so that it adapts to different screen sizes such as desktops, tablets, and mobile phones. I learned how media queries allow a website to change its layout based on the viewport width, improving readability and user experience.

---

## 🛠️ Concepts Learned

- Responsive Web Design
- CSS Media Queries
- Breakpoints
- Desktop-First Approach
- Mobile-Friendly Layouts
- Responsive Navigation
- Responsive CSS Grid
- Fluid Typography (Bonus)

---

## 💻 What I Implemented

### ✅ Tablet Layout (900px)

- Used a media query for screens smaller than **900px**.
- Changed the initiatives grid from **3 columns** to **2 columns**.

```css
@media (max-width: 900px){
    .initiatives-grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

### ✅ Mobile Layout (600px)

- Used another media query for screens smaller than **600px**.
- Changed the initiatives grid to a single column.
- Stacked the navigation vertically.
- Changed the navigation links to display vertically.

```css
@media (max-width: 600px){
    .initiatives-grid{
        grid-template-columns: repeat(1, 1fr);
    }

    nav{
        flex-direction: column;
        align-items: center;
    }

    nav ul{
        flex-direction: column;
        align-items: center;
    }
}
```

---

### ✅ Featured Card Fix

While testing on mobile, I discovered that my featured card was still trying to span two columns even though only one column existed.

Desktop:

```css
.featured{
    grid-column: span 2;
}
```

Mobile Fix:

```css
@media (max-width:600px){
    .featured{
        grid-column: span 1;
    }
}
```

This ensured the layout remained clean on smaller screens.

---

### ✅ Bonus Challenge

Implemented responsive typography using viewport units.

```css
h1{
    font-size: 8vw;
}
```

I also learned that using `clamp()` is a better professional approach because it prevents text from becoming too large or too small on different screen sizes.

---

## 🧠 Key Learnings

- Media queries allow layouts to adapt to different screen sizes.
- Breakpoints help create responsive designs.
- CSS is read from top to bottom, so media queries should be placed at the end of the stylesheet.
- Responsive design often requires overriding existing desktop styles.
- CSS Grid layouts can be modified without changing the HTML.
- Responsive websites provide a much better user experience across devices.

---

## 🚀 Outcome

Successfully converted the desktop-only webpage into a responsive website that works across desktop, tablet, and mobile devices while maintaining a clean and structured layout.


## 👨‍💻 Author

**Mohammed Shaik Mustafa**

