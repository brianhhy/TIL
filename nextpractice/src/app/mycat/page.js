'use client';

import styled from 'styled-components';
import Button from '../cat/components/Button';

const MyCatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 600px;
  margin: 0 auto;
`;

const CatProfile = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
`;

const CatImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const CatName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const CatInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;

const InfoItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
`;

const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
`;

const CatDescription = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
`;

const DescriptionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

const DescriptionText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export default function MyCatPage() {
  // 내 고양이 정보 (실제 데이터로 교체 가능)
  const myCat = {
    name: "루시",
    breed: "러시안 블루",
    age: "3살",
    weight: "4.2kg",
    gender: "여아",
    birthday: "2021년 3월 15일",
    color: "회색",
    personality: "조용하고 우아한 성격",
    favoriteFood: "참치와 닭고기",
    description: "루시는 매우 조용하고 우아한 고양이입니다. 러시안 블루의 특징답게 은은한 회색 털을 가지고 있으며, 큰 녹색 눈이 매력적입니다. 낯가림이 심하지만 한번 친해지면 매우 애정이 깊은 고양이입니다. 창가에서 새를 구경하는 것을 좋아하고, 따뜻한 곳에서 낮잠을 자는 것을 즐깁니다."
  };

  return (
    <MyCatContainer>
      <CatProfile>
        <CatImage>🐱</CatImage>
        <CatName>{myCat.name}</CatName>
        
        <CatInfo>
          <InfoItem>
            <InfoLabel>품종</InfoLabel>
            <InfoValue>{myCat.breed}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>나이</InfoLabel>
            <InfoValue>{myCat.age}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>체중</InfoLabel>
            <InfoValue>{myCat.weight}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>성별</InfoLabel>
            <InfoValue>{myCat.gender}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>생일</InfoLabel>
            <InfoValue>{myCat.birthday}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>털색</InfoLabel>
            <InfoValue>{myCat.color}</InfoValue>
          </InfoItem>
        </CatInfo>

        <CatDescription>
          <DescriptionTitle>성격 & 특징</DescriptionTitle>
          <DescriptionText>{myCat.personality}</DescriptionText>
        </CatDescription>

        <CatDescription>
          <DescriptionTitle>좋아하는 것</DescriptionTitle>
          <DescriptionText>{myCat.favoriteFood}</DescriptionText>
        </CatDescription>

        <CatDescription>
          <DescriptionTitle>소개</DescriptionTitle>
          <DescriptionText>{myCat.description}</DescriptionText>
        </CatDescription>

        <ButtonContainer>
          <Button href="/cat" variant="glass">
            고양이 이야기 보기
          </Button>
          <Button href="/" variant="glass">
            홈으로
          </Button>
        </ButtonContainer>
      </CatProfile>
    </MyCatContainer>
  );
}
