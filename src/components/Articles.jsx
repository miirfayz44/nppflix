import React from 'react'

const columns = [
  {
    title: "Выбор и применение фильтров",
    button: "Еще по теме",
    articles: [
      { date: "13 декабря 2023", name: "Короткое название тематической статьи" },
      { date: "13 декабря 2023", name: "Не очень короткое название тематической статьи" },
      { date: "13 декабря 2023", name: "Чуть более длинное название тематической статьи" },
      { date: "13 декабря 2023", name: "Очень очень длинное название этой тематической статьи" },
    ],
  },
  {
    title: "Построение ВЧ/СВЧ трактов аппаратуры",
    button: "Еще по теме",
    articles: [
      { date: "13 декабря 2023", name: "Короткое название тематической статьи" },
      { date: "13 декабря 2023", name: "Не очень короткое название тематической статьи" },
      { date: "13 декабря 2023", name: "Чуть более длинное название тематической статьи" },
      { date: "13 декабря 2023", name: "Очень очень длинное название этой тематической статьи" },
      { date: "13 декабря 2023", name: "Чрезвычайно огромное название этой тематической статьи как раз умещающееся в максимум три строки" },
    ],
  },
  {
    title: "Статьи и публикации",
    button: "Все статьи",
    articles: [
      { date: "13 декабря 2023", name: "Колонка со всеми статьями без какой-либо сортировки" },
      { date: "13 декабря 2023", name: "Не очень короткое название общей или тематической статьи" },
      { date: "13 декабря 2023", name: "Чуть более длинное название одной из многих тематических статей" },
      { date: "13 декабря 2023", name: "Очень очень длинное название этой тематической статьи" },
      { date: "13 декабря 2023", name: "Вполне возможно в этой колонке будут присутствовать и статьи из фильтров слева" },
    ],
  },
]

export default function Articles() {
  return (
    <div className="bg-white max-w-[1320px] mx-auto px-[40px] py-[60px]">

      {/* Header */}
      <div className="grid grid-cols-2 items-center gap-[40px] mb-[48px]">
        <h2
          className="text-[52px] leading-[58px] font-black uppercase text-black"
          style={{ fontFamily: "Arial Black, sans-serif" }}
        >
          В ПОМОЩЬ<br />РАЗРАБОТЧИКУ
        </h2>
        <img src="//Component.png" alt="" className="w-[60px] object-contain" />
      </div>

      {/* Columns */}
      <div className="grid grid-cols-3 gap-[40px]">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col h-full">

            {/* Column title */}
            <h3
              className="text-[24px] leading-[30px] font-normal text-black mb-[24px]"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              {col.title}
            </h3>

            {/* Articles list */}
            <div className="flex flex-col gap-[16px] flex-1">
              {col.articles.map((article, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-[13px] leading-[16px] text-gray-400 mb-[4px]"
                    style={{ fontFamily: "Rubik, sans-serif" }}
                  >
                    {article.date}
                  </span>
                  <div className="flex items-start gap-[8px]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-[3px] flex-shrink-0">
                      <path d="M2 2 L8 6 L2 10" stroke="#E65910" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a
                      href="#"
                      className="text-[15px] leading-[20px] text-[#E65910] hover:underline"
                      style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                      {article.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-[32px]">
              <button
                className="px-[24px] py-[10px] rounded-full bg-[#E65910] text-white text-[16px] hover:bg-orange-700 transition-colors"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                {col.button}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}