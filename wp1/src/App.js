import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import LoginSignup from "./components/Login-Signup";
import { pdfjs } from "react-pdf";
import PdfViewerTest from "./components/PdfViewerTest"
// PDF.js Worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = `public/pdf.worker.min.js`;


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={() => navigate("/memo")}
      >
        Memo
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

const Memo = ({ menuItems, handleMenuClick }) => {
  return (
    <div className="flex w-full h-screen">
      <Contents
        menuItems={menuItems} // Contents에 메뉴 전달
        handleMenuClick={handleMenuClick} // Sidebar의 handleMenuClick 전달
        className="flex-grow" // 남은 공간을 채우도록 설정
      />
    </div>
  );
};


const App = () => {
  const menuItems = [
    { name: "1-1", subItems: ["물리", "수학", "과학"] },
    { name: "1-2", subItems: ["국어", "영어", "화학"] },
    { name: "2-1", subItems: ["체육", "생명과학", "일본어"] },
    { name: "2-2", subItems: ["123", "456", "789"] },
    { name: "3-1", subItems: ["327", "934", "457"] },
    { name: "3-2", subItems: ["136", "248", "741"] },
    { name: "4-1", subItems: ["721", "329", "158"] },
    { name: "4-2", subItems: ["264", "235", "369"] },
  ];

  const handleMenuClick = (index) => {
    console.log(`Menu item ${index} clicked`);
    // Sidebar에서 클릭된 메뉴에 따른 추가 로직 처리 가능
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/memo"
          element={<Memo menuItems={menuItems} handleMenuClick={handleMenuClick} />}
        />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
