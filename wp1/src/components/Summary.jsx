import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 가져오기
import MicIcon from "@mui/icons-material/Mic";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Document = () => {
  const [sections, setSections] = useState([""]); // 여러 섹션 상태
  const [menuVisible, setMenuVisible] = useState(false); // Speed Dial 메뉴 상태
  const [textColor, setTextColor] = useState("black"); // 글씨 색 상태
  const [chatVisible, setChatVisible] = useState(false); // 채팅창 상태
  const [modalVisible, setModalVisible] = useState(false); // 모달 창 상태
  const [progress, setProgress] = useState(0); // 로딩바 상태
  const navigate = useNavigate();
  // 섹션 내용 변경 핸들러
  const handleContentChange = (index, event) => {
    const newSections = [...sections];
    newSections[index] = event.target.value;
    setSections(newSections);

    // 마지막 섹션의 텍스트 영역이 가득 차면 새 섹션 추가
    if (
      index === sections.length - 1 && // 마지막 섹션인지 확인
      event.target.scrollHeight > event.target.offsetHeight
    ) {
      setSections([...sections, ""]);
    }
  };

  

  // 글씨 색 변경 핸들러
  const changeTextColor = (color) => {
    setTextColor(color);
  };


  return (
    <div className="flex w-full h-screen bg-gray-200 relative">
      {/* Left Sidebar */}
      <div className="fixed bottom-0 left-0 w-1/5 h-[80%] bg-white border-r border-gray-300 p-4 flex flex-col rounded-tr-lg">
        <h2 className="text-lg font-bold mb-4">주제</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer p-2 bg-gray-100 rounded-md">1. </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200 rounded-md">2. </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200 rounded-md">3. </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex justify-center items-start overflow-auto">
        <div className="flex flex-col items-center mt-8">
          {sections.map((content, index) => (
            <div
              key={index}
              className="bg-white w-[210mm] h-[297mm] shadow-lg border border-gray-300 rounded-md relative mb-4"
            >
              <textarea
                value={content}
                onChange={(event) => handleContentChange(index, event)}
                style={{ color: textColor }}
                className="absolute inset-0 w-full h-full border-none focus:outline-none resize-none text-lg bg-white p-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className="fixed bottom-0 right-4 w-[calc(20%-10px)] h-[80%] bg-white border-l border-gray-300 p-4 flex flex-col rounded-tl-lg shadow-lg"
      >
        {/* Text Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 border-b border-gray-300 pb-1">
            <h3 className="text-sm font-bold">텍스트</h3>
            <KeyboardArrowDownIcon className="text-gray-500 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <select className="border border-gray-300 p-1 rounded-md text-sm">
              <option>Regular</option>
              <option>Bold</option>
              <option>Italic</option>
            </select>
            <input
              type="number"
              defaultValue={12}
              className="border border-gray-300 p-1 rounded-md text-sm w-12 text-center"
            />
            <button className="font-bold">B</button>
            <button className="underline">U</button>
            <button className="italic">I</button>
          </div>
        </div>

        {/* Page Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 border-b border-gray-300 pb-1">
            <h3 className="text-sm font-bold">문제</h3>
            <KeyboardArrowDownIcon className="text-gray-500 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">객관식</span>
            </label>
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">단답형</span>
            </label>
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">주관식</span>
            </label>
          </div>
        </div>
        <h3 className="text-sm font-bold">문제 수</h3>
        <input
            type="text"
            placeholder="10 ~ 20"
            className="w-full px-2 py-2 border-b-2 border-gray-300 outline-none focus:border-blue-500 focus:ring-0 transition duration-300"
        />
        <div className="mt-auto"> {/* Sidebar 하단에 고정 */}
          <button
            onClick={() => navigate("/memo/docs/questions")} // 문제 생성 페이지로 이동
            className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            문제 생성하기 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Document;
