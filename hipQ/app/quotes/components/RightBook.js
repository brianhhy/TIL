"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function RightBook({
  title = "Book Title",
  className,
  onClick,
  animated = true,
  pageColor = "#f1f1f1",
}) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={cn("relative w-48 h-60 cursor-pointer transition-all duration-500", className)}
      onMouseEnter={() => animated && setIsActive(true)}
      onMouseLeave={() => animated && setIsActive(false)}
      onClick={onClick}
    >
      {/* Book spine/pages (3D effect) */}
      <div
        className={cn(
          "absolute bottom-0 right-0 w-[95%] h-[98%] rounded-sm border-r-3 border-b-3 border-black bg-[#F5F5DC] transition-all duration-500",
          "translate-x-1.5 translate-y-1.5",
          isActive ? "translate-x-0 translate-y-0 -rotate-15" : "",
        )}
        style={{ backgroundColor: pageColor }}
      />

      {/* Fill gap between book cover and pages */}
      <div className="absolute bottom-0 right-0 w-full h-full bg-[#FEFAF0] rounded-sm" />

      {/* Book body */}
      <div
        className={cn(
          "absolute inset-0 rounded-sm border-3 border-black bg-white transition-all duration-500 shadow-lg",
          "translate-x-[-3px] translate-y-[-3px]",
          isActive ? "translate-x-0 translate-y-0 -rotate-15" : "",
        )}
      >
        {/* Book title bar */}
        <h2 className="absolute top-6 left-1/2 -translate-x-1/2 text-2xl font-bold p-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#FF4F59]">
          오늘의<br/>명언
        </h2>

        {/* Book title (optional) */}
        {title && (
          <div className="absolute bottom-6 left-0 right-0 text-center text-sm font-medium px-3 truncate">editted by hipster__egg</div>
        )}
      </div>
    </div>
  )
}
