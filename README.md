# Mind Canvas - AI 교육 프로그램

Mind Canvas AI 교육 프로그램 공식 웹사이트입니다.

## 🚀 프로젝트 개요

- **사이트**: [www.mindcanvas.co.kr](https://www.mindcanvas.co.kr)
- **기술 스택**: React + TypeScript + Vite + Tailwind CSS
- **디자인**: Figma → Anima 플러그인으로 변환

## 📋 주요 기능

- **Slide1**: MIND CANVAS 메인 화면
- **Slide2**: 클래스 메이트 혜택 (6개 혜택 카드, 가로 스크롤)
- **Slide3**: THE ONE AND ONLY PROGRAM (AI 교육 과정 소개)

## 🛠️ 개발 환경 설정

### 필수 조건
- Node.js 18+ 설치 필요

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🌐 배포

### GitHub Pages 배포
```bash
npm run build
# dist 폴더를 GitHub Pages에 배포
```

### 커스텀 도메인 설정
1. GitHub 저장소 Settings → Pages
2. Custom domain에 `www.mindcanvas.co.kr` 입력
3. DNS 설정에서 CNAME 레코드 추가

## 📁 프로젝트 구조

```
src/
├── screens/
│   ├── Slide/           # 메인 화면 (루트 경로)
│   └── Homepage/        # 스크롤 가능한 홈페이지
│       ├── components/
│       │   ├── Slide1.tsx
│       │   ├── Slide2.tsx
│       │   └── Slide3.tsx
└── routes/
    └── Slide/           # 별도 라우트 (혜택 페이지)
        └── screens/
            └── sections/
```

## 🎨 디자인 시스템

- **폰트**: Pretendard Variable
- **효과**: Liquid Glass (리퀴드 글래스)
- **반응형**: 모든 디바이스 지원
