import React from 'react'

const services = [
  { name: "Разработка ВЧ/СВЧ устройств", img: "/public/Services(1).png" },
  { name: "Обработка керамики", img: "/public/Services(2).png" },
  { name: "Металлобработка", img: "/public/Services(3).png" },
  { name: "Лазерная обработка материалов", img: "/public/Services(4).png" },
];

export default function Services() {
  return (
    <div className="bg-white max-w-[1420px] mx-auto px-[40px] py-[60px]">
      <div className="flex items-center gap-[60px] mb-[50px]">
        <h2 className="text-[52px] leading-[58px] font-black uppercase text-black" style={{ fontFamily: "Arial Black, sans-serif" }}>

          НАШИ <br /> КОМПЕТЕНЦИИ
        </h2>

        <img
          src="/Component.png"
          alt=""
          className="w-[110px] h-[52px] object-contain ml-[210px]"
        />
      </div>

      <div className="grid grid-cols-4 gap-[48px]">
        {services.map((service) => (
          <div key={service.name} className="flex flex-col">

            <div className="w-full h-[170px] overflow-hidden rounded-[4px]">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p
              className="mt-[24px] text-[20px] leading-[24px] font-normal text-black tracking-[0px]"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              {service.name}
            </p>

          </div>
        ))}
      </div>

      <div className="flex justify-end mt-[40px]">
        <button
          className="px-[24px] py-[10px] rounded-full bg-[#E65910] text-white text-[16px] hover:bg-orange-700 transition-colors"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Все услуги
        </button>
      </div>

    </div>
  );
}