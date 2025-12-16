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
// intel-ai-program/script.js 파일의 메뉴 하이라이트 효과 부분

(() => {
    // === 상단 메뉴 하이라이트 효과 (버튼 호환 수정) ===
    const nav = document.querySelector('.header-nav');
    const highlightBar = document.querySelector('.nav-highlight-bar');
    
    // [수정] a 태그와 button 태그를 모두 선택합니다.
    const navItems = document.querySelectorAll('.header-nav a, .header-nav button');

    if (!nav || !highlightBar || !navItems.length) return;

    function handleMouseEnter(e) {
        const item = e.target;
        const itemRect = item.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        
        highlightBar.style.width = `${itemRect.width}px`;
        highlightBar.style.left = `${itemRect.left - navRect.left}px`;
        highlightBar.style.opacity = '1';
        highlightBar.style.visibility = 'visible';
    }

    navItems.forEach(item => {
        item.addEventListener('mouseenter', handleMouseEnter);
    });

    // [추가] 마우스가 메뉴 영역을 벗어났을 때 하이라이트 숨기기
    nav.addEventListener('mouseleave', () => {
        highlightBar.style.opacity = '0';
        highlightBar.style.visibility = 'hidden';
    });

})();
// intel-ai-program/script.js 파일의 탭 기능 부분 수정

(() => {
    // === 모집 안내 탭 기능 ===
    const tabContainer = document.querySelector('.enroll-container');
    if (!tabContainer) return;

    const tabButtons = tabContainer.querySelectorAll('.tab-button');
    const tabContents = tabContainer.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            const targetId = button.dataset.tab;
            document.getElementById(targetId)?.classList.add('active');
        });
    });
})();