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
              Тел:+7 (928) 770-02-51
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              с. Новоникольск, ул. Советская. д. 3 Д
            </p>
            <p className="mb-[8px] text-2xl font-normal text-center">
              Режим работы
            </p>
            <div className="overflow-x-scroll">
              <table className=" min-w-full text-left text-lg font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      Понедельник
                    </td>
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      12.00-00.00
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      Вторник
                    </td>
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      12.00-00.00
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      Среда
                    </td>
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      12.00-00.00
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      Четверг
                    </td>
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      12.00-00.00
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      Воскресенье
                    </td>
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      12.00-00.00
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      Пятница
                    </td>
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      12.00-01.00
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      Суббота
                    </td>
                    <td className={"whitespace-nowrap px-6 py-4 font-medium"}>
                      12.00-01.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              <Link href="https://t.me/ugoryilubava">
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
              <a href="tel:+79287700251">
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
