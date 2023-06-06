import Image from "next/image";
import Link from "next/link";

import bottom_arr from "../../assets/img/icons/bottom-arr.png";
import burger from "../../assets/img/icons/burger.png";

import s from "./Header.module.scss";
import { useRouter } from "next/router";
import { DefaultHeader } from "./DefaultHeader";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [isVisibleBurger, setIsVisibleBurger] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsVisibleBurger(!isVisibleBurger);
  };

  if (router.pathname !== "/") return <DefaultHeader />;

  return (
    <header>
      <nav
        className="relative h-[56px] flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="p-2 flex items-center">
            <button
              onClick={toggleBurger}
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out text-white hover:text-gray-400 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-5">
                <Image width={30} height={30} src={burger} alt="" />
              </span>
            </button>
          </div>

          <div
            className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentX"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Главная
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="/price"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Цены и акции
                </Link>
              </li>

              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="/about"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          {isVisibleBurger && (
            <div
              className="bg-neutral-600 z-10 grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentX"
              data-te-collapse-item
            >
              <ul
                className="py-3 mr-auto flex flex-col lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li className="py-3 px-3 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    onClick={toggleBurger}
                    className="block transition text-white hover:text-gray-400"
                    href="/"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Главная
                  </Link>
                </li>
                <li className="py-3 px-3 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    onClick={toggleBurger}
                    className="block transition text-white hover:text-gray-400"
                    href="/price"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Цены и акции
                  </Link>
                </li>

                <li className="py-3 px-3 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    onClick={toggleBurger}
                    className="block transition text-white hover:text-gray-400"
                    href="/about"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    О нас
                  </Link>
                </li>
              </ul>
            </div>
          )}
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
                Банный комплекс &laquo;Любава Ико&raquo;
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
