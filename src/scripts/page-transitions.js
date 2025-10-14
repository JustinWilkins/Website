document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.page-overlay');

    window.addEventListener('load', () => {
        requestAnimationFrame(() => {
            overlay.classList.add('hidden');
        });
    });

    const links = document.querySelectorAll('a[href^="/"], a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') || href.startsWith('javascript')) return;

            e.preventDefault();

            overlay.classList.remove('hidden');

            setTimeout(() => {
                window.location.href = href;
            }, 1000);
        });
    });
});