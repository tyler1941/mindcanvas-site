import React from "react";

export const FeatureSection = (): JSX.Element => {
  const featureData = {
    number: "5",
    title: "공식 인증서 발급",
    description: [
      "-인텔 AI 인증서 제공",
      "-인텔 주관 글로벌 AI 경진대회 참가 자격 부여 (총상금 $500,000, 우수 개발 앱 홍보 지원 포함)",
    ],
  };

  return (
    <section
      className="left-[calc(50.00%_+_444px)] absolute top-[247px] w-[420px] h-[421px] bg-[#00000000] rounded-[100px] overflow-hidden shadow-[0px_4px_4px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
      role="region"
      aria-labelledby="feature-title"
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
        {featureData.number}
      </div>

      <div className="absolute top-[181px] left-[57px] w-[305px] [font-family:'Pretendard_Variable-Medium',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal]">
        <h3 id="feature-title" className="font-medium mb-4">
          {featureData.title}
        </h3>

        <div className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light text-xl">
          {featureData.description.map((item, index) => (
            <p key={index} className="mb-1">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
