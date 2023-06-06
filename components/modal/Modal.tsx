import { ServiceType } from "@/types/Sevice";
import Image from "next/image";
import { FC } from "react";

interface ModalProps {
  hiddenModal: () => void;
  activeService: ServiceType | null;
}

export const Modal: FC<ModalProps> = ({ hiddenModal, activeService }) => {
  return (
    <div
      className="py-12 overflow-y-scroll bg-[#374151e6] transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-2xl">
        <div className="relative bg-white shadow-md rounded ">
          <div>
            <Image src={activeService?.image ?? ""} alt="" />
          </div>
          <p className="p-4 text-[18px] md:text-xl">{activeService?.modalText}</p>
          <div className="p-4 mt-[20px] flex items-center justify-start w-full">
            <button
              className="focus:outline-none bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={hiddenModal}
            >
              Cancel
            </button>
          </div>
          <div
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
            onClick={hiddenModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              className="icon icon-tabler icon-tabler-x"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
