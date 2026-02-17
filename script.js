// ============================================
// DARK MODE TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light-mode';
if (currentTheme === 'dark-mode') {
    htmlElement.classList.add('dark-mode');
}
updateThemeToggle(currentTheme);

themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.toggle('dark-mode');
    const theme = isDark ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
    updateThemeToggle(theme);
});

function updateThemeToggle(theme) {
    themeToggle.textContent = theme === 'dark-mode' ? '☀️' : '🌙';
}

// ============================================
// HAMBURGER MENU
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });
}

// ============================================
// LIVE CLOCK
// ============================================
function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById('liveClock');
    const dateEl = document.getElementById('liveDate');

    if (clockEl) {
        const hours = now.getHours();
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = String(hours % 12 || 12).padStart(2, '0');
        clockEl.textContent = `${displayHours}:${mins}:${secs} ${ampm}`;
    }

    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = now.toLocaleDateString('en-US', options);
    }
}

updateClock();
setInterval(updateClock, 1000);

// ============================================
// COUNTER
// ============================================
let counterValue = 0;
const counterDisplay = document.getElementById('counterDisplay');
const counterBtn = document.getElementById('counterBtn');

if (counterBtn && counterDisplay) {
    counterBtn.addEventListener('click', () => {
        counterValue++;
        counterDisplay.textContent = counterValue;
        counterDisplay.classList.remove('pop');
        // Force reflow to restart animation
        void counterDisplay.offsetWidth;
        counterDisplay.classList.add('pop');
    });
}

// ============================================
// OEE METRICS (Demo values — editable)
// ============================================
function updateOEE() {
    const availability = 92.5;
    const performance = 88.3;
    const quality = 97.1;
    const oee = (availability * performance * quality) / 10000;

    const availEl = document.getElementById('oeeAvailability');
    const perfEl = document.getElementById('oeePerformance');
    const qualEl = document.getElementById('oeeQuality');
    const totalEl = document.getElementById('oeeTotal');

    if (availEl) availEl.textContent = `${availability.toFixed(1)} %`;
    if (perfEl) perfEl.textContent = `${performance.toFixed(1)} %`;
    if (qualEl) qualEl.textContent = `${quality.toFixed(1)} %`;
    if (totalEl) totalEl.textContent = `${oee.toFixed(1)} %`;
}

updateOEE();

// ============================================
// JOB TOGGLE (Expandable job details)
// ============================================
document.querySelectorAll('.job-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const details = button.nextElementSibling;

        // Close all other open details
        document.querySelectorAll('.job-toggle[aria-expanded="true"]').forEach(otherBtn => {
            if (otherBtn !== button) {
                otherBtn.setAttribute('aria-expanded', 'false');
                otherBtn.nextElementSibling.classList.remove('open');
            }
        });

        // Toggle this one
        button.setAttribute('aria-expanded', !isExpanded);
        details.classList.toggle('open');
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const subject = document.getElementById('formSubject').value.trim();
        const message = document.getElementById('formMessage').value.trim();

        if (!name || !email || !subject || !message) {
            showStatus('Please fill in all fields', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showStatus('Please enter a valid email address', 'error');
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xerozor1@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ name, email, _subject: subject, message })
            });
            if (response.ok) {
                showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                setTimeout(() => { formStatus.className = 'form-status'; }, 5000);
            } else {
                showStatus('Failed to send. Please try again or email me directly.', 'error');
            }
        } catch (error) {
            showStatus('An error occurred. Please try again.', 'error');
        }
    });
}

function showStatus(text, type) {
    if (!formStatus) return;
    formStatus.textContent = text;
    formStatus.className = `form-status ${type}`;
    if (type === 'error') {
        setTimeout(() => { formStatus.className = 'form-status'; }, 5000);
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !document.querySelector(href)) return;
        e.preventDefault();
        const target = document.querySelector(href);
        const navHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    let current = '';

    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - navHeight - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});

// ============================================
// NAVBAR SHADOW ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navbar');
    navBar.style.boxShadow = window.scrollY > 100 ? 'var(--shadow)' : 'none';
});

// ============================================
// DRAG AND DROP — TILE REORDERING
// ============================================
let draggedTile = null;

const dashboardGrid = document.querySelector('.dashboard-grid');
const allTiles = document.querySelectorAll('.dash-tile[draggable="true"]');

allTiles.forEach(tile => {
    tile.addEventListener('dragstart', (e) => {
        draggedTile = tile;
        tile.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', tile.id || '');
    });

    tile.addEventListener('dragend', () => {
        tile.classList.remove('dragging');
        document.querySelectorAll('.dash-tile').forEach(t => t.classList.remove('drag-over'));
        draggedTile = null;
    });
});

// All tiles act as drop targets for reordering
document.querySelectorAll('.dash-tile').forEach(tile => {
    tile.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (tile !== draggedTile && !tile.classList.contains('dragging')) {
            tile.classList.add('drag-over');
        }
    });

    tile.addEventListener('dragleave', () => {
        tile.classList.remove('drag-over');
    });

    tile.addEventListener('drop', (e) => {
        e.preventDefault();
        tile.classList.remove('drag-over');

        // Special drop zone logic
        if (tile.id === 'dropZone' && draggedTile && draggedTile.id === 'draggableTile') {
            handleSpecialDrop();
            return;
        }

        // Normal tile swap
        if (draggedTile && tile !== draggedTile && dashboardGrid) {
            const allChildren = [...dashboardGrid.children];
            const dragIdx = allChildren.indexOf(draggedTile);
            const dropIdx = allChildren.indexOf(tile);

            if (dragIdx !== -1 && dropIdx !== -1) {
                if (dragIdx < dropIdx) {
                    dashboardGrid.insertBefore(draggedTile, tile.nextSibling);
                } else {
                    dashboardGrid.insertBefore(draggedTile, tile);
                }
            }
        }
    });
});

// ============================================
// SPECIAL DROP ZONE LOGIC + STATUS TIE-IN
// ============================================
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');
const dropZone = document.getElementById('dropZone');
const draggableTile = document.getElementById('draggableTile');

function setStatus(active) {
    if (!statusDot || !statusText) return;
    if (active) {
        statusDot.className = 'status-dot active';
        statusText.textContent = 'Active';
    } else {
        statusDot.className = 'status-dot inactive';
        statusText.textContent = 'Inactive';
    }
}

function handleSpecialDrop() {
    if (!dropZone || !draggableTile) return;

    // Hide the draggable tile
    draggableTile.style.display = 'none';

    // Mark drop zone as occupied
    dropZone.classList.add('occupied');

    // Replace placeholder content
    const placeholder = document.getElementById('dropPlaceholder');
    if (placeholder) placeholder.style.display = 'none';

    // Insert landed content
    const landed = document.createElement('div');
    landed.className = 'landed-content';
    landed.id = 'landedContent';
    landed.innerHTML = `
        <span class="landed-icon">✅</span>
        <p>Tile dropped successfully!</p>
        <button class="remove-btn" id="removeLandedBtn">Remove</button>
    `;
    dropZone.appendChild(landed);

    // Set status to Active (green)
    setStatus(true);

    // Remove button listener
    document.getElementById('removeLandedBtn').addEventListener('click', handleRemoveFromZone);
}

function handleRemoveFromZone() {
    if (!dropZone || !draggableTile) return;

    // Remove landed content
    const landed = document.getElementById('landedContent');
    if (landed) landed.remove();

    // Show placeholder again
    const placeholder = document.getElementById('dropPlaceholder');
    if (placeholder) placeholder.style.display = '';

    // Show the draggable tile again
    draggableTile.style.display = '';

    // Unmark drop zone
    dropZone.classList.remove('occupied');

    // Set status to Inactive (red)
    setStatus(false);
}

// ============================================
// VIDEO MODAL
// ============================================
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoModalClose = document.getElementById('videoModalClose');

document.querySelectorAll('.project-card.has-video').forEach(card => {
    card.addEventListener('click', () => {
        const src = card.getAttribute('data-video');
        if (src && videoPlayer && videoModal) {
            videoPlayer.src = src;
            videoModal.classList.add('active');
            videoPlayer.play();
        }
    });
});

function closeVideoModal() {
    if (videoModal) videoModal.classList.remove('active');
    if (videoPlayer) {
        videoPlayer.pause();
        videoPlayer.src = '';
    }
}

if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
if (videoModal) videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideoModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
});

// ============================================
// INIT LOG
// ============================================
window.addEventListener('load', () => {
    console.log('Joseph Gill Portfolio loaded successfully!');
});
