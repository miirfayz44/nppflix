export default function HeroSlider() {
  return (
    <section className="relative w-full h-[640px] overflow-hidden">

      <img
        src="/bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto h-full px-[40px] grid grid-cols-2 items-center gap-[40px]">

        <h1
          className="text-[65px] leading-[78px] font-normal tracking-[0.1%] uppercase text-[#ff5a00]"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          УНИКАЛЬНЫЕ <br />
          ТЕХНОЛОГИИ <br />
          ПРОИЗВОДСТВА
        </h1>

        <div className="grid grid-cols-2 items-center gap-0">
          <img
            src="/HeroSlider1.png"
            alt="product 1"
            className="w-[340px] object-contain drop-shadow-2xl"
          />
          <img
            src="/HeroSlider2.png"
            alt="product 2"
            className="w-[340px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
}
