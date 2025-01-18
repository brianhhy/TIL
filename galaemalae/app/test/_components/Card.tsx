'use client';

import React from 'react';

interface CardProps {
  title: string; // 카드 제목
  description?: string; // 선택 사항: 카드 설명
  onClick: () => void; // 클릭 시 실행될 함수
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        textAlign: 'center',
        maxWidth: '300px',
        background:'#ffffff',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 6px 10px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
        {title}
      </h3>
      {description && (
        <p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Card;
