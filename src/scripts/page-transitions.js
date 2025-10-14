document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.page-overlay');

    window.addEventListener('load', () => {
        overlay.classList.remove('active');
    });

    const links = document.querySelectorAll('a[href^="/"], a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#') || href.startsWith('javascript')) return;

            e.preventDefault();

            overlay.classList.add('active');

            setTimeout(() => {
                window.location.href = href;
            }, 700);
        });
    });
});