import React from "react";
import { BenefitsSection } from "../../../routes/Slide/screens/sections/BenefitsSection";
import { CallToActionSection } from "../../../routes/Slide/screens/sections/CallToActionSection";
import { ContactSection } from "../../../routes/Slide/screens/sections/ContactSection";
import { FeatureSection } from "../../../routes/Slide/screens/sections/FeatureSection";
import { IntroductionSection } from "../../../routes/Slide/screens/sections/IntroductionSection";
import { ServicesSection } from "../../../routes/Slide/screens/sections/ServicesSection";
import { TestimonialsSection } from "../../../routes/Slide/screens/sections/TestimonialsSection";

export const Slide2 = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full h-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#212121]" />

      <div className="absolute top-[74px] left-1/2 transform -translate-x-1/2 w-[861px] [font-family:'Pretendard_Variable-Regular',Helvetica] text-[64px] text-center font-normal text-white tracking-[0] leading-[normal]">
        클래스 메이트 혜택
      </div>

      <div className="relative w-full h-full overflow-x-auto">
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
