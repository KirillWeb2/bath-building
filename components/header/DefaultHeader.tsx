import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../assets/img/icons/logo.svg";

import { useRouter } from "next/router";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import s from "./Header.module.scss";

export const DefaultHeader = () => {
  const router = useRouter();

  const path = router.pathname;

  const [isVisibleBurger, setIsVisibleBurger] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsVisibleBurger(!isVisibleBurger);
  };

  const activeStyle = `block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`;
  const defStyle =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-[#6c6c6c] lg:hover:bg-[#6c6c6c] lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-[#6c6c6c] dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>
      <Navbar className="bg-[#3e3e3e]" expand="lg">
        <Container>
          <Navbar.Brand className={s.logo} href="/">
            <Image src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ backgroundColor: "#fff" }}
            className={s.burger}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link className={"text-white px-3 py-3 text-[18px]"} href="/">
                Главная
              </Link>
              <Link
                className={"text-white px-3 py-3 text-[18px]"}
                href="/price"
              >
                Цены и акции
              </Link>
              <Link
                className={"text-white px-3 py-3 text-[18px]"}
                href="/#form"
              >
                Обратная связь
              </Link>
              <Link
                className={"text-white px-3 py-3 text-[18px]"}
                href="/contacts"
              >
                Контакты
              </Link>
              <Link
                className={"text-white px-3 py-3 text-[18px]"}
                href="/about"
              >
                О нас
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
