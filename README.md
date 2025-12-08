# Practical Mini-Course: Typical Layouts with CSS Grid

Below are 5 practical assignments that demonstrate the power of CSS Grid in typical layout tasks.

Viewport widths:
- Desktop: width >= 900px
- Tablet: width >= 600px and width < 900px
- Mobile: width < 600px

## 📋 Assignment 1: Responsive Product Card

**Goal:** Create a responsive product card that changes element arrangement at different screen sizes.  

**Requirements:**
- Desktop: image on the left, information on the right
- Tablet: image on top, information below
- Mobile: all elements in a column

**Hint:** Use `grid-template-areas` to switch layouts.

```html
<div class="task1">
  <div class="product-card">
    <div class="product-image">Product Image</div>
    <div class="product-title">Product Name</div>
    <div class="product-description">Product Description</div>
    <div class="product-price">Price: 999 ₽</div>
    <div class="product-actions">Action Buttons</div>
  </div>
</div>
```

---

## 📋 Assignment 2: Photo Gallery Grid (Masonry)

**Goal:** Create a photo gallery grid with elements of different heights (masonry).

**Requirements:**
- Fixed width sidebar
- Main area takes up all remaining space
- Header and footer full width
- Responsive behavior:
    * Desktop/Tablet: Sidebar on left, main on right
    * Mobile: Sidebar between header and main
- Clean semantic structure

**Hint:** Use `grid-auto-flow: dense` and `grid-auto-rows`.

```html
<div class="task2">
  <div class="gallery">
    <div class="gallery-item tall">Tall Element</div>
    <div class="gallery-item">Regular Element</div>
    <div class="gallery-item wide">Wide Element</div>
    <div class="gallery-item">Regular Element</div>
    <div class="gallery-item tall">Tall Element</div>
    <div class="gallery-item">Regular Element</div>
    <div class="gallery-item wide">Wide Element</div>
  </div>
</div>
```

---

## 📋 Assignment 3: Website Layout (header, sidebar, main, footer)

**Goal:** Create a classic website layout with a sidebar and flexible main area.

**Requirements:**
- Fixed width sidebar
- Main area takes up all remaining space
- Header and footer full width
- On mobile, sidebar moves to the bottom

**Hint:** Use named grid lines.

```html
<div class="task3">
  <div class="site-layout">
    <header class="header">Website Header</header>
    <aside class="sidebar">Sidebar</aside>
    <main class="main">Main Content</main>
    <footer class="footer">Website Footer</footer>
  </div>
</div>
```

---

## 📋 Assignment 4: Responsive Navigation Menu

**Goal:** Create a responsive menu that changes element arrangement at different screen sizes.

**Requirements:**
- Desktop: logo left, navigation center, buttons right
- Tablet: logo and navigation in two lines
- Mobile: all elements in column, burger menu

**Hint:** Use media queries to change `grid-template-columns`.

```html
<div class="task4">
  <nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="nav-menu">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contacts</li>
    </ul>
    <div class="nav-buttons">
      <button>Login</button>
      <button>Register</button>
    </div>
    <div class="burger-menu">☰</div>
  </nav>
</div>
```

---

## 📋 Assignment 5: Dashboard with Different Size Areas

**Goal:** Create a complex dashboard layout with different size areas that can be easily rearranged.

**Requirements:**
- Several areas of different sizes
- Ability to easily change area positions
- Adaptation to different screen sizes

**Hint:** Use `grid-area` for element placement.

```html
<div class="task5">
  <div class="dashboard">
    <div class="stats-card">Statistics 1</div>
    <div class="stats-card">Statistics 2</div>
    <div class="chart-large">Large Chart</div>
    <div class="recent-activity">Recent Activity</div>
    <div class="chart-medium">Medium Chart</div>
    <div class="user-list">User List</div>
  </div>
</div>
```

---

## 🎯 Implementation Tips

1. **Start with mobile version** - this simplifies adaptation to other screens
2. **Use developer tools** to visualize the grid
3. **Experiment with different approaches** - Grid offers several ways to solve one task
4. **Pay attention to** `minmax()`, `auto-fit`, `auto-fill` - these are key functions for adaptive grids
5. **Compare with Flexbox** - think about how you would solve the same task with Flexbox and why Grid is more convenient

## 📝 What We Practice in Each Assignment:

1. **Product Card** → `grid-template-areas`, media queries
2. **Photo Gallery** → `grid-auto-flow`, `grid-auto-rows`, implicit grids
3. **Website Layout** → named lines, complex layouts
4. **Navigation Menu** → adaptive columns, rearrangement
5. **Dashboard** → area size control, complex positioning

Good luck with practice! Grid is truly a powerful tool that significantly simplifies creating complex layouts compared to Flexbox for many tasks.
