import Link from "next/link";
import s from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={s.bg}>
      <div className="mx-auto max-w-screen-xl min-h-screen">
        <div className="flex flex-col items-center justify-center h-[100vh] w-[100%]">
          <p className="mb-[30px] text-4xl font-bold text-center">
            Ждём Вас в &quot;Любава и К&quot;!
          </p>
          <div>
            <p className="mb-[8px] text-2xl font-normal text-center">
              Тел:+7 (495) 125-12-58
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              795180, Кемеровская область,
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              город Егорьевск, проезд Космонавтов, 65
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              ТРЦ «БМП», 2 этаж, вход 11
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              Режим работы
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              Понедельник-Воскресенье
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              с 9:00 до 24:00
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              Вход открыт до 22:00
            </p>
          </div>
          <div className="flex items-center gap-[10px] mt-[30px]">
            <div className="bg-[#3e3e3e] p-4 rounded-2xl">
              <Link href="https://www.instagram.com/">
                <svg
                  className="h-8 w-8 text-white cursor-pointer duration-300 transition-all hover:text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#3e3e3e] p-4 rounded-2xl">
              <Link href="https://t.me/lubavaortosalon">
                <svg
                  className="h-8 w-8 text-white cursor-pointer duration-300 transition-all hover:text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#3e3e3e] p-4 rounded-2xl">
              <a href="tel:+74951201058">
                <svg
                  className="h-8 w-8 text-white cursor-pointer duration-300 transition-all hover:text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
