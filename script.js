// ===== WELCOME SCREEN =====
const welcomeScreen = document.getElementById('welcome');
const enterPortfolioBtn = document.getElementById('enterPortfolio');

if (enterPortfolioBtn) {
    enterPortfolioBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        // Scroll to top after animation
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    });
}

// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignore empty hash or just "#"
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== CERTIFICATE MODAL =====
const modal = document.getElementById('certificateModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const certificateFrame = document.getElementById('certificateFrame');
const certificateItems = document.querySelectorAll('.certificate-item');

// Open modal when clicking on certificate
certificateItems.forEach(item => {
    item.addEventListener('click', () => {
        const certPath = item.getAttribute('data-cert');
        certificateFrame.src = certPath;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal functions
const closeModal = () => {
    modal.classList.remove('active');
    certificateFrame.src = '';
    document.body.style.overflow = 'auto';
};

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-card, .timeline-item, .certificate-item, .contact-card');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ===== TYPING EFFECT FOR HERO (Optional Enhancement) =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Olá! Bem-vindo ao meu portfólio!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cSe você está vendo isso, provavelmente é um desenvolvedor também! 😄', 'color: #7c3aed; font-size: 14px;');
console.log('%cVamos conversar? tiagorossinicorrea@gmail.com', 'color: #22c55e; font-size: 12px;');
