'use client';

import styled from 'styled-components';
import Button from "./components/Button";
import Card from "./components/Card";
import { useData } from "./hooks/useData";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: white;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 20px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorContainer = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  color: #ff6b6b;
`;

const ButtonContainer = styled.div`
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default function CatPage() {
  const { data, loading, error, refreshData } = useData();

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
        <p>데이터를 불러오는 중...</p>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <p>오류: {error}</p>
        <Button onClick={refreshData} variant="glass">
          다시 시도
        </Button>
      </ErrorContainer>
    );
  }

  return (
    <>
      <ButtonContainer>
        <Button onClick={refreshData} variant="glass">
          새로고침
        </Button>
      </ButtonContainer>

      {data && data.data && (
        <CardContainer>
          {data.data.map((fact, index) => (
            <Card 
              key={index}
              fact={fact}
              index={index}
              totalFacts={data.data.length}
            />
          ))}
        </CardContainer>
      )}
    </>
  );
}
