import React from 'react'

export default function CallToAction() {
  return (
    <div className="relative w-full overflow-hidden bg-[#000000] mt-[60px]">
      <img
        src="/public/bg_img.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-[1320px] mx-auto px-[60px] py-[60px] flex items-center justify-between">
        <p
          className="text-[28px] leading-[36px] font-normal text-white"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Интересует{" "}
          <span className="text-[#E65910]">индивидуальное решение</span>
          <br />
          по Вашему ТЗ?
        </p>
        <button
          className="px-[32px] py-[14px] rounded-[8px] bg-[#E65910] text-white text-[18px] font-normal hover:bg-orange-700 transition-colors whitespace-nowrap"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
}