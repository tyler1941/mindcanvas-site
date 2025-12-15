document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('fixed-cta-banner');
    const closeBtn = document.getElementById('close-banner-btn');

    if (banner && closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.style.display = 'none';
        });
    }
});
// script.js 맨 아래에 추가

// TOP 버튼 기능
const topButton = document.getElementById('top-button');
if (topButton) {
    topButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// intel-ai-program/script.js 파일에 추가

// === 부드러운 스크롤 이동 기능 ===
document.querySelectorAll('.side-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // 'TOP' 버튼은 이미 다른 기능이 있으므로 제외
        if (this.id === 'top-button') return; 

        e.preventDefault(); // 기본 앵커 동작 방지
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});