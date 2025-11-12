// 스크롤 시 헤더 스타일 변경
const siteHeader = document.getElementById('site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 50px 이상 스크롤되면
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
});
// === 모바일 햄버거 메뉴 기능 (최종) ===
const menuToggle = document.getElementById('mobile-menu-toggle');
const body = document.body;
const nav = document.querySelector('.main-navigation'); // 네비게이션 메뉴 선택
const cta = document.querySelector('#site-header .header-cta'); // 헤더 안의 CTA 버튼 선택

menuToggle.addEventListener('click', () => {
    body.classList.toggle('mobile-menu-open');
    const isExpanded = body.classList.contains('mobile-menu-open');
    menuToggle.setAttribute('aria-expanded', isExpanded);

    if (isExpanded) {
        // 메뉴가 열릴 때 네비게이션과 CTA 버튼을 body의 자식으로 옮김
        body.appendChild(nav);
        body.appendChild(cta);
    } else {
        // 메뉴가 닫힐 때 원래 위치(헤더)로 되돌림 (데스크탑 레이아웃 복원)
        document.querySelector('.header-container').appendChild(nav);
        document.querySelector('.header-container').appendChild(cta);
    }
});