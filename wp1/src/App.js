import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import LoginSignup from "./components/Login-Signup";
import Document from "./components/Document"; // Document 컴포넌트 추가
import { pdfjs } from "react-pdf";
import PdfViewerTest from "./components/PdfViewerTest";
import Summary from "./components/Summary";
// PDF.js Worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = `public/pdf.worker.min.js`;

// Home 컴포넌트
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

// Memo 컴포넌트
const Memo = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "1-1", subItems: ["물리", "수학", "과학"], date: ["2024 07 21", "2024 09 21", "2024 05 24"] },
    { name: "1-2", subItems: ["국어", "영어", "화학"], date: ["2024 10 28", "2024 04 21", "2024 02 25"] },
    { name: "2-1", subItems: ["체육", "생명과학", "일본어"], date: ["2024 03 17", "2024 03 05", "2024 12 21"] },
    { name: "2-2", subItems: ["123", "456", "789"], date: ["2024 04 08", "2024 01 31", "2024 03 09"] },
    { name: "3-1", subItems: ["327", "934", "457"], date: ["2024 12 11", "2024 04 21", "2024 05 25"] },
    { name: "3-2", subItems: ["136", "248", "741"], date: ["2024 03 04", "2024 09 05", "2024 02 10"] },
    { name: "4-1", subItems: ["721", "329", "158"], date: ["2024 12 19", "2024 05 08", "2024 01 27"] },
    { name: "4-2", subItems: ["264", "235", "369"], date: ["2024 07 21", "2024 09 21", "2024 05 24"] },
  ];

  const handleMenuClick = (index) => {
    console.log(`Menu item ${index} clicked`);
  };

  return (
    <div className="flex w-full h-screen">
      <Contents
        menuItems={menuItems} // Contents에 메뉴 전달
        handleMenuClick={handleMenuClick} // Sidebar의 handleMenuClick 전달
        className="flex-grow" // 남은 공간을 채우도록 설정
      />
      <button
        className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        onClick={() => navigate("/memo/docs")}
      >
        Open Document
      </button>
    </div>
  );
};

// App 컴포넌트
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/memo/docs" element={<Document />} /> {/* Document 라우트 추가 */}
        <Route path="memo/docs/summary" element={<Summary />}/>
      </Routes>
    </Router>
  );
};

export default App;
