import React from "react";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="absolute top-[740px] left-[calc(50.00%_-_960px)] w-[932px]">
      <p className="[font-family:'Pretendard_Variable-Light',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
        <span className="font-light">
          본 과정은 고용노동부가 주최하고 디지털선도기업인 인텔과 전문교육기관인
          한국전파진흥협회가 주관하여 공동 운영하는{" "}
        </span>

        <span className="[font-family:'Pretendard_Variable-Medium',Helvetica] font-medium">
          K-디지털 트레이닝의 디지털선도기업아카데미
        </span>

        <span className="font-light"> 사업으로 지원됩니다.</span>
      </p>
    </section>
  );
};
