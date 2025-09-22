import React from "react";

export const TestimonialsSection = (): JSX.Element => {
  const testimonialData = {
    number: "3",
    title: "리소스 무한 공급",
    features: [
      "교육장 무제한 제공",
      "노트북 무상 대여",
      "전문 서적 및 인텔 개발 플랫폼 제공",
    ],
  };

  return (
    <section
      className="left-[calc(50.00%_-_484px)] absolute top-[247px] w-[420px] h-[421px] bg-[#00000000] rounded-[100px] overflow-hidden shadow-[0px_4px_4px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
      role="region"
      aria-labelledby="testimonial-title"
    >
      <div
        className="absolute top-[50px] left-[57px] w-[100px] h-[76px] bg-[#1989e6] rounded-[100px]"
        role="presentation"
        aria-hidden="true"
      />

      <div
        className="absolute top-[66px] left-[85px] w-11 [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal]"
        aria-label={`단계 ${testimonialData.number}`}
      >
        {testimonialData.number}
      </div>

      <div className="top-[181px] left-[57px] w-[305px] [font-family:'Pretendard_Variable-Medium',Helvetica] text-[32px] absolute font-normal text-white tracking-[0] leading-[normal]">
        <h3 id="testimonial-title" className="font-medium mb-4">
          {testimonialData.title}
        </h3>

        <ul className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light text-xl space-y-1">
          {testimonialData.features.map((feature, index) => (
            <li key={index}>-{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
