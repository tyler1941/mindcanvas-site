import React from "react";

export const BenefitsSection = (): JSX.Element => {
  const benefitData = {
    number: "4",
    title: "최신 기술 실습 환경",
    description: "-ChatGPT 등 다양한 AI API 사용 지원",
  };

  return (
    <section
      className="left-[calc(50.00%_-_20px)] absolute top-[247px] w-[420px] h-[421px] bg-[#00000000] rounded-[100px] overflow-hidden shadow-[0px_4px_4px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
      role="region"
      aria-labelledby="benefit-title"
    >
      <div
        className="absolute top-[50px] left-[57px] w-[100px] h-[76px] bg-[#1989e6] rounded-[100px]"
        role="presentation"
        aria-hidden="true"
      />

      <div
        className="absolute top-[66px] left-[85px] w-11 [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal]"
        role="presentation"
        aria-hidden="true"
      >
        {benefitData.number}
      </div>

      <div className="absolute top-[181px] left-[57px] w-[305px] [font-family:'Pretendard_Variable-Medium',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal]">
        <h3 id="benefit-title" className="font-medium mb-4">
          {benefitData.title}
        </h3>

        <p className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light text-xl mt-4">
          {benefitData.description}
        </p>
      </div>
    </section>
  );
};
