# Customization Guide

This guide provides detailed instructions for customizing your portfolio website to match your personal brand.

## Color Customization

### Primary Colors
Located in `styles.css` at the top:

```css
:root {
    --primary-color: #667eea;    /* Main brand color - used in gradients, buttons */
    --secondary-color: #764ba2;  /* Secondary brand color - gradient accents */
    --accent-color: #f5576c;     /* Accent color - highlights */
}
```

### Text & Background Colors
```css
--text-primary: #1a1a1a;        /* Main text color (dark mode: #ffffff) */
--text-secondary: #666666;      /* Secondary text color (dark mode: #b0b0b0) */
--bg-primary: #ffffff;          /* Main background (dark mode: #1a1a1a) */
--bg-secondary: #f8f9fa;        /* Secondary background (dark mode: #2d2d2d) */
```

### Popular Color Palettes

**Professional Blue:**
```css
--primary-color: #0066cc;
--secondary-color: #004499;
```

**Modern Purple:**
```css
--primary-color: #8b5cf6;
--secondary-color: #7c3aed;
```

**Tech Orange:**
```css
--primary-color: #ff6b35;
--secondary-color: #f7931e;
```

**Fresh Green:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

## Font Customization

### Change Base Font
In `styles.css`, update the body font-family:

```css
body {
    font-family: 'Your Font Name', sans-serif;
    /* Examples:
    font-family: 'Segoe UI', sans-serif;        (Current)
    font-family: 'Courier New', monospace;       (Code-like)
    font-family: 'Georgia', serif;               (Elegant)
    font-family: 'Trebuchet MS', sans-serif;    (Clean)
    */
}
```

### Import Custom Fonts
Add to the top of `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* Then use in any selector: */
h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
}
```

**Free Font Resources:**
- Google Fonts (https://fonts.google.com)
- Font Awesome (https://fontawesome.com)
- DM Sans, Lexend, Inter are great modern choices

## Layout Customization

### Change Container Width
In `styles.css`:

```css
.container {
    max-width: 1200px;  /* Current - change for wider/narrower layout */
    /*
    max-width: 900px;   (Narrower, more intimate)
    max-width: 1400px;  (Wider, more spacious)
    max-width: 100%;    (Full width)
    */
}
```

### Adjust Section Padding
```css
section {
    padding: 80px 0;  /* Top/bottom padding - reduce for compact, increase for spacious */
}
```

### Grid Columns
For projects/skills grid:

```css
.projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* 
    Change 300px to:
    - 250px for 4 columns
    - 350px for 2 columns
    - 400px for single column
    */
}
```

## Section-Specific Customization

### Hero Section Background
The hero has a gradient. To change it:

```css
.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    /* Or use a solid color: */
    background: #667eea;
    /* Or add a background image: */
    background-image: linear-gradient(red, blue), url('your-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### Project Card Gradients
Each project has a unique gradient. Modify in `index.html`:

```html
<div class="project-image" style="background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);"></div>
```

**Gradient Generator:**
- https://cssgradient.io/ - Create beautiful gradients

### KPI Section Styling
Change the KPI tiles look in `styles.css`:

```css
.kpi-tile {
    background: rgba(255, 255, 255, 0.1);  /* Opacity level */
    /* Try these alternatives: */
    /* background: rgba(255, 255, 255, 0.05);  More transparent */
    /* background: rgba(0, 0, 0, 0.2);        Darker overlay */
    /* background: white;                      Solid white */
}
```

## Animation Customization

### Change Animation Speeds
In `styles.css`:

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease forwards;  
    /* 0.8s is the duration - change to:
       0.3s for quick animations
       1.2s for slow animations
       2s for very slow animations
    */
}
```

### Disable Animations
Comment out or remove animation classes from `index.html`:

```html
<!-- Remove "animate-fade-in" from classes -->
<h1>Welcome to My Portfolio</h1>
<!-- Was: <h1 class="animate-fade-in">Welcome to My Portfolio</h1> -->
```

### Add New Animations
```css
@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide-left {
    animation: slideInFromLeft 0.6s ease forwards;
}
```

## Responsive Design Customization

### Mobile Breakpoints
In `styles.css`, these control mobile styling:

```css
@media (max-width: 768px) {  /* Tablets and below */
    /* Mobile styles here */
}

@media (max-width: 480px) {  /* Small phones */
    /* Very mobile styles here */
}
```

### Change Header for Mobile
```css
@media (max-width: 768px) {
    .hero h1 {
        font-size: 36px;  /* Smaller on mobile */
    }
}
```

## Button Customization

### Button Styles
```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    padding: 12px 30px;  /* Adjust padding */
    border-radius: 5px;  /* More rounded: 25px, Less: 0px */
}
```

### Add Shadow to Buttons
```css
.btn-primary {
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    /* Increase shadow: 0 10px 30px rgba(...) */
}
```

## Form Customization

### Input Styling
```css
.form-group input,
.form-group textarea {
    border: 1px solid var(--border-color);
    border-radius: 5px;  /* 10px for rounder corners */
    padding: 15px;       /* Increase for more space */
}

/* Add shadow to inputs: */
.form-group input {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

### Input Focus Effect
```css
.form-group input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    /* Make glow bigger: 8px instead of 3px */
}
```

## Navigation Customization

### Sticky Navigation
```css
.navbar {
    position: sticky;  /* Change to 'fixed' to always show */
    top: 0;           /* Position from top */
    z-index: 100;     /* Stay above other content */
}
```

### Navigation Link Underline
```css
.nav-links a::after {
    width: 0;
    height: 2px;  /* Line thickness */
    background: linear-gradient(...);
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}
```

## Advanced Customization

### Dark Mode Toggle Button
Currently uses emoji. To use an icon:

```html
<!-- In index.html, replace: -->
<button class="theme-toggle">🌙</button>

<!-- With custom SVN or text: -->
<button class="theme-toggle">
    <svg><!-- icon svg --></svg>
</button>
```

### Add Favicon
Add to `<head>` in `index.html`:

```html
<link rel="icon" type="image/png" href="favicon.png">
<!-- or -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

Create favicon at https://favicon.io

### Add Google Analytics
Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Common Customizations

### Remove a Section
Simply delete the entire `<section>` and its closing `</section>` tag.

### Rename Section IDs
Replace all occurrences (in both `index.html` and `.nav-links`):

```html
<!-- Change from: -->
<section id="about">

<!-- To: -->
<section id="my-story">

<!-- And update nav link: -->
<a href="#my-story">My Story</a>
```

### Change Text Alignment
```css
section {
    text-align: left;    /* left, center, right */
}
```

### Add Section Borders
```css
section {
    border-bottom: 2px solid var(--border-color);
    /* or top border: */
    border-top: 2px solid var(--border-color);
}
```

## Testing Custom Changes

1. **Use Live Server:** See changes instantly
2. **Test on Mobile:** F12 → Toggle Device Toolbar
3. **Test Dark Mode:** Click moon icon
4. **Test on Different Browsers:** Chrome, Firefox, Safari, Edge
5. **Check Performance:** F12 → Performance tab

## Getting Design Inspiration

- Dribbble.com - Web design examples
- Awwwards.com - Portfolio website awards
- Behance.net - Designer showcases
- Thebestdesigns.com - Design inspiration

---

Happy customizing! Your portfolio should feel like YOU! 🎨
