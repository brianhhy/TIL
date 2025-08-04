'use client';

import styled from 'styled-components';
import Button from "./cat/components/Button";
// import InstallPWA from "./utils/InstallPWA";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/HomeBackground.jpeg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
`;

export default function Home() {
  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Button href="/cat" variant="primary">
          고양이 이야기 보러가기
        </Button>
      </Content>
      {/* <InstallPWA /> */}
    </Container>
  );
}
