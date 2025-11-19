// Firebase SDK에서 필요한 함수들을 가져옵니다.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-check.js";
// 1. Firebase 초기화
// ■■■■■■ 이전에 발급받으신 본인의 firebaseConfig 코드를 여기에 붙여넣으세요. ■■■■■■
const firebaseConfig = {
  apiKey: "AIzaSyClExfEq3PPo-QqR44v9DYY2vqVi7ciVFk",
  authDomain: "intel-ai-program.firebaseapp.com",
  projectId: "intel-ai-program",
  storageBucket: "intel-ai-program.firebasestorage.app",
  messagingSenderId: "695743978229",
  appId: "1:695743978229:web:13086c1526301b3ebb83bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. [핵심] Firebase App Check 초기화
// ■■■■■■ 이전에 발급받으신 '사이트 키(SITE KEY)'를 여기에 붙여넣으세요! ■■■■■■
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeUUwQsAAAAAH2t1Te1cMEESxnFs2RirFeHLTjT'),
  isTokenAutoRefreshEnabled: true
});

// 2. 폼 제출 이벤트 처리
const form = document.getElementById('application-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = '제출 중...';
  
  // [핵심 수정] 폼의 모든 입력 데이터를 수집합니다.
  const selectedCampuses = [];
  form.querySelectorAll('input[name="campus"]:checked').forEach(checkbox => {
    selectedCampuses.push(checkbox.value);
  });
  
  const applicationData = {
    name: form.querySelector('#name').value,
    birthdate: form.querySelector('#birthdate').value,
    gender: form.querySelector('input[name="gender"]:checked')?.value || null,
    phone: form.querySelector('#phone').value,
    email: form.querySelector('#email').value,
    address: form.querySelector('#address').value,
    status: form.querySelector('#status').value,
    graduationDate: form.querySelector('#graduationDate').value,
    schoolName: form.querySelector('#schoolName').value,
    major: form.querySelector('#major').value,
    hrdCard: form.querySelector('#hrd-card').value,
    campuses: selectedCampuses,
    privacyAgree1: form.querySelector('#privacy-agree-1').checked,
    privacyAgree2: form.querySelector('#privacy-agree-2').checked,
    submittedAt: serverTimestamp() // 서버 시간을 기준으로 기록하여 정확성 보장
  };

  try {
    const docRef = await addDoc(collection(db, "applications"), applicationData);
    console.log("Document written with ID: ", docRef.id);
    alert('지원이 성공적으로 완료되었습니다. 감사합니다!');
    // 제출 후 메인 페이지로 이동 (실제 웹사이트 주소에 맞게 수정)
    window.location.href = './index.html'; 

  } catch (error) {
    console.error("Error adding document: ", error);
    alert('죄송합니다. 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    submitBtn.disabled = false;
    submitBtn.textContent = '제출하기';
  }
});