import { ServiceType } from "@/types/Sevice";
import Image from "next/image";

interface ListProps {
  list: ServiceType[];
  setActiveService: (item: ServiceType) => void;
  openModal: () => void;
}

export const List = ({ list, openModal, setActiveService }: ListProps) => {
  const onSubmit = (item: ServiceType) => {
    setActiveService(item);
    openModal();
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap py-10 gap-10">
        {list.map((el) => (
          <div
            onClick={() => onSubmit(el)}
            key={el.id}
            className="bg-white max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
          >
            <div>
              <Image src={el.image} alt="" />
            </div>
            <div className="flex flex-col justify-between py-4 px-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-600">{el.text}</h3>
              <p className="mt-4 text-lg font-thin">{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
