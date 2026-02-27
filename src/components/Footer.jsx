import { FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const LogoPlaceholder = () => (
  <div className="flex items-center gap-3">
    <img
      src="/logo.png"

      className="h-14 w-auto object-contain"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
    <div>
      <div className="text-2xl font-black text-white tracking-wide leading-none">
        <span className="text-orange-500">НПП </span>ФЛИКС
      </div>
      <div className="text-xs text-gray-400 mt-0.5 tracking-widest uppercase">
        Производство СВЧ устройств
      </div>
    </div>
  </div>
);

const navLeft = [
  "О компании",
  "Продукция",
  "Услуги",
  "Статьи",
  "Контакты",
];

const navRight = [
  "Вакансии",
  "Медиа",
  "Реквизиты",
  "Служба поддержки",
  "Пользовательское соглашение",
];

export default function Footer() {
  return (
    <footer
      className="w-full text-white"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #111111 50%, #0d0d0d 100%)",
        backgroundImage: `
          linear-gradient(135deg, #1a1a1a 0%, #111111 50%, #0d0d0d 100%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
      }}
    >
      {/* Top border accent */}
      <div
        className="h-0.5 w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #f97316, #f97316, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-4 gap-8 items-start">

          <div className="col-span-1 flex flex-col gap-6">
            <div className="group col-span-1">
              <div className="group col-span-1">
                <img
                  src="/your-logo.png"
                  className="h-16 w-auto"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div>
                  <img src="/logo.png" alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                  </div>
                  <div className="text-gray-400 text-xs tracking-widest mt-0.5">
                    
                  </div>
                </div>
              </div>

              
            </div>

            <div className="text-gray-500 text-xs mt-4">
              © 2021–2026 ООО НПП «Фликс»
            </div>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4">
              {navLeft.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-200 text-sm hover:text-orange-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <ul className="space-y-4">
              {navRight.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-200 text-sm hover:text-orange-400 transition-colors duration-200 leading-snug block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contacts */}
          <div className="col-span-1 flex flex-col gap-4 items-end">
            <a
              href="tel:+74950080812"
              className="text-orange-400 font-semibold text-lg hover:text-orange-300 transition-colors duration-200"
            >
              +7 [495] 008 08 12
            </a>
            <a
              href="mailto:info@nppfliks.ru"
              className="text-orange-400 text-sm hover:text-orange-300 transition-colors duration-200"
            >
              info@nppfliks.ru
            </a>

            <div className="flex items-center gap-2 mt-2">
              {[
                { icon: <FiPhone size={16} />, label: "Phone" },
                { icon: <FaWhatsapp size={16} />, label: "WhatsApp" },
                { icon: <FaTelegramPlane size={16} />, label: "Telegram" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-200"
                  style={{ border: "1px solid #f97316", background: "transparent" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}