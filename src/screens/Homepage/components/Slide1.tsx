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
    <main className="bg-white w-full h-full relative">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Students doing homework in park"
        src="https://c.animaapp.com/KqTdqEkN/img/students-doing-homework-park-1.png"
      />

      <img
        className="absolute w-[18.60%] h-[3.11%] top-[31.65%] left-[40.66%]"
        alt="Canvas Your Mind Logo"
        src="https://c.animaapp.com/KqTdqEkN/img/group@2x.png"
      />

      <img
        className="absolute w-[60.31%] h-[13.77%] top-[38.78%] left-[19.79%]"
        alt="Mind Canvas Main Title"
        src="https://c.animaapp.com/KqTdqEkN/img/group-1.png"
      />

      <img
        className="absolute w-[94px] h-[94px] top-[163px] left-[913px]"
        alt="Decorative Element"
        src="https://c.animaapp.com/KqTdqEkN/img/group-10.png"
      />

      {/* Top Navigation Buttons */}
      <nav className="absolute top-[50px] left-[50px] flex gap-4">
        {topNavButtons.map((button, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-[100px] backdrop-blur-[2.5px] backdrop-brightness-[88.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(88.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_1px_0_0_rgba(255,255,255,0.20),inset_0_-1px_1px_rgba(0,0,0,0.11),inset_-1px_0_1px_rgba(0,0,0,0.09)] bg-blend-screen text-white font-medium text-sm transition-all hover:bg-[#ffffff20] ${
              button.active ? "bg-[#ffffff20]" : "bg-[#ffffff12]"
            }`}
          >
            {button.text}
          </button>
        ))}
      </nav>

      {/* Right Social Media Icons */}
      <aside className="absolute top-[50px] right-[50px] flex gap-4">
        {socialMediaLinks.map((social, index) => (
          <button
            key={social.id}
            className="w-[54px] h-[54px] bg-[#ffffff12] rounded-[100px] backdrop-blur-[2.5px] backdrop-brightness-[88.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(88.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_1px_0_0_rgba(255,255,255,0.20),inset_0_-1px_1px_rgba(0,0,0,0.11),inset_-1px_0_1px_rgba(0,0,0,0.09)] bg-blend-screen flex items-center justify-center transition-all hover:bg-[#ffffff20]"
            aria-label={social.ariaLabel}
          >
            <img
              className="w-8 h-8"
              alt={social.ariaLabel}
              src={social.icon}
            />
          </button>
        ))}
      </aside>

      {/* Bottom Schedule Section */}
      <section className="absolute bottom-[105px] left-1/2 transform -translate-x-1/2 w-[884px] h-[195px] bg-[#ffffff12] rounded-[100px] backdrop-blur-[2.5px] backdrop-brightness-[88.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(88.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_1px_0_0_rgba(255,255,255,0.20),inset_0_-1px_1px_rgba(0,0,0,0.11),inset_-1px_0_1px_rgba(0,0,0,0.09)] bg-blend-screen">
        <div className="flex h-full">
          {scheduleData.map((item, index) => (
            <div key={index} className="flex-1 flex items-center px-12 py-8">
              <div className="flex items-start gap-4">
                <img
                  className="w-8 h-8 mt-1 flex-shrink-0"
                  alt={item.title}
                  src={item.icon}
                />
                <div className="flex flex-col">
                  <h3 className="[font-family:'Pretendard_Variable-Medium',Helvetica] font-medium text-white text-[32px] leading-[1.2] mb-2">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Pretendard_Variable-Regular',Helvetica] text-white text-xl leading-[1.3] mb-1">
                    {item.period}
                  </p>
                  <p className="[font-family:'Pretendard_Variable-Light',Helvetica] font-light text-white text-[15px] leading-[1.2]">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Divider */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-[100px] bg-white opacity-30"></div>
        </div>
      </section>
    </main>
  );
};
