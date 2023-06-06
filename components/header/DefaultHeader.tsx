import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import burger from "../../assets/img/icons/burger.png";

export const DefaultHeader = () => {
  const [isVisibleBurger, setIsVisibleBurger] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsVisibleBurger(!isVisibleBurger);
  };

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
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
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
                <Link
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="/"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Главная
                </Link>
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
        </div>
      </nav>
    </header>
  );
};
