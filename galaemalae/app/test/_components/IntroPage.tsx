'use client';

import React, { useState, useEffect } from 'react';

const imagePaths = Array.from({ length: 14 }, (_, i) => `/assets/bg${i + 1}.jpg`);

export default function IntroPage({ onStart }: { onStart: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [introOpacity, setIntroOpacity] = useState(1); // IntroPage 전체 투명도 상태

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        setFade(true);
      }, 1000); // Fade out duration extended to 1 second
    }, 5000); // 5초마다 이미지 전환

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setIntroOpacity(0); // 전체 투명도 감소 시작
    setTimeout(() => {
      setShowIntro(false); // IntroPage 비활성화
      onStart();
    }, 1000); // 서서히 사라진 후 전환
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh',
        background: 'linear-gradient(90deg, #56CCF2, #2F80ED)',
        transition: 'opacity 1s ease-in-out',
        opacity: introOpacity, // 전체 투명도 상태에 따라 변화
      }}
    >
      {showIntro && (
        <>
          {/* 제목 */}
          <h1
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '2rem',
              transition: 'opacity 1s ease-in-out',
              opacity: 1, // 제목은 상태를 유지함
            }}
          >
            갈래 말래
          </h1>
          <p
            className="text-xs font-medium text-white mt-0"
            style={{
              transition: 'opacity 1s ease-in-out',
              opacity: 1, // 설명 텍스트도 상태를 유지함
            }}
          >
            AI를 활용한 맞춤형 여행지 추천 서비스
          </p>
          {/* 비행기 창틀 모양 */}
          <div
            style={{
              width: '400px',
              height: '500px',
              border: '8px solid #fff8dc',
              borderRadius: '50px',
              background: 'linear-gradient(90deg, #D9EFFF, #A6C9FF)',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
              marginTop: '20px',
              overflow: 'hidden',
              transition: 'opacity 1s ease-in-out',
              opacity: 1, // 외부 요소는 상태를 유지함
            }}
          >
            <img
              src={imagePaths[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '42px',
                opacity: fade ? 1 : 0, // img만 사라졌다 나타남
                transition: 'opacity 1s ease-in-out',
              }}
            />
          </div>

          {/* 시작하기 버튼 */}
          <button
            onClick={handleStart}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: 'white',
              backgroundColor: '#38ef7d',
              width: '400px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'opacity 1s ease-in-out',
              opacity: 1, // 버튼도 상태를 유지함
            }}
          >
            시작하기
          </button>
        </>
      )}
    </div>
  );
}
