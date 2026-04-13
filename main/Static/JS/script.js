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

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateIcon(savedTheme);

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

    /* IMAGE SLIDER (Before/After) */
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

    /* MAP LOGIC - 13 REGIONS */
    const mapElement = document.getElementById("map");
    if (mapElement) {
        var map = L.map('map', {
            scrollWheelZoom: false 
        }).setView([23.8859, 45.0792], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '...',
    maxZoom: 20
}).addTo(map);

const imageUrl = '/static/images/ksa-map.svg';
const imageBounds = [[32.14, 34.48], [16.38, 55.66]];

L.imageOverlay(imageUrl, imageBounds, {
    opacity: 0.6, 
    interactive: false 
}).addTo(map);

        const locations = [
            { pos: [24.7136, 46.6753], text: "منطقة الرياض", url: "/regions/riyadh/" },
            { pos: [21.4858, 39.1925], text: "منطقة مكة المكرمة", url: "/regions/makkah/" },
            { pos: [24.4672, 39.6024], text: "منطقة المدينة المنورة", url: "/regions/madinah/" },
            { pos: [26.3260, 43.9750], text: "منطقة القصيم: سلة غذاء المملكة", url: "/regions/qassim/" },
            { pos: [26.4207, 50.0888], text: "المنطقة الشرقية", url: "/regions/eastern/" },
            { pos: [18.2465, 42.5117], text: "منطقة عسير", url: "/regions/asir/" },
            { pos: [28.3835, 36.5662], text: "منطقة تبوك", url: "/regions/tabuk/" },
            { pos: [27.5114, 41.7208], text: "منطقة حائل", url: "/regions/hail/" },
            { pos: [30.0000, 42.0000], text: "منطقة الحدود الشمالية", url: "/regions/northern-borders/" },
            { pos: [16.8892, 42.5511], text: "منطقة جازان: موطن البن", url: "/regions/jazan/" },
            { pos: [17.4933, 44.1272], text: "منطقة نجران", url: "/regions/najran/" },
            { pos: [20.0129, 41.4677], text: "منطقة الباحة", url: "/regions/al-baha/" },
            { pos: [29.9678, 40.1975], text: "منطقة الجوف: غصن الزيتون", url: "/regions/al-jouf/" }
        ];

        locations.forEach(loc => {
            const marker = L.marker(loc.pos).addTo(map);
            const popupContent = `
                <div class="text-center p-2">
                    <h6 class="fw-bold m-0">${loc.text}</h6>
                    <a href="${loc.url}" class="btn btn-sm btn-success text-white rounded-pill mt-2 px-3">
                        استكشف المنطقة
                    </a>
                </div>
            `;
            marker.bindPopup(popupContent);
        });
    }
});

setTimeout(function(){ 
    map.invalidateSize(); 
}, 500);