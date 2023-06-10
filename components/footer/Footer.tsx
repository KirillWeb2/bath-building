import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/img/icons/logo.svg";

export const Footer = () => {
  return (
    <footer style={{ background: "#3e3e3e" }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="./" className="flex items-center">
              <Image className="h-[50px] w-[100%]" src={logo} alt="" />
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">
            © 2023 DaulbaevDm
          </span>
          <div className="flex text-white space-x-6 sm:justify-center sm:mt-0">
            <a href="tel:+79287700251">+7 (928) 770-02-51</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
