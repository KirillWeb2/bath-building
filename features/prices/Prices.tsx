import Image from "next/image";

import img1 from "../../assets/img/season_tickets/1.jpg";
import img2 from "../../assets/img/season_tickets/2.jpg";
import img3 from "../../assets/img/season_tickets/3.jpg";

import arrow from "../../assets/img/icons/bottom-arr.png";

import s from "./Prices.module.scss";
import Link from "next/link";

const list = [
  {
    id: 1,
    image: img1,
    text: "Разовое посещение",
    desc: "Цены на входные билеты",
    thead: ["Время", "2 часа", "3 часа", "4 часа", "Весь день"],
    tbody: [
      ["Будни", "1100₽", "1300₽", "1500₽", "1700₽"],
      ["Будни (льготный)", "800₽", "1000₽", "1200₽", "1400₽"],
      ["Будни (детям до 7 лет)", "490₽", "590₽", "690₽", "790₽"],
      ["Выходные", "1300₽", "1500₽", "1700₽", "2000₽"],
      ["Выходные (льготный)", "1000₽", "1200₽", "1400₽", "1600₽"],
      ["Выходные (детям до 7 лет)", "590₽", "690₽", "790₽", "890₽"],
    ],
  },
  {
    id: 2,
    image: img2,
    text: "Абонементы",
    desc: "Цены на абонементы",
    thead: [
      "Количество часов и срок действия",
      "Стоимость абонемента\n(стоимость часа по абонементу)",
    ],
    tbody: [
      ["15 часов (3 месяца)", "5 400 ₽\n(360 ₽/час)"],
      ["25 часов (4 месяца)", "7 800 ₽\n(312 ₽/час)"],
      ["50 часов (6 месяцев)", "12 000 ₽\n(240 ₽/час)"],
      ["100 часов (12 месяцев)", "18 000 ₽\n(180 ₽/час)"],
    ],
  },
  {
    id: 3,
    image: img3,
    text: "Семейные абонементы",
    desc: "Цены на семейные абонементы",
    thead: [
      "Абонемент",
      "15 часов\n(3 месяца)",
      "25 часов\n(4 месяца)",
      "50 часов\n(6 месяцев)",
      "100 часов\n(12 месяцев)",
    ],
    tbody: [
      ["Выгода", "от 283₽/ч", "от 211₽/ч", "от 165₽/ч", "от 119₽/ч"],
      ["2 взрослых + 1 ребёнок", "12 725", "15 816", "24 728", "35 679"],
      ["2 взрослых + 2 ребёнка", "16 966", "21 088", "32 970", "47 572"],
      ["1 взрослый + 1 ребёнок", "8 483", "10 544", "16 485", "25 485"],
      ["1 взрослый + 2 ребёнка", "12 725", "15 816", "24 728", "38 228"],
      ["1 взрослый + 3 ребёнка", "16 966", "21 088", "32 970", "47 572"],
    ],
  },
];

export const Prices = () => {
  return (
    <div className={s.prices}>
      <div className="py-16 px-2 mx-auto max-w-screen-xl">
        <p className="text-center text-4xl font-normal">Цены и акции</p>
        <div className="pt-16 flex flex-wrap items-center justify-center gap-4 ">
          {list.map((item) => (
            <Link
              className={[s.item, "rounded-3xl cursor-pointer z-0"].join(" ")}
              key={item.id}
              href={`/price/${item.id}`}
            >
              <div>
                <Image
                  className={[s.image, "rounded-3xl z-10"].join(" ")}
                  src={item.image}
                  alt=""
                />
                <div className="z-20 relative p-10 pr-20 text-2xl font-normal text-white">
                  {item.text}
                  <Image className={s.arrow} src={arrow} alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
