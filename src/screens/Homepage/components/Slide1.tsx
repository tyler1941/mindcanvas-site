import React from "react";

export const Slide1 = (): JSX.Element => {
  const socialMediaLinks = [
    {
      id: "facebook",
      icon: "https://c.animaapp.com/KqTdqEkN/img/facebook.svg",
      ariaLabel: "Facebook",
    },
    {
      id: "instagram",
      icon: "https://c.animaapp.com/KqTdqEkN/img/instagram.svg",
      ariaLabel: "Instagram",
    },
    {
      id: "mail",
      icon: "https://c.animaapp.com/KqTdqEkN/img/mail.svg",
      ariaLabel: "Email",
    },
  ];

  const topNavButtons = [
    { text: "교육일정", active: true },
    { text: "커리큘럼", active: false },
    { text: "모집 신청", active: false },
  ];

  const scheduleData = [
    {
      icon: "https://c.animaapp.com/KqTdqEkN/img/calendar.svg",
      title: "교육일정",
      period: "2025.10.30.(목) ~ 2026.4.22.(수)",
      details: "(1일 8시간/총944시간/118일)",
    },
    {
      icon: "https://c.animaapp.com/KqTdqEkN/img/box.svg",
      title: "신청기간",
      period: "2025.10.30.(목) ~ 2026.4.22.(수)",
      details: "*신청 기간(시간) 엄수 바랍니다.",
    },
  ];

  return (
    <main className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-between">
      {/* 배경 이미지 - 메인 레이아웃의 가장 뒤에 위치 (fixed 대신 absolute 사용) */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Students doing homework in park"
        src="https://c.animaapp.com/KqTdqEkN/img/students-doing-homework-park-1.png"
      />

      {/* 오버레이 효과를 위한 투명 레이어 (선택 사항) */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Header - 상단 네비게이션과 소셜 미디어 링크 */}
      <header className="relative z-10 flex justify-between items-center p-8 md:p-12 lg:p-16">
        {/* Top Navigation Buttons */}
        <nav className="flex gap-2 sm:gap-4 md:gap-6">
          {topNavButtons.map((button, index) => (
            <button
              key={index}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-sm bg-white/20 text-white font-medium text-xs sm:text-sm transition-all hover:bg-white/30 ${
                button.active ? "bg-white/30" : ""
              }`}
            >
              {button.text}
            </button>
          ))}
        </nav>

        {/* Right Social Media Icons */}
        <aside className="flex gap-2 sm:gap-4 md:gap-6">
          {socialMediaLinks.map((social) => (
            <button
              key={social.id}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/30"
              aria-label={social.ariaLabel}
            >
              <img
                className="w-5 h-5 sm:w-6 sm:h-6"
                alt={social.ariaLabel}
                src={social.icon}
              />
            </button>
          ))}
        </aside>
      </header>

      {/* Main Content - 로고, 타이틀, 그리고 다른 중앙 콘텐츠를 위한 컨테이너 */}
      <section className="relative z-10 flex flex-col items-center justify-center flex-grow p-4">
        {/* 기존에 절대 위치로 잡혀있던 이미지를 상대적으로 배치 */}
        {/* 너비를 vw 단위로, 최대 너비를 제한하여 반응형으로 만듭니다 */}
        <img
          className="w-[30vw] max-w-[200px] sm:w-[20vw] sm:max-w-[250px] md:w-[18vw] md:max-w-[300px] mb-4"
          alt="Canvas Your Mind Logo"
          src="https://c.animaapp.com/KqTdqEkN/img/group@2x.png"
        />

        <img
          className="w-[80vw] max-w-[600px] sm:w-[70vw] sm:max-w-[800px] md:w-[60vw] md:max-w-[960px] mb-8"
          alt="Mind Canvas Main Title"
          src="https://c.animaapp.com/KqTdqEkN/img/group-1.png"
        />

        {/* Decorative Element - 필요하다면 이 부분도 위치를 조정하거나 크기를 조절해야 합니다 */}
        {/* 여기서는 임시로 absolute를 유지하되, 화면 크기에 따라 조정되도록 top/left를 vw/vh 단위로 변경 */}
        <img
          className="absolute top-[10vh] right-[5vw] w-[10vw] max-w-[94px] h-auto object-contain z-0 hidden md:block" // 작은 화면에서는 숨김
          alt="Decorative Element"
          src="https://c.animaapp.com/KqTdqEkN/img/group-10.png"
        />
      </section>

      {/* Bottom Schedule Section - 하단 스케줄 섹션 */}
      <section className="relative z-10 mx-auto px-4 w-full max-w-screen-lg mb-8 md:mb-12">
        <div className="bg-white/20 rounded-full backdrop-blur-sm p-4 md:p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-around gap-4 md:gap-8">
            {scheduleData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 flex items-start gap-4 p-2 sm:p-4 text-center md:text-left">
                  <img
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1"
                    alt={item.title}
                    src={item.icon}
                  />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white text-base sm:text-lg md:text-xl leading-snug mb-0.5">
                      {item.period}
                    </p>
                    <p className="font-light text-white text-xs sm:text-sm md:text-base leading-snug">
                      {item.details}
                    </p>
                  </div>
                </div>
                {index === 0 && ( // 첫 번째 아이템 다음에만 구분선 추가
                  <div className="w-[80%] h-px bg-white/30 md:w-px md:h-[100px] md:self-stretch"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};