import { useEffect, useRef, useState } from "react";
import { main as stackedMain, pre as stackedPre } from "./doom_flame.js";

export default function DoomFlames() {
  const [frame, setFrame] = useState(0);
  const [cols, setCols] = useState(40);
  const [rows, setRows] = useState(12);
  const containerRef = useRef(null);

  // Set your desired fixed height here
  const fixedHeight = 240; // px
  const charWidth = 9 * 0.15;     // px, matches fontSize 16px
  const charHeight = 16 * 0.5;   // px, matches lineHeight 16px

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setCols(Math.max(10, Math.floor(width / charWidth)));
        setRows(Math.max(5, Math.floor(fixedHeight / charHeight)));
      }
    }
    updateSize();
    const resizeObserver = new window.ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", updateSize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setFrame(f => f + 1), 60);
    return () => clearInterval(interval);
  }, []);

  function renderAscii(cols, rows, context) {
    // Always update the flame data for the current grid before rendering
    if (typeof stackedPre === "function") {
      stackedPre(context);
    }
    const lines = [];
    for (let y = 0; y < rows; y++) {
      const chars = [];
      for (let x = 0; x < cols; x++) {
        const result = stackedMain({ x, y, index: y * cols + x }, context);
        if (typeof result === "object" && result !== null) {
          chars.push(
            <span
              key={x}
              style={{
                color: result.color || "#a3e635",
                backgroundColor: result.backgroundColor || "#18181b",
              }}
            >
              {result.char}
            </span>
          );
        } else {
          chars.push(result);
        }
      }
      lines.push(
        <div
          key={y}
          style={{
            lineHeight: "16px",
            height: "16px",
            display: "block",
            whiteSpace: "pre"
          }}
        >
          {chars}
        </div>
      );
    }
    return lines;
  }

  // Prepare context for this frame
  const context = {
    frame,
    time: frame * 60,
    cols,
    rows
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: `${fixedHeight}px`,
        minHeight: `${fixedHeight}px`,
        maxHeight: `${fixedHeight}px`,
        overflow: "hidden",
        position: "relative"
      }}
    >
      <pre
        style={{
          fontFamily: "monospace",
          background: "#18181b",
          padding: "0",
          borderRadius: "0.5em",
          marginBottom: "2em",
          fontSize: "16px",
          lineHeight: "16px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          margin: 0
        }}
      >
        {renderAscii(cols, rows, context)}
      </pre>
    </div>
  );
}