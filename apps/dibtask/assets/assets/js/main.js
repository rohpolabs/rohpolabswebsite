/**
 * RohpoLabs Main JavaScript
 * Interactive features and animations for the creative and colorful website
 */

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSmoothScrolling();
    initNavigationEffects();
    initScrollAnimations();
    initHoverEffects();
    initMobileMenu();
    initColorfulAnimations();
    initProgressIndicators();
    console.log('🎨 RohpoLabs Website Initialized with Creative Features');
});

/**
 * Smooth Scrolling for Navigation Links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                updateActiveNavLink(targetId);
            }
        });
    });
}

/**
 * Update Active Navigation Link State
 */
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

/**
 * Navigation Effects on Scroll
 */
function initNavigationEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Add/remove scrolled class
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('nav-hidden');
        } else {
            header.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Add animation class based on element type
                if (entry.target.classList.contains('card')) {
                    entry.target.classList.add('card-animate');
                } else if (entry.target.classList.contains('hero-content')) {
                    entry.target.classList.add('hero-animate');
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToAnimate = document.querySelectorAll('.card, .hero-content, .section-title');
    elementsToAnimate.forEach(el => observer.observe(el));
}

/**
 * Hover Effects for Interactive Elements
 */
function initHoverEffects() {
    // Card hover effects
    const cards = document.querySelectorAll('.card, .app-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 15px 30px -10px rgba(139, 92, 246, 0.3)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');

    // Insert mobile menu button
    const nav = document.querySelector('.nav');
    if (nav && window.innerWidth <= 768) {
        nav.insertBefore(mobileMenuBtn, nav.firstChild);

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

/**
 * Toggle Mobile Menu
 */
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileBtn = document.querySelector('.mobile-menu-btn');

    if (navLinks) {
        navLinks.classList.toggle('mobile-open');
        mobileBtn.classList.toggle('active');
    }
}

/**
 * Colorful Background Animations
 */
function initColorfulAnimations() {
    createFloatingElements();
    initGradientShifts();
    initPulseEffects();
}

/**
 * Create Floating Colorful Elements
 */
function createFloatingElements() {
    const heroSection = document.querySelector('.hero');

    if (!heroSection) return;

    const colors = [
        'rgba(139, 92, 246, 0.1)',
        'rgba(59, 130, 246, 0.1)',
        'rgba(244, 63, 94, 0.1)',
        'rgba(132, 204, 22, 0.1)'
    ];

    // Create floating shapes
    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.style.cssText = `
            position: absolute;
            background: ${colors[i % colors.length]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '20%'};
            width: ${Math.random() * 60 + 20}px;
            height: ${Math.random() * 60 + 20}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 15}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            z-index: -1;
        `;

        heroSection.appendChild(shape);
    }
}

/**
 * Initialize Gradient Shifts
 */
function initGradientShifts() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
            }
            25% {
                transform: translateY(-20px) rotate(90deg);
            }
            50% {
                transform: translateY(0px) rotate(180deg);
            }
            75% {
                transform: translateY(20px) rotate(270deg);
            }
        }

        @keyframes gradient-shift {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.05);
                opacity: 1;
            }
        }

        .animate-in {
            animation: slideInUp 0.8s ease-out forwards;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .card-animate {
            animation: cardBounce 0.6s ease-out forwards;
        }

        @keyframes cardBounce {
            0% {
                opacity: 0;
                transform: translateY(40px) scale(0.9);
            }
            60% {
                transform: translateY(-10px) scale(1.02);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .hero-animate {
            animation: heroFloat 1s ease-out forwards;
        }

        @keyframes heroFloat {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Navigation */
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
                background: none;
                border: none;
                cursor: pointer;
                padding: 10px;
                position: relative;
                z-index: 1001;
            }

            .mobile-menu-btn span {
                display: block;
                width: 25px;
                height: 3px;
                background: var(--primary-purple);
                margin: 5px 0;
                transition: 0.3s;
                border-radius: 3px;
            }

            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }

            .nav-links {
                position: fixed;
                top: 0;
                right: -100%;
                width: 80%;
                max-width: 300px;
                height: 100vh;
                background: white;
                flex-direction: column;
                justify-content: flex-start;
                padding: 80px 20px 20px;
                box-shadow: -2px 0 10px rgba(0,0,0,0.1);
                transition: right 0.3s ease;
                z-index: 1000;
            }

            .nav-links.mobile-open {
                right: 0;
            }

            .nav-links li {
                margin: 20px 0;
            }
        }
    `;

    document.head.appendChild(style);
}

/**
 * Initialize Pulse Effects for Interactive Elements
 */
function initPulseEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-highlight');

    buttons.forEach(button => {
        setInterval(() => {
            button.style.background = button.style.background.includes('pulse')
                ? ''
                : 'linear-gradient(135deg, var(--primary-purple), var(--primary-purple-light))';
        }, 3000);
    });
}

/**
 * Initialize Progress Indicators (for development roadmap, etc.)
 */
function initProgressIndicators() {
    const progressElements = document.querySelectorAll('.progress-indicator');

    progressElements.forEach(element => {
        const progress = element.getAttribute('data-progress') || 0;
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.cssText = `
            height: 8px;
            background: linear-gradient(90deg, var(--primary-purple), var(--secondary-blue), var(--highlight-lime));
            border-radius: 4px;
            width: ${progress}%;
            transition: width 2s ease-out;
            margin-top: 10px;
        `;

        element.appendChild(progressBar);

        // Animate progress on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBar.style.width = progress + '%';
                }
            });
        });

        observer.observe(element);
    });
}

/**
 * Utility Functions
 */

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add scroll-based animations for better performance
 */
window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 10));

/**
 * Add resize handler for responsive adjustments
 */
window.addEventListener('resize', debounce(() => {
    // Reinitialize mobile menu if needed
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth > 768 && mobileBtn) {
        mobileBtn.remove();
        navLinks.classList.remove('mobile-open');
    }
}, 250));

/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        if (mobileBtn && mobileBtn.classList.contains('active')) {
            mobileBtn.classList.remove('active');
            navLinks.classList.remove('mobile-open');
        }
    }

    // Tab navigation for focus management
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

/**
 * Performance monitoring for development
 */
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const performanceMonitor = () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        console.log(`🚀 Page Load Time: ${loadTime}ms`);
    };

    window.addEventListener('load', performanceMonitor);
}

/**
 * Add CSS classes for animations
 */
const additionalStyles = `
    .scrolled {
        background: rgba(255, 255, 255, 0.98) !important;
        backdrop-filter: blur(15px);
        box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }

    .nav-hidden {
        transform: translateY(-100%);
    }

    .keyboard-nav *:focus {
        outline: 3px solid var(--primary-purple);
        outline-offset: 2px;
    }

    .nav-link.active {
        color: var(--primary-purple) !important;
        font-weight: 600;
    }

    .nav-link.active::after {
        width: 100% !important;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);