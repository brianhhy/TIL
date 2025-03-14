"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function RightQuotemaker() {
    const [chapter, setChapter] = useState(1);
    const [fadeIn, setFadeIn] = useState(false);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (chapter === 2) {
            setTimeout(() => setFadeIn(true), 100);
        }
    }, [chapter]);

    const handleNext = () => {
        if (name) {
            setLoading(true);
            let progressInterval = setInterval(() => {
                setProgress((oldProgress) => {
                    if (oldProgress >= 100) {
                        clearInterval(progressInterval);
                        setChapter(3); // 챕터 3으로 이동
                        setLoading(false);
                        return 100;
                    }
                    return oldProgress + 10;
                });
            }, 300);
        }
    };

    return (
        <div className="w-[500px] h-[800px] bg-black text-white p-6 border border-[#222222] rounded-[15px] flex flex-col items-center justify-between transition-all duration-500 relative">
            {chapter === 1 ? (
                // 챕터 1
                <>
                    <p className="text-xl font-semibold text-center mt-6 whitespace-pre-line">
                        의미있는 명언으로{"\n"}하루를 시작하는건 어떨까요?
                    </p>
                    <div className="flex flex-col items-center mb-20">
                        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
                        <h2 className="text-3xl font-bold p-2 tracking-wider">
                            <span className="text-white">Daily</span>
                            <span className="text-[#FF4F59]">Quote</span>
                        </h2>
                        <p className="text-sm text-[#697077] mt-1">Edited by hipster__egg</p>
                    </div>
                    <button
                        className="bg-[#FF4F59] text-white text-lg font-medium py-4 w-full rounded-lg hover:opacity-80 transition"
                        onClick={() => setChapter(2)}
                    >
                        시작하기
                    </button>
                </>
            ) : (
                <div className={`flex flex-col items-center justify-center flex-grow transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                    {/* 로고 및 제목 왼쪽 상단 배치 (챕터 2 & 챕터 3 공통) */}
                    <div className="absolute top-6 left-6 flex items-center">
                        <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
                        <h2 className="text-2xl font-bold ml-2 tracking-wider">
                            <span className="text-white">Daily</span>
                            <span className="text-[#FF4F59]">Quote</span>
                        </h2>
                    </div>

                    {chapter === 2 ? (
                        <>
                            {!loading && (
                                <>
                                    <p className="text-xl font-semibold text-center mt-6 whitespace-pre-line">
                                        안녕하세요!{"\n"}당신을 어떻게 불러드릴까요?
                                    </p>
                                    <input
                                        type="text"
                                        className="mt-4 p-2 border border-gray-500 rounded-lg text-white w-[263px]"
                                        placeholder="이름 혹은 닉네임"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </>
                            )}
                            {loading && (
                                <div className="flex flex-col items-center">
                                    <p className="text-3xl font-bold text-center mb-3 whitespace-pre-line">
                                        {name ? `${name}님의\n오늘의 명언 확인중..` : "오늘의 명언 확인중.."}
                                    </p>
                                    <div className="w-[197px] bg-[#697077] rounded-full h-2 overflow-hidden">
                                        <div
                                            className="h-full bg-[#FF4F59] transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                            )}
                            <button
                                className={`absolute bottom-6 bg-[#FF4F59] text-white text-lg font-medium py-2 rounded-lg w-[263px] transition ${name && !loading ? 'hover:opacity-80' : 'opacity-50 cursor-not-allowed'}`}
                                onClick={handleNext}
                                disabled={!name || loading}
                            >
                                {loading ? "로딩 중..." : "다음"}
                            </button>
                        </>
                    ) : (
                        // 챕터 3 (이름을 반영하여 표시)
                        <div className="flex flex-col items-center justify-center flex-grow">
                            <h2 className="text-3xl font-bold text-center">{name}님을 위한 명언</h2>
                            <p className="text-lg text-center mt-4">
                                "성공은 작은 노력이 반복된 결과입니다."
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
