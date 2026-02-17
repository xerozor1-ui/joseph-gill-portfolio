# Portfolio Resume Website

A modern, responsive portfolio website to showcase your resume, skills, and projects. Built with vanilla HTML, CSS, and JavaScript.

## Features

- 🌓 **Dark Mode Toggle** - Switch between light and dark themes with persistent localStorage
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Beautiful fade-in and slide-up animations throughout
- 📋 **Multiple Sections** - About, Skills, KPI Tiles, Projects, and Contact sections
- 💬 **Contact Form** - Functional contact form with validation
- 📥 **Resume Download** - Option to download your resume as PDF
- 🎨 **Modern Design** - Clean, professional UI with gradient accents
- ⚡ **No Dependencies** - Pure vanilla JavaScript, no frameworks or build tools required

## Project Structure

```
joseph/
├── index.html          # Main HTML file with all sections
├── styles.css          # Styling with dark mode support and animations
├── script.js           # JavaScript for interactivity and form handling
├── resume.pdf          # Your resume (add this file)
├── README.md          # Project documentation
└── .gitignore         # Git ignore file
```

## Getting Started

### Prerequisites

- A text editor (VS Code, Sublime, etc.)
- Git (for version control)
- A modern web browser

### Local Development

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open the website locally**
   - Simply open `index.html` in your browser
   - Or use VS Code Live Server extension:
     1. Right-click on `index.html`
     2. Select "Open with Live Server"

3. **Customize your content**
   - Edit `index.html` to add your information
   - Update `styles.css` if you want to change colors or fonts
   - Modify `script.js` for additional functionality

## Customization Guide

### Update Your Information

**In `index.html`:**
- Change "Your Name" in the logo and title
- Update the hero section subtitle to describe yourself
- Edit the About section with your bio
- Update Skills with your technical skills
- Modify KPI statistics to your achievements
- Add your projects in the Projects section
- Update contact links and social media URLs

### Add Your Resume

1. Create a PDF version of your resume
2. Save it as `resume.pdf` in the project root
3. In `script.js`, uncomment the line:
   ```javascript
   // window.location.href = './resume.pdf';
   ```

### Change Color Scheme

Edit the CSS variables in `styles.css` (lines 6-25):

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
    /* ... other colors */
}
```

### Customize Animations

Modify animation timings in `styles.css`:
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation
- Other animations can be customized in the `@keyframes` section

## Contact Form Setup

The contact form currently simulates submission. To make it functional, you have several options:

### Option 1: Email Service (Recommended)
Use a service like FormSubmit, Netlify Forms, or Web3Forms:

1. Sign up for the service
2. Update the form's `action` and `method` attributes in `index.html`

### Option 2: Backend API
Create a simple backend (Node.js, Python, etc.) to handle form submissions:
1. Update the form submission handler in `script.js`
2. Point it to your backend endpoint

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select `main` branch as the source
   - Your site will be available at `https://yourusername.github.io/portfolio/`

3. **Use custom domain (optional)**
   - Add a CNAME file with your domain
   - Update DNS settings at your domain registrar

### Option 2: Netlify (Free & Powerful)

1. Connect your GitHub repository
2. Netlify will automatically detect and deploy
3. Automatic HTTPS and CDN included
4. Custom domain support

**Deploy Button:** [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/portfolio)

### Option 3: Vercel

1. Connect your GitHub repository
2. Vercel will automatically deploy on every push
3. Great performance and global CDN

### Option 4: Traditional Hosting

1. Get a hosting plan from providers like:
   - Bluehost
   - HostGator
   - GoDaddy
   - etc.

2. Upload files via FTP or file manager
3. Point your domain to the hosting

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Minimize file sizes of any images you add
- Use WebP format for better compression
- Lazy load images for improved page load
- Minify CSS and JavaScript for production (optional)

## SEO Optimization

The website includes basic SEO setup. To improve further:

1. Add meta tags in `index.html`:
   ```html
   <meta name="description" content="Your portfolio description">
   <meta name="keywords" content="your, keywords, here">
   ```

2. Add Open Graph tags for social sharing:
   ```html
   <meta property="og:title" content="Your Name - Portfolio">
   <meta property="og:description" content="...">
   <meta property="og:image" content="...">
   ```

3. Submit to search engines:
   - Google Search Console
   - Bing Webmaster Tools

## Troubleshooting

### Form not sending emails?
- Form currently simulates submission
- To enable real emails, implement one of the email service options mentioned above

### Dark mode not persisting?
- Check if localStorage is enabled in your browser
- Clear browser cookies/cache if having issues

### Animations not showing?
- Ensure JavaScript is enabled
- Check browser console for any errors (F12)

### Images not displaying?
- Verify image file paths are correct
- Use relative paths (e.g., `./images/photo.jpg`)

## License

This project is free to use and modify for personal purposes.

## Questions & Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the customization guide
3. Check browser console for error messages (F12)

## Future Enhancements

Consider adding:
- Blog section
- Image gallery/portfolio
- Testimonials section
- Working contact form integration
- Mobile menu for smaller screens
- Search functionality
- Analytics integration

---

**Happy deploying! 🚀**

Remember to update all placeholders with your actual information before deploying!
