import React from 'react';
import './css/Features.css';

const Header = () => {
    return (
      <header className="header">
        <div className="header-left">
          <span className="logo"><span className="hash">#</span>LSPT</span>
        </div>
        <nav className="header-center">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
        </nav>
        <div className="header-right">
          <button className="try-button">Try for free</button>
        </div>
      </header>
    );
};

export{Header};