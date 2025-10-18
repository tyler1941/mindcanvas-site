// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./screens/Homepage";
import { Slide as BenefitsSlide } from "./routes/Slide/screens/Slide";
import { IntelAIProgram } from "./routes/IntelProgram"; // ← 이 파일은 아래 3) 참고

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/benefits" element={<BenefitsSlide />} />
        {/* 여기: 하위 경로 어떤 것이 와도 매칭 */}
        <Route path="/intel-ai-program/*" element={<IntelAIProgram />} />
      </Routes>
    </Router>
  );
};