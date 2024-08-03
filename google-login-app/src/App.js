import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserLogin from './UserLogin';
import Metaverse from './Metaverse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/metaverse" element={<Metaverse />} />
      </Routes>
    </Router>
  );
}

export default App;
