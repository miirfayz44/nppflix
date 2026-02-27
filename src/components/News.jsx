import { useState } from 'react'

const news = [
  {
    tag: "в отрасли",
    date: "13 декабря 2023",
    name: "Чрезвычайно огромное название этой тематической статьи как раз умещающееся в максимум три строки",
    img: "//new.png",
  },
  {
    tag: "в мире",
    date: "13 декабря 2023",
    name: "Чрезвычайно огромное название этой тематической статьи как раз умещающееся в максимум три строки",
    img: "//new.png",
  },
  {
    tag: "в мире",
    date: "13 декабря 2023",
    name: "Чрезвычайно огромное название этой тематической статьи как раз умещающееся в максимум три строки",
    img: "//new.png",
  },
]

export default function News() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? news.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === news.length - 1 ? 0 : c + 1))

  return (
    <div className="bg-[#f0f0f0] px-[40px] py-[60px]">
      <div className="max-w-[1320px] mx-auto">

        <div className="flex items-center gap-[40px] mb-[40px]">
          <h2
            className="text-[52px] leading-[58px] font-black uppercase text-black"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            НОВОСТИ
          </h2>
          <img src="//Component.png" alt="" className="w-[60px] object-contain" />
        </div>

        <div className="grid grid-cols-3 gap-[20px] mb-[40px]">
          {news.map((item, i) => (
            <div key={i} className=" bg-white rounded-[12px] overflow-hidden flex flex-col">

              <div className="relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-[450px] h-auto object-cover"
                />
               <span
  className="absolute text-white top-[12px] left-[12px] text-black text-[13px] px-[12px] py-[4px] rounded-full shadow-md border border-[#E8E8E8]"
  style={{
    fontFamily: "Rubik, sans-serif",

    backgroundColor: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(1px)",
  }}
>
  {item.tag}
</span>
              </div>

              <div className="px-[20px] py-[16px] flex flex-col gap-[8px]">
                <span
                  className="text-[13px] leading-[16px] text-gray-400"
                  style={{ fontFamily: "Rubik, sans-serif" }}
                >
                  {item.date}
                </span>
                
                 <a href="#" className="text-[16px] leading-[22px] text-[#E65910] hover:underline" style={{ fontFamily: "Rubik, sans-serif" }}>
                  {item.name}
                </a>
              </div>

            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-[32px]">
            <button
              onClick={prev}
              className="w-[36px] h-[36px]  flex items-center justify-center text-gray-400 hover:text-black transition-colors text-[24px]"
            >
            <img src="//5de544a178a8843fe056bc1d49e0389fa3c4a2e0.png" alt="" />
            </button>
            <button
              onClick={next}
              className="w-[36px] h-[36px] flex items-center justify-center text-gray-400 hover:text-black transition-colors text-[24px]"
            >
              <img src="//0bbc367be1e2635e5ae2d4e365db9af3339fc5ec.png" alt="" />
            </button>
          </div>

          <button
            className="px-[24px] py-[10px] rounded-full bg-[#E65910] text-white text-[16px] hover:bg-orange-700 transition-colors"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Все новости
          </button>

        </div>

      </div>
    </div>
  )
}