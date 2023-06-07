import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { DefaultHeader } from "./DefaultHeader";
import { useState } from "react";

import bottom_arr from "../../assets/img/icons/bottom-arr.png";
import logo from "../../assets/img/icons/logo.svg";

import s from "./Header.module.scss";

export const Header = () => {
  const router = useRouter();
  const [isVisibleBurger, setIsVisibleBurger] = useState<boolean>(false);

  const path = router.pathname;

  const toggleBurger = () => {
    setIsVisibleBurger(!isVisibleBurger);
  };

  const activeStyle = `block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`;
  const defStyle =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-[#6c6c6c] lg:hover:bg-[#6c6c6c] lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-[#6c6c6c] dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  if (router.pathname !== "/") return <DefaultHeader />;

  return (
    <header>
      <nav className="bg-white h-[60px] z-20 border-gray-200 dark:bg-[#3e3e3e]">
        <div className="flex flex-wrap justify-between h-[60px] items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <span className="z-30 pl-4 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <Image className={s.icon} src={logo} alt="" />
            </span>
          </Link>
          <div className="z-30 flex items-center lg:order-2">
            <button
              onClick={toggleBurger}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center mr-4 p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#6c6c6c] dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              {isVisibleBurger ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={[
              "justify-between absolute top-[60px] bg-[#3e3e3e] z-10 items-center w-full lg:top-[auto] lg:relative lg:flex lg:w-auto lg:order-1",
              isVisibleBurger ? "" : "hidden",
            ].join(" ")}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  onClick={toggleBurger}
                  href="/"
                  className={path === "/" ? activeStyle : defStyle}
                  aria-current="page"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleBurger}
                  href="/price"
                  className={path === "/price" ? activeStyle : defStyle}
                >
                  Цены и акции
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleBurger}
                  href="/#form"
                  className={path === "/#form" ? activeStyle : defStyle}
                >
                  Обратная связь
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleBurger}
                  href="/contacts"
                  className={path === "/contacts" ? activeStyle : defStyle}
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleBurger}
                  href="/about"
                  className={path === "/about" ? activeStyle : defStyle}
                >
                  О нас
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={[
          "relative overflow-hidden bg-cover bg-no-repeat headerbg",
          s.bg,
        ].join(" ")}
        style={{
          backgroundPosition: "50%",
          height: "calc(100vh - 56px)",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-6xl font-bold">
                Банный комплекс &laquo;Любава и К&raquo;
              </h1>
              <h3 className="mb-8 text-2xl font-normal">
                Окунитесь в атмосферу отдыха и релакса, не выезжая из города.
              </h3>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
          <Link href={"#service"}>
            <Image width={50} height={50} src={bottom_arr} alt="..." />
          </Link>
        </div>
      </div>
    </header>
  );
};
