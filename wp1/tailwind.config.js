/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind가 적용될 파일 경로 지정
  ],
  theme: {
    extend: {}, // 커스텀 테마 설정 가능
  },
  plugins: [], // 필요한 Tailwind 플러그인 추가 가능
};
