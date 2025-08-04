'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Button from './components/Button';
import { useEffect, useState } from 'react';

let hasAnimated = false;

const LayoutContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Header = styled(motion.header)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

const Content = styled(motion.main)`
  width: 100%;
  max-width: 800px;
  text-align: center;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

// 애니메이션 variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const headerVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

export default function CatLayout({ children }) {
  const [animateOnce, setAnimateOnce] = useState(!hasAnimated);

  useEffect(() => {
    if (!hasAnimated) {
      hasAnimated = true;
    }
  }, []);

  const motionProps = animateOnce
    ? { initial: "hidden", animate: "visible" }
    : {};

  return (
    <LayoutContainer
      variants={containerVariants}
      {...motionProps}
    >
      <Header
        variants={headerVariants}
        {...motionProps}
      >
        <Button href="/" variant="glass">
          홈으로 돌아가기
        </Button>
      </Header>
      
      <Content
        variants={contentVariants}
        {...motionProps}
      >
        <Title
          variants={titleVariants}
          {...motionProps}
        >
          고양이 이야기
        </Title>
        {children}
      </Content>
    </LayoutContainer>
  );
}
