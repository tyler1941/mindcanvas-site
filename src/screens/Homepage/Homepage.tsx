import React from "react";
import { Slide1 } from "./components/Slide1";
import { Slide2 } from "./components/Slide2";
import { Slide3 } from "./components/Slide3";

export const Homepage = (): JSX.Element => {
  return (
    <div className="w-full">
      {/* Slide 1 - Full viewport height */}
      <section className="h-screen">
        <Slide1 />
      </section>
      
      {/* Slide 2 - Full viewport height */}
      <section className="h-screen">
        <Slide2 />
      </section>
      
      {/* Slide 3 - Auto height to match content */}
      <section className="min-h-screen">
        <Slide3 />
      </section>
    </div>
  );
};
