/* DARK MODE LOGIC */
function initTheme() {
    const htmlElement = document.documentElement;
    const themeToggler = document.getElementById('themeToggler');
    const themeIcon = document.getElementById('themeIcon');

    if (!themeToggler || !htmlElement) return;

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
    }

    // استعادة الثيم المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'light';
    updateIcon(savedTheme);

    // تبديل الثيم 
    themeToggler.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);

    
        document.body.classList.toggle("dark-mode", newTheme === 'dark');
    });
}

document.addEventListener("DOMContentLoaded", function () {


    initTheme();

    /* JAZAN CAROUSEL */
    const jazanCarousel = document.querySelector('#jazanCarousel');
    if (jazanCarousel) {
        new bootstrap.Carousel(jazanCarousel, {
            interval: 4000,
            ride: 'carousel',
            pause: 'hover'
        });
    }

    /* COUNTER LOGIC */
    const counters = document.querySelectorAll('.counter, [id^="count"]');
    let started = false;

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target') ||
                (counter.id === 'count1' ? 250000 :
                    counter.id === 'count2' ? 50000 :
                        counter.id === 'count3' ? 12 : 0);

            let count = 0;
            const duration = 2000;
            const increment = target / (duration / 20);

            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count).toLocaleString();
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target.toLocaleString() + (counter.id && counter.id.startsWith('count') ? "+" : "");
                }
            };
            updateCounter();
        });
    }

    window.addEventListener("scroll", () => {
        const statsSection = document.querySelector(".stats, .bg-dark");
        if (!statsSection || started) return;

        const sectionTop = statsSection.offsetTop;
        const scrollPos = window.scrollY + window.innerHeight;

        if (scrollPos > sectionTop + 100) {
            startCounter();
            started = true;
        }
    });

    /* IMAGE SLIDER */
    const slider = document.getElementById('growthSlider');
    const beforeImg = document.querySelector('.p-growth-img-before');
    const beforeText = document.querySelector('.before-text');
    const afterText = document.querySelector('.after-text');
    const sliderLine = document.getElementById('sliderLine');

    if (slider && beforeImg) {
        beforeImg.style.width = '100%';
        beforeImg.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0% 100%)`;
        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            beforeImg.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0% 100%)`;
            if (sliderLine) sliderLine.style.left = `${val}%`;
            if (beforeText) beforeText.style.opacity = val > 50 ? "0.8" : "0";
            if (afterText) afterText.style.opacity = val < 50 ? "0.8" : "0";
        });
    }

    /* ANIMATIONS (Intersection Observer) */
    const scrollItems = document.querySelectorAll('.bento-item, .nema-item-wrapper, .timeline-row, .p-growth-timeline-item, .reveal');

    const scrollObserverOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bento-active', 'active', 'active-nema');
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                scrollObserver.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    scrollItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        item.style.transitionDelay = `${(index % 4) * 100}ms`;
        scrollObserver.observe(item);
    });

    /* MAP LOGIC */
    const mapElement = document.getElementById("map");
    if (mapElement) {
        var map = L.map('map').setView([23.8859, 45.0792], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(map);

        const locations = [
            { pos: [26.2078, 43.4837], text: " القصيم: أشهر مناطق إنتاج التمور" },
            { pos: [16.8892, 42.5511], text: " جازان: موطن البن الخولاني" },
            { pos: [21.2703, 40.4158], text: " الطائف: الورد الطائفي الشهير" }
        ];

        locations.forEach(loc => {
            L.marker(loc.pos).addTo(map).bindPopup(loc.text);
        });
    }
});