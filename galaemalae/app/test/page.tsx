'use client';

import React, { useState } from 'react';
import IntroPage from './_components/IntroPage';
import Card from './_components/Card';
import ProgressBar from './_components/ProgressBar';

export default function TestPage() {
  const [showIntro, setShowIntro] = useState(true); // 인트로 화면 상태
  const [step, setStep] = useState(0); // 현재 단계
  const [selections, setSelections] = useState<string[]>([]); // 저장된 선택지
  const [transitioning, setTransitioning] = useState(false); // 전환 상태

  const handleChoice = (choice: string) => {
    setSelections((prev) => [...prev, choice]); // 선택 저장
    setStep((prevStep) => prevStep + 1); // 다음 단계로 이동
  };

  const handleStart = () => {
    setTransitioning(true); // 전환 애니메이션 시작
    setTimeout(() => {
      setShowIntro(false); // IntroPage 비활성화
      setTransitioning(false); // 전환 애니메이션 종료
    }, 1000); // 전환 시간 (1초)
  };

  const choices = [
    [
      { title: 'Beach', description: 'Relax by the sea with sandy beaches.' },
      { title: 'Mountain', description: 'Hike and explore the great outdoors.' },
    ],
    [
      { title: 'City', description: 'Enjoy the vibrant life of a bustling city.' },
      { title: 'Countryside', description: 'Find peace in rural landscapes.' },
    ],
    [
      { title: 'Adventure', description: 'Seek thrills and adrenaline.' },
      { title: 'Relaxation', description: 'Take a break and unwind.' },
    ],
    [
      { title: 'Art', description: 'Explore museums and galleries.' },
      { title: 'Music', description: 'Attend concerts and festivals.' },
    ],
    [
      { title: 'Luxury', description: 'Stay in 5-star resorts.' },
      { title: 'Budget', description: 'Enjoy affordable travel options.' },
    ],
    [
      { title: 'Foodie', description: 'Taste local cuisines and delicacies.' },
      { title: 'Nature', description: 'Immerse yourself in the great outdoors.' },
    ],
    [
      { title: 'History', description: 'Visit historical landmarks and sites.' },
      { title: 'Shopping', description: 'Explore vibrant shopping districts.' },
    ],
    [
      { title: 'Solo', description: 'Travel alone and discover yourself.' },
      { title: 'Group', description: 'Enjoy adventures with friends or family.' },
    ],
    [
      { title: 'Photography', description: 'Capture stunning landscapes and moments.' },
      { title: 'Sports', description: 'Participate in or watch sports activities.' },
    ],
    [
      { title: 'Winter', description: 'Enjoy snowy landscapes and winter sports.' },
      { title: 'Summer', description: 'Relax under the sun and enjoy the heat.' },
    ],
  ];

  const currentChoices = choices[step] || [];

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #56CCF2, #2F80ED)', // 항상 유지되는 배경색
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          transition: 'opacity 1s ease-in-out',
          opacity: transitioning ? 0 : 1, // 전환 상태에 따른 투명도
          width: '100%',
        }}
      >
        {showIntro ? (
          <IntroPage onStart={handleStart} />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <ProgressBar step={step} totalSteps={choices.length} currentChoices={currentChoices} />

            <h1
              style={{
                color: 'white',
                marginBottom: '20px',
                fontWeight: 'bold',
                fontSize: '2rem',
              }}
            >
              메인 질문
            </h1>

            {currentChoices.length > 0 ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                }}
              >
                {currentChoices.map((choice, index) => (
                  <Card
                    key={index}
                    title={choice.title}
                    description={choice.description}
                    onClick={() => handleChoice(choice.title)}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'white' }}>
                <h2>Your Selections</h2>
                <ul>
                  {selections.map((selection, index) => (
                    <li key={index}>{selection}</li>
                  ))}
                </ul>
                <p>Thank you for completing your journey!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
