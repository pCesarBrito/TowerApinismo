// Hero Carouselconst slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        let currentSlide = 0;
        let carouselInterval;
        function updateCarousel() {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => {
                d.classList.remove('bg-primary');
                d.classList.add('bg-white/30');
            });
            if (slides[currentSlide]) {
                slides[currentSlide].classList.add('active');
            }
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('bg-white/30');
                dots[currentSlide].classList.add('bg-primary');
            }
        }
        function startInterval() {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateCarousel();
            }, 6000);
        }
        function handleManualNav(index) {
            currentSlide = index;
            updateCarousel();
            startInterval(); // Reset interval
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                handleManualNav(currentSlide);
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                handleManualNav(currentSlide);
            });
        }
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                handleManualNav(idx);
            });
        });
        startInterval();
        // Portfolio Carousel
        const portfolioTrack = document.getElementById('portfolio-track');
        const portfolioPrev = document.getElementById('portfolio-prev');
        const portfolioNext = document.getElementById('portfolio-next');
        let portfolioIndex = 0;
        let portfolioInterval;
        function getVisibleSlides() {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }
        function updatePortfolio() {
            if (!portfolioTrack) return;
            const visible = getVisibleSlides();
            const maxIndex = portfolioTrack.children.length - visible;
            if (portfolioIndex > maxIndex) portfolioIndex = 0;
            if (portfolioIndex < 0) portfolioIndex = maxIndex;
            const slideWidth = portfolioTrack.children[0].offsetWidth + 32; // Width + gap (8 units = 32px)
            portfolioTrack.style.transform = `translateX(-${portfolioIndex * slideWidth}px)`;
        }
        function startPortfolioInterval() {
            clearInterval(portfolioInterval);
            portfolioInterval = setInterval(() => {
                portfolioIndex++;
                updatePortfolio();
            }, 5000);
        }
        if (portfolioNext) {
            portfolioNext.addEventListener('click', () => {
                portfolioIndex++;
                updatePortfolio();
                startPortfolioInterval();
            });
        }
        if (portfolioPrev) {
            portfolioPrev.addEventListener('click', () => {
                portfolioIndex--;
                updatePortfolio();
                startPortfolioInterval();
            });
        }
        window.addEventListener('resize', updatePortfolio);
        startPortfolioInterval();
        // Mobile Menu
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        function openMobileMenu() {
            mobileMenu.classList.add('open');
            hamburgerIcon.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeMobileMenu() {
            mobileMenu.classList.remove('open');
            hamburgerIcon.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                if (mobileMenu.classList.contains('open')) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            });
        }
        if (menuClose) {
            menuClose.addEventListener('click', closeMobileMenu);
        }
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        // Lightbox
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxCounter = document.getElementById('lightbox-counter');
        const lightboxContent = document.getElementById('lightbox-content');
        const galleryItems = document.querySelectorAll('.gallery-img');
        let currentImgIdx = 0;
        let isLightboxOpen = false;
        function updateLightboxContent(idx) {
            if (!galleryItems[idx]) return;
            const item = galleryItems[idx];
            lightboxImg.src = item.src;
            lightboxCaption.textContent = item.alt;
            lightboxCounter.textContent = `${idx + 1} / ${galleryItems.length}`;
        }
        function openLightbox(idx) {
            currentImgIdx = idx;
            updateLightboxContent(idx);
            lightbox.classList.add('is-visible');
            document.body.style.overflow = 'hidden';
            isLightboxOpen = true;
        }
        function closeLightbox() {
            lightbox.classList.remove('is-visible');
            document.body.style.overflow = '';
            isLightboxOpen = false;
        }
        function navigateLightbox(dir) {
            lightboxImg.classList.add('switching');
            setTimeout(() => {
                currentImgIdx = (currentImgIdx + dir + galleryItems.length) % galleryItems.length;
                updateLightboxContent(currentImgIdx);
                lightboxImg.classList.remove('switching');
            }, 200);
        }
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        }
        document.addEventListener('keydown', (e) => {
            if (isLightboxOpen) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') navigateLightbox(-1);
                if (e.key === 'ArrowRight') navigateLightbox(1);
            }
        });
        // Touch swipe support for lightbox
        let touchStartX = 0;
        let touchEndX = 0;
        const SWIPE_THRESHOLD = 50;
        if (lightboxContent) {
            lightboxContent.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            lightboxContent.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                const diff = touchStartX - touchEndX;
                if (Math.abs(diff) > SWIPE_THRESHOLD) {
                    navigateLightbox(diff > 0 ? 1 : -1);
                }
            }, { passive: true });
        }
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('h-20', 'bg-background/60');
                nav.classList.remove('h-24', 'bg-transparent');
            } else {
                nav.classList.add('h-24', 'bg-transparent');
                nav.classList.remove('h-20', 'bg-background/80');
            }
            // Update active nav in bottom bar
            const navItemsBottom = document.querySelectorAll('.nav-item');
            const sections = ['home', 'services', 'portfolio', 'contact'];
            let current = 'home';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Using a threshold that works better for mobile view
                    if (rect.top <= 200) {
                        current = section;
                    }
                }
            });
            navItemsBottom.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
        // Smooth scroll for bottom nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        // Intersection Observer for Reveal Animations
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        // Apply reveal effect to service cards and other sections
        function initScrollAnimations() {
            // Target all glass-cards and specific informational divs
            const revealElements = document.querySelectorAll('.glass-card, #portfolio-track > div, .commitment-card');
            revealElements.forEach((el, index) => {
                el.classList.add('reveal-left');
                // Add a small stagger delay based on position
                const rect = el.getBoundingClientRect();
                const delay = (window.innerWidth > 768) ? (index % 3) * 0.15 : 0.1;
                el.style.transitionDelay = `${delay}s`;
                revealObserver.observe(el);
            });
            // Reveal headings and sections
            document.querySelectorAll('h2.text-white, .info-block').forEach(h => {
                h.classList.add('reveal-left');
                revealObserver.observe(h);
            });
        }
        initScrollAnimations();