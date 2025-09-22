import React from "react";

export const ServicesSection = (): JSX.Element => {
  const serviceData = {
    number: "2",
    title: "개별 밀착 관리 프로그램",
    features: [
      "인텔 재직자 실무 중심 프로젝트 지도",
      "1:1 맞춤 피드백 및 취업 멘토링",
      "글로벌AC 1대1 맞춤형 창업 컨설팅",
    ],
  };

  return (
    <section
      className="left-[calc(50.00%_-_948px)] absolute top-[247px] w-[420px] h-[421px] bg-[#00000000] rounded-[100px] overflow-hidden shadow-[0px_4px_4px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
      role="region"
      aria-labelledby="service-title"
    >
      <div
        className="absolute top-[50px] left-[57px] w-[100px] h-[76px] bg-[#1989e6] rounded-[100px]"
        role="presentation"
        aria-hidden="true"
      />

      <div
        className="absolute top-[66px] left-[85px] w-11 [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal]"
        aria-label={`서비스 번호 ${serviceData.number}`}
      >
        {serviceData.number}
      </div>

      <div className="absolute top-[181px] left-[57px] w-[305px] [font-family:'Pretendard_Variable-Medium',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal]">
        <h2 id="service-title" className="font-medium mb-4">
          {serviceData.title}
        </h2>

        <ul className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light text-xl space-y-1">
          {serviceData.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-1" aria-hidden="true">
                -
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
