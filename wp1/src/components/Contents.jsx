import React, { useState, useEffect, useRef} from "react";
import Sidebar from "./Sidebar"; // Sidebar 컴포넌트 불러오기
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Material-UI 아이콘 가져오기


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
  const [menuOptions, setMenuOptions] = useState(null); // 메뉴 옵션 상태
  const [renamingItem, setRenamingItem] = useState(null); // 이름 변경 상태
  const [newName, setNewName] = useState(""); // 새로운 이름 상태
  const [deletingItem, setDeletingItem] = useState(null); // 삭제 상태
  const [activeBook, setActiveBook] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null); // 클릭한 subItem을 저장하는 상태
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);
  const [shelfName, setShelfName] = useState("");
  const fileInputRef = useRef(null);

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


  
  const handleMenuClick = (menuName, subItems, dates) => {
    setBreadcrumb(["내 책장", menuName]); // Breadcrumb 업데이트
  
    setActiveContent(
      <div className="flex flex-wrap items-start justify-start gap-4 p-4 w-full">
        {subItems.map((subItem, subIndex) => (
          <div
            key={subIndex}
            className="w-full max-w-[200px] h-[300px] border border-gray-300 rounded-lg shadow-md flex flex-col items-center relative cursor-pointer"
            onClick={() => {
              const selectedDate = dates?.[subIndex] || "날짜 정보 없음"; // date 매핑
              handleBookClick([subItem], [selectedDate]);
            }}
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
  
        {/* 🆕 동일한 크기의 새로운 요소 추가 */}
        <div
          className="flex flex-col justify-center items-center w-full max-w-[200px] h-[300px] border border-dashed border-gray-400 rounded-lg shadow-md cursor-pointer"
          onClick={() => setIsModalOpen(true)} // ✅ 클릭 시 모달 열기
        >
          <span className="text-lg font-semibold text-gray-600">새 노트 추가</span>
        </div>
      </div>
    );
  };
  
  
  const handleBookClick = (subItems = [], dates = []) => {
    console.log("클릭된 SubItems:", subItems);
    console.log("클릭된 Dates:", dates);
  
    const newContent = (
      <div
        className="relative flex justify-center items-center w-[50%] h-[50%] bg-gray-200 rounded-lg shadow-lg p-4 cursor-pointer"
        onClick={() => navigate("/memo/docs")} // ✅ 클릭 시 라우팅
      >
        <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gray-400 shadow-md z-10"></div>
  
        <div className="w-1/2 h-full bg-white border-r border-gray-300 rounded-l-lg p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(white, white 28px, #e5e7eb 28px, #e5e7eb 30px)]"></div>
          <div className="relative z-10">
            
            <h2 className="text-lg font-bold text-gray-800 mb-2">&lt;챕터&gt;</h2>
  
            <ul className="list-none"> {/* ✅ list-none을 추가하여 글머리 제거 */}
              {subItems.slice(0, Math.ceil(subItems.length / 2)).map((subItem, index) => (
                <li key={index} className="cursor-pointer" onClick={() => navigate("/memo/docs")}>
                  {dates[index] || "날짜 정보 없음"}
                </li>
              ))}
              <li className="cursor-pointer" onClick={() => navigate("/memo/docs")}>새 챕터</li>
            </ul>
          </div>
        </div>
  
        <div className="w-1/2 h-full bg-white border-l border-gray-300 rounded-r-lg p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(white, white 28px, #e5e7eb 28px, #e5e7eb 30px)]"></div>
          <div className="relative z-10">
  
            <ul className="list-none"> {/* ✅ list-none으로 글머리 제거 */}
              {subItems.slice(Math.ceil(subItems.length / 2)).map((subItem, index) => (
                <li key={index} className="cursor-pointer" onClick={() => navigate("/memo/docs")}>
                  {dates[index] || "날짜 정보 없음"}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
      </div>
    );
  
    setActiveContent(newContent);
  };
  
  
  
  
  
  
  useEffect(() => {
    console.log("Active Content Updated: ", activeContent);
  }, [activeContent]);
  
  

  // Breadcrumb의 "내 책장" 클릭 처리
  const handleHomeClick = () => {
    setBreadcrumb(["내 책장"]); // Breadcrumb 초기화
    setActiveContent(null); // Content 초기화
    setPdfUrl(null); // PDF 초기화
  };

  // MoreVertIcon 클릭 처리
  const handleMoreVertClick = (menuItem) => {
    setMenuOptions(menuItem);
  };

  // 메뉴 옵션 닫기
  const closeMenuOptions = () => {
    setMenuOptions(null);
    setRenamingItem(null);
    setNewName("");
    setDeletingItem(null);
  };

  // 이름 변경 확인 처리
  const handleRenameConfirm = () => {
    if (renamingItem) {
      console.log(`이름 변경: ${renamingItem.name} -> ${newName}`);
      setRenamingItem(null);
      setNewName("");
    }
    closeMenuOptions();
  };

  // 삭제 확인 처리
  const handleDeleteConfirm = () => {
    if (deletingItem) {
      console.log(`삭제된 항목: ${deletingItem.name}`);
      setDeletingItem(null);
    }
    closeMenuOptions();
  };
  const handleAddFolderClick = () => {
  console.log("새 폴더 추가하기 버튼이 클릭되었습니다.");
  // 여기서 새 폴더 추가 로직을 구현하세요
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
                    index === breadcrumb.length - 1 ? "text-blue-600" : "text-gray-500"
                  }`}
                  onClick={index === 0 ? handleHomeClick : null}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
  
        {/* Content Area */}
        <div className="flex flex-col items-start justify-start flex-grow p-4 gap-8">
          {activeContent ? (
            activeContent
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full">
              {menuItems.map((menuItem, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-2 bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-full max-w-[250px] h-[300px] overflow-hidden"
                  onClick={() => handleMenuClick(menuItem.name, menuItem.subItems, menuItem.date)}
                >
                  <div className="absolute top-2 right-2">
                    <MoreVertIcon
                      className="text-gray-600 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoreVertClick(menuItem);
                      }}
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center w-full truncate">
                    {menuItem.name}
                  </h2>
                  {/* 🛠 subItems 요소 추가 */}
                  <div className="flex flex-wrap items-center justify-center gap-1 w-full h-full overflow-hidden">
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center justify-center text-white text-sm font-medium rounded-md w-[30%] h-[200px] cursor-pointer"
                        style={{
                          backgroundColor: colorMap[subItem],
                          writingMode: "vertical-rl",
                          textOrientation: "upright",
                        }}
                        onClick={() =>
                          handleBookClick(menuItem.subItems, menuItem.date)
                        }
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
  
          {/* 새 책장 버튼 (activeContent가 없을 때만 표시) */}
          {!activeContent && (
            <button
              className="w-full max-w-[250px] h-[300px] bg-white text-black font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border-2 border-dashed border-[#697077]"
              onClick={() => setIsNewFolderOpen(true)}
            >
              새 책장
            </button>
          )}
        </div> {/* 🛠 `Content Area`의 닫히지 않은 `div` 닫음 */}
  
        {/* 새 책장 모달 */}
        {isNewFolderOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold text-gray-800 mb-4">새 책장</h2>
              <input
                type="text"
                placeholder="나의 책장"
                value={shelfName}
                onChange={(e) => setShelfName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md" onClick={() => setIsNewFolderOpen(false)}>
                  닫기
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => setIsNewFolderOpen(false)}>
                  생성
                </button>
              </div>
            </div>
          </div>
        )}
  
        {/* 메뉴 옵션 */}
        {menuOptions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={closeMenuOptions}>
            <div className="bg-white p-4 rounded shadow-lg w-[300px] text-center" onClick={(e) => e.stopPropagation()}>
              {renamingItem ? (
                <div>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="새 이름 입력"
                    className="w-full px-2 py-1 border border-gray-300 rounded mb-4"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={handleRenameConfirm}>
                    확인
                  </button>
                </div>
              ) : deletingItem ? (
                <div>
                  <p className="mb-4 text-gray-700">정말 삭제하시겠습니까?</p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded w-full mb-2" onClick={handleDeleteConfirm}>
                    삭제하기
                  </button>
                  <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full" onClick={closeMenuOptions}>
                    취소
                  </button>
                </div>
              ) : (
                <div>
                  <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setRenamingItem(menuOptions)}>
                    이름 변경
                  </button>
                  <button className="w-full px-4 py-2 text-red-500 hover:bg-gray-100" onClick={() => setDeletingItem(menuOptions)}>
                    삭제하기
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
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
                
                if (fileInputRef.current) {  // 🔹 input 요소가 존재하는지 확인 후 클릭 실행
                  fileInputRef.current.click();
                } else {
                  console.error("파일 입력 요소가 존재하지 않습니다.");
                }
              }}
            >
              노트 불러오기
            </button>
            
            {/* 🔹 숨겨진 파일 업로드 input 요소 */}
            <input
              type="file"
              ref={fileInputRef}  // 🔹 Ref 연결
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};   

export default Contents;
