# 곽현정 포트폴리오

AI 및 풀스택 개발자 곽현정의 포트폴리오 웹사이트입니다.

## 소개

- 최신 Next.js 기반의 SSR/SSG 포트폴리오 사이트
- Tailwind CSS, React, TypeScript 사용
- 프로젝트, 경력, 논문, 연락처 등 다양한 섹션 제공
- 다크 모드 지원

## 주요 폴더 구조

```
src/
  app/                # Next.js app 디렉토리 (페이지, api 라우트 등)
  components/         # UI 및 페이지별 컴포넌트
  data/               # 정적 데이터
  lib/                # 유틸리티 및 API 연동 함수
  types/              # TypeScript 타입 정의
public/               # 정적 파일 (이미지, favicon 등)
```

## 설치 및 실행

1. 패키지 설치

   ```sh
   npm install
   ```

2. 개발 서버 실행

   ```sh
   npm run dev
   ```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 환경 변수

`.env.local` 파일에 Gmail SMTP 정보 등 필요한 환경변수를 설정해야 합니다.

```
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_gmail_app_password
```

## 기술 스택

- Next.js
- React
- TypeScript
- Tailwind CSS
- PostCSS
- Nodemailer (이메일 전송)

## 배포

직접 Vercel로 배포된 웹사이트 [포트폴리오](https://hyeonjeong-kwak-portfolio.vercel.app/)를 확인하실 수 있습니다.
