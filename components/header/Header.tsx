import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { DefaultHeader } from "./DefaultHeader";
import { useState } from "react";

import bottom_arr from "../../assets/img/icons/bottom-arr.png";
import logo from "../../assets/img/icons/logo.svg";

import s from "./Header.module.scss";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

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
      <Navbar className="bg-[#3e3e3e]" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image className={s.logo} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link className={"text-white px-3 py-3 text-[18px]"} href="/">Главная</Link>
              <Link className={"text-white px-3 py-3 text-[18px]"} href="/price">Цены и акции</Link>
              <Link className={"text-white px-3 py-3 text-[18px]"} href="/#form">Обратная связь</Link>
              <Link className={"text-white px-3 py-3 text-[18px]"} href="/contacts">Контакты</Link>
              <Link className={"text-white px-3 py-3 text-[18px]"} href="/about">О нас</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
