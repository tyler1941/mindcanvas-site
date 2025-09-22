import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./screens/Homepage";
import { Slide as BenefitsSlide } from "./routes/Slide/screens/Slide";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/benefits" element={<BenefitsSlide />} />
      </Routes>
    </Router>
  );
};
