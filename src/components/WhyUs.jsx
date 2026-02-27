import React from 'react'

export default function WhyUs() {
  return (
    <div className="bg-white max-w-[1320px] mx-auto px-[40px] py-[60px]">

      <div className="grid grid-cols-2 gap-[16px] mb-[16px]">
        <div className="bg-[#E65910] rounded-[8px] flex items-center px-[32px] py-[32px]">
          <h2
            className="text-[48px] leading-[54px] font-black uppercase text-white"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            ПОЧЕМУ НАС<br />ВЫБИРАЮТ
          </h2>
        </div>
        <div className="rounded-[8px] overflow-hidden">
          <img src="/public/WhyUs.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[16px] mb-[16px]">
        <div className="bg-[#E65910] rounded-[8px] px-[24px] py-[24px]">
          <p className="text-white text-[13px] leading-[18px] font-semibold mb-[12px]"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            Индивидуальные решения под ваши технические требования
          </p>
          <p className="text-white text-[13px] leading-[20px]"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            Мы разрабатываем и изготавливаем СВЧ-фильтры, мультиплексоры, селекторы и RF-модули строго по ТЗ заказчика с возможностью тонкой настройки рабочих характеристик — от прототипа до серийного производства.
          </p>
        </div>
        <div className="rounded-[8px] overflow-hidden">
          <img src="/public/WhyUs1.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#E65910] rounded-[8px] px-[24px] py-[24px]">
          <p className="text-white text-[13px] leading-[18px] font-semibold mb-[12px]"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            Передовые технологии проектирования и производства
          </p>
          <p className="text-white text-[13px] leading-[20px]"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            Мы используем современные схемотехнические, конструктивные и технологические решения, включая монолитные керамические фильтры, толстоплёночные технологии и лазерную герметизацию, для обеспечения высокой надёжности и стабильности характеристик ваших устройств.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[16px] mb-[48px]">
        <div className="rounded-[8px] overflow-hidden">
          <img src="/public/WhyUs2.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#E65910] rounded-[8px] px-[24px] py-[24px]">
          <p className="text-white text-[13px] leading-[18px] font-semibold mb-[12px]"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            Гибкий подход и минимальные сроки
          </p>
          <p className="text-white text-[13px] leading-[20px]"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            Готовы выполнить индивидуальные заказы, включая единичные образцы, с быстрым расчётом стоимости и подготовкой коммерческого предложения, что выгодно отличает нас от крупных стандартных производителей.
          </p>
        </div>
        <div className="rounded-[8px] overflow-hidden">
          <img src="/public/WhyUs3.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-[16px] border-t border-gray-200 pt-[40px]">
        {[
          { number: "7 лет", label: "успешной работы с 2018 г." },
          { number: "1017+", label: "разработанных устройств" },
          { number: "156+", label: "довольных клиентов" },
          { number: "14", label: "технологических патентов" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span
              className="text-[75px] leading-[75px] font-medium tracking-[0%] text-black"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              {stat.number}
            </span>
            <span
              className="text-[16px] leading-[19.2px] font-light tracking-[0px] text-black mt-[4px]"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}