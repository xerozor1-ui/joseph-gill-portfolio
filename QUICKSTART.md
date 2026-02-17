# Quick Start Guide

Welcome! Here's how to get your portfolio website up and running in a few simple steps.

## Step 1: Personalize Your Content

### Update Your Name and Title
Open `index.html` and find these lines (around line 10-30):
```html
<div class="logo">YourName</div>
...
<h1 class="animate-fade-in">Welcome to My Portfolio</h1>
<p class="animate-fade-in-delay">Full Stack Developer | Problem Solver | Innovator</p>
```

Replace with your actual name and title.

### Update About Section
Find the about section (around line 47) and update the text:
```html
<section id="about" class="about">
    <div class="container">
        <h2>About Me</h2>
        <p>Write about yourself here...</p>
        ...
    </div>
</section>
```

### Update Skills
Scroll down to the skills section and update the skill tags to match your expertise:
```html
<span class="tag">Your Skill Here</span>
```

### Add Your Projects
Update the projects section with your actual projects. Change titles, descriptions, and add links to your GitHub projects or live demos.

### Update Contact Links
Find the social links section and update with your real links:
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
```

## Step 2: Test Locally

### Using VS Code
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Click "Open with Live Server"
4. Your website opens in a browser - make changes and see them update instantly!

### Using Python (Mac/Linux)
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

### Using Node.js
```bash
npx http-server
# Then visit the provided localhost URL
```

## Step 3: Add Your Resume (PDF)

1. Create a PDF version of your resume
2. Save it as `resume.pdf` in the project root folder
3. Open `script.js` and find this line (around line 113):
   ```javascript
   // window.location.href = './resume.pdf';
   ```
4. Uncomment it by removing the `//`:
   ```javascript
   window.location.href = './resume.pdf';
   ```

Now the "Download Resume" button will work!

## Step 4: Set Up Git & GitHub

### Initialize Git Locally
```bash
cd joseph
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Create GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click "+" icon → "New repository"
3. Name it `portfolio` or `resume`
4. Don't initialize with README (you already have one)
5. Click "Create repository"

### Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Replace `yourusername` with your actual GitHub username!

## Step 5: Deploy to GitHub Pages

### Method 1: Automatic (Recommended)
1. Go to your repository on GitHub
2. Click Settings
3. Scroll down to "GitHub Pages"
4. Under "Source", select `main` branch
5. Click Save
6. Your site is live at: `https://yourusername.github.io/portfolio/`

### Method 2: Use Deploy Action
The workflow file (`.github/workflows/deploy.yml`) automatically deploys on every push!

## Step 6: Use Custom Domain (Optional)

To use your own domain (e.g., myportfolio.com):

1. Buy a domain from Namecheap, GoDaddy, or similar
2. On GitHub repository Settings → Pages
3. Add your domain in "Custom domain"
4. Follow GitHub's DNS setup instructions
5. Update your domain's DNS settings

## Step 7: Future Updates

Every time you make changes:

```bash
# Make your changes in the files

# Commit changes
git add .
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main

# Wait a few seconds - your site updates automatically!
```

## Customization Tips

### Change Colors
Edit `styles.css` at the top:
```css
:root {
    --primary-color: #667eea;      /* Main color */
    --secondary-color: #764ba2;    /* Accent color */
    --text-primary: #1a1a1a;       /* Text color */
    /* ... change these to your brand colors */
}
```

### Hide/Show Sections
In `index.html`, you can delete entire sections if you don't need them (About, KPIs, Projects, etc.)

### Add More Projects
Copy a project card and paste multiple times:
```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(...)"></div>
    <h3>Your Project Title</h3>
    <p>Project description</p>
    ...
</div>
```

### Enable Contact Form Emails
Currently, the form simulates submission. To send real emails:
1. Sign up at [FormSubmit.co](https://formsubmit.co) (free)
2. Update the form in `index.html`:
   ```html
   <form class="contact-form" action="https://formsubmit.co/your.email@example.com" method="POST">
   ```

## Troubleshooting

### Dark Mode Not Working?
- Make sure JavaScript is enabled in your browser
- Clear browser cache (Ctrl+Shift+Del)

### Changes Not Showing on GitHub Pages?
- Wait 2-3 minutes for deployment
- Hard refresh your browser (Ctrl+F5)
- Check "Actions" tab on GitHub to see if deployment succeeded

### Form Not Submitting?
- Open browser console (F12) to see error messages
- Check that you've implemented an email service

### Mobile View Issues?
- Your site is responsive by default
- Test on mobile by using F12 → Toggle Device Toolbar

## Need Help?

1. Check the main `README.md` for detailed documentation
2. Review the HTML comments in `index.html`
3. Check browser console: Press F12 and look for error messages
4. Visit web development tutorial sites: MDN, W3Schools

## What's Next?

- [ ] Personalize all content with your information
- [ ] Add your resume PDF
- [ ] Test on different devices
- [ ] Create GitHub account and repository
- [ ] Deploy to GitHub Pages
- [ ] Share your portfolio!
- [ ] Consider adding a blog section
- [ ] Implement contact form emails
- [ ] Add Google Analytics

---

You're all set! Good luck with your portfolio! 🚀
