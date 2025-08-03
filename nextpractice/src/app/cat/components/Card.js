'use client';

import styled from 'styled-components';

export default function Card({ fact, index, totalFacts }) {
  return (
    <CardContainer>
      <Header>
        <FactNumber>
          {index + 1}
        </FactNumber>
        <Counter>
          {index + 1} / {totalFacts}
        </Counter>
      </Header>
      
      <FactText>
        {fact.fact}
      </FactText>
      
      <Meta>
        <Length>
          {fact.length}자
        </Length>
        <Category>
          🐱 고양이 정보
        </Category>
      </Meta>
      
      <Progress $index={index} $totalFacts={totalFacts} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 120px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const FactNumber = styled.div`
  background-color: #0070f3;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
`;

const Counter = styled.span`
  font-size: 12px;
  color: #999;
  font-weight: 500;
`;

const FactText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 16px;
  margin-top: 0;
  word-break: keep-all;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;
  background-color: transparent;
`;

const Length = styled.span`
  background-color: #f0f0f0;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
`;

const Category = styled.span`
  font-weight: 500;
`;

const Progress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: #0070f3;
  width: ${props => Math.max(((props.$index + 1) / props.$totalFacts) * 100, 5)}%;
  transition: width 0.3s ease;
`;
