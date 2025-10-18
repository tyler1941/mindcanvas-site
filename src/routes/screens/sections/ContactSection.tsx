import React from "react";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="left-[calc(50.00%_+_908px)] absolute top-[247px] w-[420px] h-[421px] bg-[#00000000] rounded-[100px] overflow-hidden shadow-[0px_4px_4px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
      <div className="absolute top-[50px] left-[57px] w-[100px] h-[76px] bg-[#1989e6] rounded-[100px]" />

      <div className="absolute top-[66px] left-[85px] w-11 [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal]">
        6
      </div>

      <p className="top-[181px] left-[57px] w-[305px] [font-family:'Pretendard_Variable-Medium',Helvetica] text-[32px] absolute font-normal text-white tracking-[0] leading-[normal]">
        <span className="font-medium">
          훈련 장려금 지급
          <br />
        </span>

        <span className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light">
          <br />
        </span>

        <span className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light text-xl">
          -월 최대 316,000원의 훈련 장려금 제공
        </span>
      </p>
    </section>
  );
};
