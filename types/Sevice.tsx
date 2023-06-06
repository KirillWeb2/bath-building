import { StaticImageData } from "next/image";

export type ServiceType = {
  id: number;
  image: string | StaticImageData;
  text: string;
  desc: string;
  modalText: string;
};
