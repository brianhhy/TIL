import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; // Sidebar 컴포넌트 불러오기
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useNavigate } from "react-router-dom";

// 랜덤 색상 생성 함수
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Contents = ({ menuItems = [] }) => {
  const [breadcrumb, setBreadcrumb] = useState(["내 책장"]); // Breadcrumb 상태
  const [activeContent, setActiveContent] = useState(null); // Sidebar에서 전달된 콘텐츠
  const [colorMap, setColorMap] = useState({}); // 색상 저장 상태
  const [pdfUrl, setPdfUrl] = useState(null); // PDF URL 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const navigate = useNavigate(); // 라우팅을 위한 navigate

  // 색상 초기화
  useEffect(() => {
    const initialColorMap = {};
    menuItems.forEach((menuItem) => {
      menuItem.subItems.forEach((subItem) => {
        initialColorMap[subItem] = getRandomColor();
      });
    });
    setColorMap(initialColorMap);
  }, [menuItems]);

  // Sidebar에서 메뉴 클릭 처리
  const handleMenuClick = (menuName, subItems) => {
    setBreadcrumb(["내 책장", menuName]); // Breadcrumb 업데이트
    setActiveContent(
      <div className="flex flex-wrap items-start justify-start gap-4 p-4 w-full">
        {subItems.map((subItem, subIndex) => (
          <div
            key={subIndex}
            className="w-full max-w-[200px] h-[300px] border border-gray-300 rounded-lg shadow-md flex flex-col items-center relative"
            onClick={() =>
              handlePdfClick(`${process.env.PUBLIC_URL}/pdfs/example.pdf`)
            } // PDF 클릭 처리
          >
            <div
              className="absolute top-0 left-0 w-8 h-full"
              style={{
                backgroundColor: colorMap[subItem], // 랜덤 색상 사용
              }}
            ></div>
            <div className="flex flex-col justify-center items-center w-full h-full">
              <span className="text-lg font-bold text-gray-800">{subItem}</span>
            </div>
          </div>
        ))}
        {/* 새 요소 추가 */}
        <div
          className="w-full max-w-[200px] h-[300px] border border-dashed border-gray-400 bg-white flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setIsModalOpen(true)} // 모달 열기
        >
          <span className="text-gray-500 text-lg text-center">
            새 노트 <br />
            또는 <br />
            노트 불러오기
          </span>
        </div>
      </div>
    );
  };

  // PDF 클릭 처리 함수
  const handlePdfClick = (url) => {
    setPdfUrl(url); // PDF URL 업데이트
    setBreadcrumb((prev) => [...prev, "PDF 보기"]);
    window.location.href = url; // URL로 직접 이동
  };

  // Breadcrumb의 "내 책장" 클릭 처리
  const handleHomeClick = () => {
    setBreadcrumb(["내 책장"]); // Breadcrumb 초기화
    setActiveContent(null); // Content 초기화
    setPdfUrl(null); // PDF 초기화
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="flex-shrink-0 flex-grow-0 bg-white h-full min-w-[300px]">
        <Sidebar menuItems={menuItems} onMenuItemClick={handleMenuClick} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full h-full">
        {/* Breadcrumb */}
        <div className="flex items-center p-4 w-full">
          <ol className="flex space-x-2 text-gray-700 text-sm sm:text-base">
            {breadcrumb.map((step, index) => (
              <li key={index} className="flex items-center">
                <span
                  className={`text-lg cursor-pointer ${
                    index === breadcrumb.length - 1
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={index === 0 ? handleHomeClick : null}
                >
                  {step}
                </span>
                {index < breadcrumb.length - 1 && (
                  <svg
                    className="w-4 h-4 mx-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Content Area */}
        <div className="flex flex-col items-start justify-start flex-grow p-4 gap-8">
          {pdfUrl ? (
            <div className="w-full h-full">
              <Viewer fileUrl={pdfUrl} />
            </div>
          ) : activeContent ? (
            activeContent
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full">
              {menuItems.map((menuItem, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-2 bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-full max-w-[250px] h-[300px] overflow-hidden"
                  onClick={() =>
                    handleMenuClick(menuItem.name, menuItem.subItems)
                  }
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center w-full truncate">
                    {menuItem.name}
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-1 w-full h-full overflow-hidden">
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center justify-center text-white text-sm font-medium rounded-md w-[30%] h-[200px]"
                        style={{
                          backgroundColor: colorMap[subItem], // 랜덤 색상 사용
                          writingMode: "vertical-rl",
                          textOrientation: "upright",
                        }}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] text-center">
            <h2 className="text-lg font-bold mb-4">옵션 선택</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 w-full"
              onClick={() => navigate("/memo/docs")} // 새 노트 추가 라우팅
            >
              새 노트 추가
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
              onClick={() => {
                setIsModalOpen(false);
                document.getElementById("fileInput").click(); // 파일 탐색기 열기
              }}
            >
              노트 불러오기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contents;
