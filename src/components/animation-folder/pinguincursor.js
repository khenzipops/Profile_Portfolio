"use client";
import { useState, useEffect } from "react";

export default function PenguinCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: cursorPos.x + 3,
        top: cursorPos.y + 5,
        pointerEvents: "none",
        zIndex: 9999,
        fontSize: "24px",
      }}
    >
      🐧
    </div>
  );
}
