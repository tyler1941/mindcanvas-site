// intel-ai-program/script.js

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('event-popup-modal');
    const closeBtn = document.getElementById('popup-close');
    const closeTodayBtn = document.getElementById('popup-close-today');
    const body = document.body; // body 요소 추가

    if (!popup) return;

    // --- 팝업을 닫는 공통 함수 ---
    const closePopup = () => {
        popup.classList.remove('is-active');
        body.classList.add('popup-closed'); // [핵심 추가] 팝업 닫혔다는 클래스 추가
    };

    const getCookie = (name) => {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    };

    // 쿠키가 없으면 팝업 띄움
    if (getCookie("hideEventPopup") !== "true") {
        setTimeout(() => {
             popup.classList.add('is-active');
        }, 1000);
    } else {
        // 쿠키가 있으면 (이미 오늘 안보기 했으면) 바로 안내문 표시
        body.classList.add('popup-closed');
    }

    // '닫기' 버튼 기능
    closeBtn.addEventListener('click', closePopup);

    // '오늘 하루 보지 않기' 버튼 기능
    closeTodayBtn.addEventListener('click', () => {
        let date = new Date();
        date.setHours(23, 59, 59, 999);
        document.cookie = `hideEventPopup=true; expires=${date.toUTCString()}; path=/`;
        closePopup();
    });
});