// 1. Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. 3D Tilt Effect Script (Vanilla JS)
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// 3. Mobile Menu Toggle (حل مشكلة القائمة في الجوال)
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    // التبديل بين إضافة وإزالة الفئة 'active' من القائمة لإظهارها أو إخفائها
    navLinks.classList.toggle('active');
});

// إغلاق القائمة عند النقر على أي رابط (مهم في الجوال)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // إزالة فئة 'active' لإغلاق القائمة
        navLinks.classList.remove('active');
    });
});