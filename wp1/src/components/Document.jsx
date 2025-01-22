import React, { useState } from "react";

const Document = () => {
  const [sections, setSections] = useState([""]); // 여러 섹션 상태
  const [menuVisible, setMenuVisible] = useState(false); // Speed Dial 메뉴 상태

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

  // Speed Dial 메뉴 토글
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="flex w-full h-screen bg-gray-200 relative">
      {/* Left Sidebar */}
      <div className="fixed bottom-0 left-0 w-1/5 h-[80%] bg-white border-r border-gray-300 p-4 flex flex-col rounded-tr-lg">
        <h2 className="text-lg font-bold mb-4">페이지</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer p-2 bg-gray-100 rounded-md">책장</li>
          <li className="cursor-pointer p-2 hover:bg-gray-200 rounded-md">책</li>
          <li className="cursor-pointer p-2 hover:bg-gray-200 rounded-md pl-4">
            페이지
          </li>
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
                className="absolute inset-0 w-full h-full border-none focus:outline-none resize-none text-lg bg-white text-black p-4"
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
          <h3 className="text-sm font-bold mb-2">Text</h3>
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
          <div className="flex items-center space-x-2">
            <button className="w-6 h-6 bg-red-500 rounded-full"></button>
            <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
            <button className="w-6 h-6 bg-yellow-400 rounded-full"></button>
            <button className="w-6 h-6 bg-black rounded-full"></button>
            <button className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
              +
            </button>
          </div>
        </div>

        {/* Page Section */}
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-2">Page</h3>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2">
              <span>새 페이지</span>
            </button>
            <button className="flex items-center space-x-2">
              <span>PDF 추가</span>
            </button>
          </div>
        </div>

        {/* Setting Section */}
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-2">Setting</h3>
          <div className="mb-2">
            <input
              type="text"
              placeholder="노트 이름"
              className="border border-gray-300 w-full rounded-md p-1 text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-6 h-6 bg-red-500 rounded-full"></button>
            <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
            <button className="w-6 h-6 bg-yellow-400 rounded-full"></button>
            <button className="w-6 h-6 bg-black rounded-full"></button>
            <button className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
              +
            </button>
          </div>
        </div>

        {/* Record Section */}
        <div>
          <button className="text-red-500 text-sm">Record</button>
        </div>
      </div>

      {/* Speed Dial */}
      <div className="fixed bottom-6 right-[26%] z-50 group">
        <div
          id="speed-dial-menu-dropdown-alternative"
          className={`flex flex-col justify-end ${
            menuVisible ? "" : "hidden"
          } py-1 mb-4 space-y-2 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 z-50`}
        >
          <ul className="text-sm text-gray-500 dark:text-gray-300">
            <li>
              <a
                href="#"
                className="flex items-center px-5 py-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5.75a2.25 2.25 0 00-2.25 2.25v1.5H9c-1.245 0-2.25 1.005-2.25 2.25v3a2.25 2.25 0 002.25 2.25h6c1.245 0 2.25-1.005 2.25-2.25v-3c0-1.245-1.005-2.25-2.25-2.25h-.75v-1.5A2.25 2.25 0 0012 5.75z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75h.008v.008H9v-.008zM12 12.75h.008v.008H12v-.008zM15 12.75h.008v.008H15v-.008z" />
                </svg>
                <span className="text-sm font-medium">질문하기</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-5 py-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white dark:border-gray-600"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 9.75H4.5m15 0L18 21.75H6L4.5 9.75m15 0V7.5A2.25 2.25 0 0017.25 5.25H6.75A2.25 2.25 0 004.5 7.5v2.25m0 0h15"
                  />
                </svg>
                <span className="text-sm font-medium">스캔 후 질문하기</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-3.5 h-3.5 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                </svg>
                <span className="text-sm font-medium">요약하기</span>
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuVisible}
          className="flex items-center justify-center ml-auto text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>

    </div>
  );
};

export default Document;
