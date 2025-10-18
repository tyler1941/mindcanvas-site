import React from "react";

export const Slide = () => {
  const features = [
    {
      title: "AI 개념 마스터",
      description: "생성형 AI 도구 활용부터 딥러닝까지 체계적 학습",
      icon: "https://c.animaapp.com/mfux6evxRb0srb/img/award.svg",
      iconAlt: "Award",
    },
    {
      title: "사용 앱 개발",
      description: "React, Flask  활용한 실전 AI 앱 구축",
      icon: "https://c.animaapp.com/mfux6evxRb0srb/img/cpu.svg",
      iconAlt: "Cpu",
    },
    {
      title: "취업/창업 준비",
      description: "포트폴리오 완성으로 즉시 현업 투입",
      icon: "https://c.animaapp.com/mfux6evxRb0srb/img/briefcase.svg",
      iconAlt: "Briefcase",
    },
  ];

  return (
    <main className="bg-white w-full min-w-[1920px] min-h-[2277px] relative">
      <img
        className="absolute top-0 left-0 w-[1920px] h-[2277px] object-cover"
        alt="Group young successful people vacation friends enjoying game lake"
        src="https://c.animaapp.com/mfux6evxRb0srb/img/group-young-successful-people-vacation-friends-enjoying-game-lak.png"
      />

      <div className="absolute top-[274px] left-[98px] w-[1725px] h-[1902px]">
        <header className="absolute top-[calc(50.00%_-_951px)] left-[calc(50.00%_-_711px)] w-[1412px] [font-family:'Pretendard_Variable-SemiBold',Helvetica] font-normal text-transparent text-8xl text-center tracking-[0] leading-[96px]">
          <h1>
            <span className="text-white font-semibold leading-[0.1px]">
              THE
            </span>
            <span className="text-[#002b57] font-semibold leading-[0.1px]">
              &nbsp;
            </span>
            <span className="[font-family:'Pretendard_Variable-ExtraBold',Helvetica] font-extrabold text-[#6cc7e5] leading-[0.1px]">
              ONE
            </span>
            <span className="text-[#002b57] font-semibold leading-[0.1px]">
              &nbsp;
            </span>
            <span className="text-white font-semibold leading-[0.1px]">
              AND ONLY PROGRAM
              <br />
            </span>
            <span className="text-[#002b57] font-semibold leading-[0.1px]">
              <br />
            </span>
          </h1>
          <p className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light text-white text-xl leading-8">
            AI는 더 이상 먼 미래가 아닙니다. 본 과정은 누구나 이해할 수 있는
            기초부터 시작해실무 수준의 프로젝트를 경험하도록 설계되었습니다.
            <br />
            Intel 공인 인증을 통해 검증된 역량을 증명하고, 취업과 창업까지
            연결되는 커리어의 문을 열어드립니다.
          </p>
        </header>

        <section className="absolute top-[530px] left-0 w-[1723px] h-[1372px] flex flex-col gap-[107px]">
          <div className="ml-[11.0px] w-[1712px] self-center flex gap-[97px]">
            {features.map((feature, index) => (
              <article key={index} className="w-[506px] h-[449px] flex">
                <div className="mt-0 ml-0 mr-0 flex-1 mb-0 w-[506px] flex flex-col gap-[50px] bg-[#ffffff12] rounded-[100px] -rotate-180 backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-blend-screen">
                  <div className="ml-[110.0px] w-[286px] h-[191px] mt-[69.0px] rotate-180 [font-family:'Inter',Helvetica] font-normal text-white text-4xl text-center tracking-[0] leading-[normal]">
                    <h3 className="font-bold">
                      {feature.title}
                      <br />
                    </h3>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-white text-4xl tracking-[0]">
                      <br />
                    </span>
                    <p className="text-2xl">
                      {feature.description}
                      <br />
                    </p>
                    <span className="text-base"></span>
                  </div>

                  <img
                    className={`${index === 2 ? "ml-[212.0px] w-[83px] h-[83px]" : "ml-[211.0px] w-[85px] h-[85px]"} rotate-180`}
                    alt={feature.iconAlt}
                    src={feature.icon}
                  />
                </div>
              </article>
            ))}
          </div>

          <img
            className="mr-2.5 flex-1 ml-0 mb-0 bg-blend-screen"
            alt="Glass effect decorative element"
            src="https://c.animaapp.com/mfux6evxRb0srb/img/glass-effect.svg"
          />
        </section>
      </div>
    </main>
  );
};
