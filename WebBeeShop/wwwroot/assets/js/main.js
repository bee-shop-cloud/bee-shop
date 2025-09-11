// Smooth reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
    })
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Accordion
document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        const open = panel.style.maxHeight;
        document.querySelectorAll('.acc-panel').forEach(p => p.style.maxHeight = null);
        panel.style.maxHeight = open ? null : panel.scrollHeight + 'px';
    });
});

// Back to top
const backTop = document.getElementById('backTop');
if (backTop) {
    window.addEventListener('scroll', () => {
        backTop.style.display = window.scrollY > 600 ? 'inline-flex' : 'none';
    });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
