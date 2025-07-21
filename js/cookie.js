document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.querySelector('.container_cookie-banner');
    const agreeButton = document.querySelector('.cookie-banner__agree-btn');
    const closeButton = document.querySelector('.cookie-banner__close');

    // Show the cookie banner
    cookieBanner.style.display = 'block';

    // Hide the banner on agree
    agreeButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
    });

    // Hide the banner on close
    closeButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
    });
});