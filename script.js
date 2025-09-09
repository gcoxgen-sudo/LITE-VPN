// Lite VPN PRO - Modern Minimalist Interactive Effects 2025

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and effects
    initScrollAnimations();
    initShapeAnimations();
    initButtonEffects();
    initSmoothScrolling();
    initHeaderEffects();
    initTypingEffect();
    initResponsiveFeatures();
    initPerformanceOptimizations();
    initAccessibilityFeatures();
});

// Scroll-triggered animations with modern intersection observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Add staggered animation for multiple elements
                const siblings = entry.target.parentElement.children;
                Array.from(siblings).forEach((sibling, index) => {
                    if (sibling === entry.target) {
                        setTimeout(() => {
                            sibling.style.animationDelay = `${index * 100}ms`;
                        }, 0);
                    }
                });
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-card, .pricing-card, .faq-item, .stat, .feature');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Enhanced shape animations for hero background
function initShapeAnimations() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Add random movement to shapes
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
        }, 3000 + index * 1000);
        
        // Mouse interaction with shapes
        document.addEventListener('mousemove', (e) => {
            const rect = shape.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) * 0.01;
            const deltaY = (e.clientY - centerY) * 0.01;
            
            shape.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
    });
}

// Modern button effects with micro-interactions
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Magnetic effect with improved performance
        let isHovering = false;
        
        button.addEventListener('mouseenter', () => {
            isHovering = true;
        });
        
        button.addEventListener('mouseleave', () => {
            isHovering = false;
            button.style.transform = 'translate(0, 0)';
        });

        button.addEventListener('mousemove', function(e) {
            if (!isHovering) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Reduced movement for subtlety
            this.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
        });
    });
}

// Smooth scrolling for navigation links
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
            }
        });
    });
}

// Header scroll effects with improved performance
function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll with improved logic
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
}

// Typing effect for hero title with improved performance
function initTypingEffect() {
    const titleElement = document.querySelector('.title-main');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.style.opacity = '0';
    
    // Fade in first
    setTimeout(() => {
        titleElement.style.transition = 'opacity 0.5s ease-in-out';
        titleElement.style.opacity = '1';
    }, 500);
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after fade in
    setTimeout(typeWriter, 1000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes animate-in {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: animate-in 0.6s ease-out forwards;
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .header {
        transition: all 0.3s ease;
    }
    
    /* Enhanced button hover effects */
    .btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }
    
    .btn:hover {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Pulse animation for stats */
    .stat-number {
        animation: pulse-glow 2s ease-in-out infinite;
    }
    
    @keyframes pulse-glow {
        0%, 100% {
            color: var(--primary-green);
        }
        50% {
            color: var(--accent-green);
        }
    }
    
    /* Loading animation for buttons */
    .btn.loading {
        position: relative;
        color: transparent;
    }
    
    .btn.loading::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        margin-left: -10px;
        margin-top: -10px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Smooth transitions for all interactive elements */
    .benefit-card,
    .pricing-card,
    .faq-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Focus styles for accessibility */
    .btn:focus,
    .nav-link:focus {
        outline: 2px solid var(--primary-blue);
        outline-offset: 2px;
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

document.head.appendChild(style);

// Utility functions
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

// Performance optimization
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events efficiently
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        e.target.classList.add('loading');
        
        // Simulate loading time
        setTimeout(() => {
            e.target.classList.remove('loading');
        }, 2000);
    }
});

// Responsive features
function initResponsiveFeatures() {
    // Touch device detection
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
        
        // Disable hover effects on touch devices
        const style = document.createElement('style');
        style.textContent = `
            .touch-device .benefit-card:hover,
            .touch-device .pricing-card:hover,
            .touch-device .faq-item:hover {
                transform: none;
                box-shadow: none;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Orientation change handling
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            // Recalculate layouts after orientation change
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
    
    // Viewport height fix for mobile browsers
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy loading for images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
    
    // Service Worker registration (if available)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Accessibility features
function initAccessibilityFeatures() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Перейти к основному содержимому';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-blue);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.id = 'main-content';
    }
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Escape key to close any open modals or overlays
        if (e.key === 'Escape') {
            // Close any open elements
            const openElements = document.querySelectorAll('.open, .active');
            openElements.forEach(el => {
                el.classList.remove('open', 'active');
            });
        }
    });
    
    // Focus management for better accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const focusable = Array.from(document.querySelectorAll(focusableElements));
            const focusedIndex = focusable.indexOf(document.activeElement);
            
            if (e.shiftKey) {
                // Shift + Tab
                if (focusedIndex === 0) {
                    e.preventDefault();
                    focusable[focusable.length - 1].focus();
                }
            } else {
                // Tab
                if (focusedIndex === focusable.length - 1) {
                    e.preventDefault();
                    focusable[0].focus();
                }
            }
        }
    });
}

// Device-specific optimizations
function optimizeForDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
    
    if (isMobile) {
        document.body.classList.add('mobile-device');
        
        // Reduce animations on mobile for better performance
        const style = document.createElement('style');
        style.textContent = `
            .mobile-device * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
            
            .mobile-device .shape {
                animation-duration: 4s !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    if (isTablet) {
        document.body.classList.add('tablet-device');
    }
}

// Initialize device optimizations
optimizeForDevice();

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send error reports to analytics here
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send error reports to analytics here
});

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Track button clicks
    if (eventName === 'button_click') {
        // Send to analytics service
    }
}

// Track important user interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        trackEvent('button_click', {
            buttonText: e.target.textContent.trim(),
            buttonClass: e.target.className
        });
    }
});

// Track scroll depth
let maxScrollDepth = 0;
window.addEventListener('scroll', debounce(() => {
    const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        trackEvent('scroll_depth', { depth: scrollDepth });
    }
}, 1000));

// Track time on page
let startTime = Date.now();
window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', { seconds: timeOnPage });
});

// Modern CSS custom properties for dynamic theming
function initDynamicTheming() {
    const root = document.documentElement;
    
    // Detect user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        // Could implement dark mode here if needed
        // root.classList.add('dark-mode');
    }
    
    // Listen for changes in color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (e.matches) {
            // Dark mode enabled
            // root.classList.add('dark-mode');
        } else {
            // Light mode enabled
            // root.classList.remove('dark-mode');
        }
    });
}

// Initialize dynamic theming
initDynamicTheming();

// Console branding
console.log('%cLite VPN PRO', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
console.log('%cЛучший VPN в России 2025', 'color: #14b8a6; font-size: 16px;');
console.log('%cСкачать VPN, купить VPN, установить русский VPN', 'color: #64748b; font-size: 14px;');