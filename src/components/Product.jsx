import React from 'react'

const products = [
  { name: "Фильтр полосовой ФКП2-308-01-1,685-70", img: "/public/p (1).png" },
  { name: "Фильтр перестариваемый полосовой МППФ5-0.9/1.9-4-Б", img: "/public/p (2).png" },
  { name: "Фильтр полосовой ФПР-5-6,5-500-НП", img: "/public/p (3).png" },
  { name: "Фильтр полосовой ФПК-6-2,5-1000-НП", img: "/public/p (4).png" },
  { name: "Фильтр полосовой ФПС-7-1,25-450-НП", img: "/public/p (5).png" },
  { name: "Фильтр полосовой ФПС-9-0,21-120-ГП", img: "/public/p (6).png" },
  { name: "Коммутатор фильтров КПФ-5-1-ГП", img: "/public/p (7).png" },
  { name: "Фильтры нижней частоты ФН-1,83-НМ", img: "/public/p (8).png" },
];

export default function Product() {
  return (
    <div className="bg-white max-w-[1420px] mx-auto px-[40px] py-[60px]">
      <div className="grid grid-cols-2 items-center gap-[50px] mb-[40px]">
        <h2 className="text-[52px] leading-[58px] font-black uppercase text-black" style={{ fontFamily: "Arial Black, sans-serif" }}>

          НАШИ <br /> КОМПЕТЕНЦИИ
        </h2>

        <img
          src="/Component.png"
          alt=""
          className="w-[110px] h-[52px] object-contain ml-[70px]"
        />
      </div>

      <div className="grid grid-cols-4 gap-[48px]">
        {products.map((product) => (
          <div key={product.name} className="grid grid-cols-1 items-center gap-[12px]">

            <div
              className="rounded-[12px] bg-white grid  items-center justify-center overflow-hidden"
              style={{
                width: "100%",
                height: "219px",

              }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
            </div>

            <p
              className=" box_shadow mt-[12px] text-[20px] leading-[24px] font-normal text-black px-[12px] py-[10px]"
              style={{
                fontFamily: "Rubik, sans-serif",
                letterSpacing: "0px",
                width: "310px",
                height: "94px",
              }}
            >
              {product.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-[12px] mt-[48px]">
        <button
          className="px-[24px] py-[10px] rounded-full border border-[#E65910] text-[#E65910] text-[16px] bg-white hover:bg-orange-50 transition-colors"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Поиск по фильтрам
        </button>
        <button
          className="px-[24px] py-[10px] rounded-full bg-[#E65910] text-white text-[16px] hover:bg-orange-700 transition-colors"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Весь каталог
        </button>
      </div>

    </div>
  );
}