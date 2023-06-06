import { StaticImageData } from "next/image";
import s from "./PriceItem.module.scss";

interface PriceItemProps {
  item: {
    id: number;
    image: string | StaticImageData;
    text: string;
    desc: string;
    thead: string[];
    tbody: string[][];
  };
}

export const PriceItem = ({ item }: PriceItemProps) => {
  return (
    <div className={s.priceitem}>
      <div className="py-16 px-2 mx-auto max-w-screen-xl">
        <p className="pb-16 text-center text-4xl font-normal">{item.desc}</p>
        <div className="overflow-x-scroll">
          <table className=" min-w-full text-left text-lg font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                {item.thead.map((item, ind) => (
                  <th scope="col" className="px-6 py-4" key={ind}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.tbody.map((arr, ind) => (
                <tr className="border-b dark:border-neutral-500" key={ind}>
                  {arr.map((item, ind) => (
                    <td
                      className={
                        ind === 0
                          ? "whitespace-nowrap px-6 py-4 font-medium"
                          : "whitespace-nowrap px-6 py-4"
                      }
                      key={ind}
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
