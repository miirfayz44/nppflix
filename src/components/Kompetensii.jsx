export default function Kompetensii() {
  const left = [
    "СВЧ фильтры",
    "СВЧ устройства",
    "Мультиплексоры на керамических резонаторах",
    "Конверторы частот",
  ];

  const right = [
    "Автоматизация производственного оборудования",
    "Автоматизация измерений и испытаний",
    "Опытное производство",
    "Серийное производство",
  ];

  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1320px] mx-auto px-[40px]">

        <div className="flex items-center gap-[60px] mb-[50px]">
          <h2 className="text-[52px] leading-[58px] font-black uppercase text-black">
            НАШИ <br /> КОМПЕТЕНЦИИ
          </h2>

          <img
            src="/Component.png"
            alt=""
            className="w-[110px] h-[52px] object-contain ml-[210px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-[80px]">
          <ul className="flex flex-col gap-[20px]">
            {left.map((item) => (
              <li
                key={item}
                className="text-[32px] leading-[36px] text-[#E65910]"
              >
                — {item}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[20px]">
            {right.map((item) => (
              <li
                key={item}
                className="text-[32px] leading-[36px] text-[#E65910]"
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}