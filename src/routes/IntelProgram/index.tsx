// src/routes/IntelProgram/index.tsx
import React from "react";

/**
 * Vite의 base 경로를 고려하여 public 경로를 안전하게 만든다.
 * - dev: "/" → "/intel-ai-program/index.html"
 * - gh-pages(base가 "/<repo>/"): "/<repo>/intel-ai-program/index.html"
 */
const base = (import.meta as any).env.BASE_URL ?? "/";

export const IntelAIProgram: React.FC = () => {
  return (
    <iframe
      title="Intel AI Program"
      src={`${base}intel-ai-program/index.html`}
      style={{
        width: "100%",
        height: "100vh",
        border: "0",
        display: "block",
      }}
    />
  );
};

export default IntelAIProgram;
