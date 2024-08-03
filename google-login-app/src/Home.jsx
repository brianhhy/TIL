import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  const handleTryClick = () => {
    navigate('/login');
  };

  const handleStartClick = () => {
    navigate('/login');
  };

  const titles = [
    <span className="leftContent-title"><span className="gradient">메타버스</span>를 통한 <br />실시간 소통</span>,
    <span className="leftContent-title"><span className="gradient">IOT</span>를 통한 <br />건강 정보 모니터링</span>,
    <span className="leftContent-title"><span className="gradient">AI</span>를 통한 <br />건강 상담 서비스</span>
  ];

  const details = [
    <span className="leftContent-details">다양한 장소에서 제공하는 기능을 활용하세요.<br />다른 <span className="gradient">LSPT</span> 사용자와 실시간으로 소통하세요.</span>,
    <span className="leftContent-details">IOT를 통해 실시간으로 건강 정보를 갱신하세요.<br />갱신된 건강 정보는 다른 사용자들이 볼 수 있으며 건강 상담 서비스에 활용됩니다.</span>,
    <span className="leftContent-details">AI에게 자신의 건강에 대해 상담 받아 보세요.<br />건강 상담 서비스는 IOT로부터 받아온 사용자의 신체정보를 바탕으로 진행됩니다.</span>
  ];

  const images = [
    "/ex1.png",
    "/ex2.png",
    "/ex3.png"
  ];

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <span className="logo"><span className="hash">#</span>LSPT</span>
        </div>
        <nav className="header-center">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
        </nav>
        <div className="header-right">
          <button className="try-button" onClick={handleTryClick}>Try for free</button>
        </div>
      </header>

      <div className="leftContent">
        {titles[activePage - 1]}
        {details[activePage - 1]}
        <button className="start-button" onClick={handleStartClick}>무료로 시작하기</button>
      </div>

      <div className="rightContent">
        <div className="colored-background">
          <img src={images[activePage - 1]} alt={`ex${activePage}`} />
        </div>
      </div>

      <div className="pageWrap">
        <div className={`page ${activePage === 1 ? 'active' : ''}`} onClick={() => setActivePage(1)}></div>
        <div className={`page ${activePage === 2 ? 'active' : ''}`} onClick={() => setActivePage(2)}></div>
        <div className={`page ${activePage === 3 ? 'active' : ''}`} onClick={() => setActivePage(3)}></div>
      </div>
    </div>
  );
};

export default Home;
