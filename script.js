// ===== SIDE MENU TOGGLE =====
const mobileToggle = document.getElementById('mobileToggle');
const closeMenu = document.getElementById('closeMenu');
const navLinksContainer = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-link');

const toggleMenu = () => {
    navLinksContainer.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
};

if (mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
if (closeMenu) closeMenu.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aparecer');
        }
    });
}, observerOptions);

// Observe all sections with animation class
document.querySelectorAll('.secao-animada').forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== CERTIFICATE MODAL ===== (Keep existing logic but optimized)
const modal = document.getElementById('certificateModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const certificateFrame = document.getElementById('certificateFrame');
const certificateItems = document.querySelectorAll('.certificate-item');

certificateItems.forEach(item => {
    item.addEventListener('click', () => {
        const certPath = item.getAttribute('data-cert');
        certificateFrame.src = certPath;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

const closeModal = () => {
    modal.classList.remove('active');
    certificateFrame.src = '';
    if (!navLinksContainer.classList.contains('active')) {
        document.body.style.overflow = 'auto';
    }
};

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

// ===== WELCOME SCREEN =====
const welcomeScreen = document.getElementById('welcome');
const enterPortfolioBtn = document.getElementById('enterPortfolio');

if (enterPortfolioBtn) {
    enterPortfolioBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    });
}

