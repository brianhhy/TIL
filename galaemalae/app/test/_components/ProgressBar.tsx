import React from 'react';

interface ProgressBarProps {
  step: number; // 현재 단계
  totalSteps: number; // 총 단계 수
  currentChoices: { title?: string }[]; // 현재 선택지 목록
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps, currentChoices }) => {
  // 진행률 계산
  const progressPercentage = ((step) / totalSteps) * 100;

  return (
    <div style={{ width: '30%', marginBottom: '30px' }}>
      <h2 className="sr-only">Steps</h2>
      <p className="text-xs font-medium text-white">
        {step < totalSteps
          ? `${step}/${totalSteps} - ${
              currentChoices[0]?.title || ''
            } VS ${currentChoices[1]?.title || ''}`
          : 'FIN'}
      </p>
      <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: step < totalSteps ? `${progressPercentage}%` : '100%',
            backgroundColor: '#38ef7d',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
