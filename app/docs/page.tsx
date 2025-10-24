"use client";

import { useState } from "react";

export default function MaximizeButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      {isFullscreen ? "Exit Fullscreen" : "Maximize"}
    </button>
  );
}
