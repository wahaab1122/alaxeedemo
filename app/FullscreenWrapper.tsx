// components/FullscreenWrapper.tsx
"use client";

import { useEffect, useState } from "react";

interface FullscreenWrapperProps {
  children: React.ReactNode;
}

export default function FullscreenWrapper({ children }: FullscreenWrapperProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Optional: automatically request fullscreen on mount (user gesture may be required)
    if (document.fullscreenEnabled && !document.fullscreenElement) {
      // Note: some browsers require a user gesture to enter fullscreen
      // document.documentElement.requestFullscreen(); 
      setIsFullscreen(true);
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#f5f5f5", // optional background
      }}
    >
      {children}

      {/* Optional: Fullscreen toggle button */}
      <button
        onClick={() => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
          } else {
            document.exitFullscreen();
            setIsFullscreen(false);
          }
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "8px 12px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {isFullscreen ? "Exit Fullscreen" : "Maximize"}
      </button>
    </div>
  );
}
