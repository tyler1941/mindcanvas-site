import React, { useRef, useState } from "react";
import { BenefitsSection } from "../../../routes/Slide/screens/sections/BenefitsSection";
import { CallToActionSection } from "../../../routes/Slide/screens/sections/CallToActionSection";
import { ContactSection } from "../../../routes/Slide/screens/sections/ContactSection";
import { FeatureSection } from "../../../routes/Slide/screens/sections/FeatureSection";
import { IntroductionSection } from "../../../routes/Slide/screens/sections/IntroductionSection";
import { ServicesSection } from "../../../routes/Slide/screens/sections/ServicesSection";
import { TestimonialsSection } from "../../../routes/Slide/screens/sections/TestimonialsSection";

export const Slide2 = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = 'auto';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    document.body.style.userSelect = 'auto';
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <main className="bg-white overflow-hidden w-full h-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#212121]" />

      <div className="absolute top-[74px] left-1/2 transform -translate-x-1/2 w-[861px] [font-family:'Pretendard_Variable-Regular',Helvetica] text-[64px] text-center font-normal text-white tracking-[0] leading-[normal]">
        클래스 메이트 혜택
      </div>

      <div 
        ref={scrollContainerRef}
        className={`relative w-full h-full overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="min-w-[2947px] h-full relative">
          <IntroductionSection />
          <ServicesSection />
          <TestimonialsSection />
          <BenefitsSection />
          <FeatureSection />
          <ContactSection />
          <CallToActionSection />
        </div>
      </div>
    </main>
  );
};
